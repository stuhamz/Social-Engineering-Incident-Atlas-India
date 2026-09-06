(() => {
  'use strict';

  const state = {
    data: null,
    view: 'overview',
    caseFilters: { search:'', state:'', attack:'', stage:'', channel:'', impersonation:'', resolution:'', evidence:'' },
    caseSort: 'id',
    actorFilters: { search:'', identity:'', function:'', strength:'' },
    sourceFilters: { search:'', stage:'', tier:'' },
    selectedEvidence: null,
  };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  const titleize = value => String(value || 'Not reported').replaceAll('_',' ').replace(/\b\w/g, m => m.toUpperCase());
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const isPresent = v => v && !['not_reported','not_applicable','unknown','nan'].includes(String(v).toLowerCase());
  const formatINR = n => {
    if (n === null || n === undefined || Number.isNaN(Number(n))) return 'Not reported';
    const x = Number(n);
    if (x >= 1e7) return `₹${(x/1e7).toFixed(x >= 1e8 ? 1 : 2).replace(/\.00$/,'')} cr`;
    if (x >= 1e5) return `₹${(x/1e5).toFixed(x >= 1e6 ? 1 : 2).replace(/\.00$/,'')} lakh`;
    return `₹${new Intl.NumberFormat('en-IN',{maximumFractionDigits:0}).format(x)}`;
  };
  const formatCount = n => new Intl.NumberFormat('en-IN').format(n || 0);
  const pct = (part,total) => total ? Math.round(part/total*100) : 0;

  async function loadData(){
    const res = await fetch('./data/atlas.json', {cache:'no-store'});
    if (!res.ok) throw new Error(`Could not load Atlas data (${res.status})`);
    state.data = await res.json();
  }

  function setView(view, options={}){
    state.view = view;
    $$('[data-view-panel]').forEach(el => el.classList.toggle('is-active', el.dataset.viewPanel === view));
    $$('.nav-link').forEach(el => el.classList.toggle('is-active', el.dataset.view === view));
    $('.topbar').classList.remove('nav-open');
    if (!options.preserveHash) history.replaceState(null,'',`#${view}`);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function setupNav(){
    $$('[data-view]').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
    $('#mobileNavToggle').addEventListener('click', () => $('.topbar').classList.toggle('nav-open'));
    $('#methodologyToggle').addEventListener('click', () => $('#methodologyDialog').showModal());
    $('#methodologyClose').addEventListener('click', () => $('#methodologyDialog').close());
    $('#dialogClose').addEventListener('click', () => $('#caseDialog').close());
    $('#caseDialog').addEventListener('click', e => { if (e.target === $('#caseDialog')) $('#caseDialog').close(); });
    $('#methodologyDialog').addEventListener('click', e => { if (e.target === $('#methodologyDialog')) $('#methodologyDialog').close(); });
  }

  function renderMetrics(){
    const m = state.data.meta;
    const metrics = [
      [m.case_count,'Reviewed incidents'],
      [m.actor_count,'Actor-role records'],
      [m.source_count,'Registered sources'],
      [m.states_ut_count,'States / UTs represented'],
      [`${m.year_min}–${m.year_max}`,'Incident years represented']
    ];
    $('#metricStrip').innerHTML = metrics.map(([v,l]) => `<div class="metric"><strong>${escapeHtml(v)}</strong><span>${escapeHtml(l)}</span></div>`).join('');
    $('#footerVersion').textContent = m.research_data_version;
  }

  function renderAttackChart(){
    const data = state.data.charts.attack_categories.slice(0,9);
    const max = Math.max(...data.map(d=>d.count),1);
    $('#attackChart').innerHTML = data.map(d => `
      <button class="bar-item" data-filter-attack="${escapeHtml(d.key)}" aria-label="Show ${escapeHtml(d.label)} cases">
        <span class="bar-value">${d.count}</span>
        <span class="bar-stick" style="height:${Math.max(7,d.count/max*100)}%"></span>
        <span class="bar-label">${escapeHtml(d.label)}</span>
      </button>`).join('');
    $$('[data-filter-attack]').forEach(el => el.addEventListener('click', () => {
      state.caseFilters.attack = el.dataset.filterAttack;
      syncCaseControls(); renderCases(); setView('cases');
    }));
  }

  function renderStateChart(){
    const data = state.data.charts.states.slice(0,8);
    $('#stateChart').innerHTML = data.map((d,i)=>`
      <button class="rank-row" data-filter-state="${escapeHtml(d.key)}">
        <span class="rank-index">${String(i+1).padStart(2,'0')}</span>
        <span class="rank-name">${escapeHtml(d.key)}</span>
        <span class="rank-count">${d.count}</span>
      </button>`).join('');
    $$('[data-filter-state]').forEach(el => el.addEventListener('click',()=>{
      state.caseFilters.state=el.dataset.filterState; syncCaseControls(); renderCases(); setView('cases');
    }));
  }

  function renderStageChart(){
    const data = state.data.charts.source_stages;
    const total = data.reduce((a,b)=>a+b.count,0);
    const palette = ['#0d2927','#2b6f67','#6f9d8f','#b9934b','#b24b2c','#9e8072'];
    let current=0;
    const stops=data.map((d,i)=>{
      const start=current; current += d.count/total*100; return `${palette[i%palette.length]} ${start}% ${current}%`;
    }).join(',');
    $('#stageChart').innerHTML = `<div class="donut" style="background:conic-gradient(${stops})"><div class="donut-center"><strong>${total}</strong><span>cases</span></div></div><div class="donut-legend">${data.map((d,i)=>`<button class="legend-row" data-filter-stage="${escapeHtml(d.key)}"><i class="legend-dot" style="background:${palette[i%palette.length]}"></i><span>${escapeHtml(d.label)}</span><strong>${d.count}</strong></button>`).join('')}</div>`;
    $$('[data-filter-stage]').forEach(el=>el.addEventListener('click',()=>{state.caseFilters.stage=el.dataset.filterStage;syncCaseControls();renderCases();setView('cases');}));
  }

  function renderEvidenceOverview(){
    const data=state.data.charts.evidence.slice(0,10), total=state.data.meta.case_count;
    $('#evidenceOverviewChart').innerHTML=data.map(d=>`<button class="evidence-bar" data-evidence="${escapeHtml(d.label)}"><label>${escapeHtml(d.label)}</label><span class="evidence-track"><i class="evidence-fill" style="width:${pct(d.count,total)}%"></i></span><strong>${d.count}</strong></button>`).join('');
    $$('[data-evidence]', $('#evidenceOverviewChart')).forEach(el=>el.addEventListener('click',()=>selectEvidence(el.dataset.evidence,true)));
  }

  function renderResolutionChart(){
    $('#resolutionChart').innerHTML=state.data.charts.resolution.map(d=>`<button class="resolution-card" data-resolution="${escapeHtml(d.key)}"><strong>${d.count}</strong><span>${escapeHtml(d.label)}</span></button>`).join('');
    $$('[data-resolution]').forEach(el=>el.addEventListener('click',()=>{state.caseFilters.resolution=el.dataset.resolution;syncCaseControls();renderCases();setView('cases');}));
  }

  function renderYearChart(){
    const data=state.data.charts.years, max=Math.max(...data.map(d=>d.count),1);
    $('#yearChart').innerHTML=data.map((d,i)=>`<button class="spark-col" title="${d.year}: ${d.count} cases" data-year="${d.year}"><i class="spark-bar" style="height:${Math.max(4,d.count/max*100)}%"></i>${(i===0||i===data.length-1||d.year%3===0)?`<span class="spark-year">${d.year}</span>`:''}</button>`).join('');
    $$('[data-year]').forEach(el=>el.addEventListener('click',()=>{
      const y=el.dataset.year; state.caseFilters.search=y; syncCaseControls(); renderCases(); setView('cases');
    }));
  }

  function fillSelect(id, values, labelFn=titleize){
    const select=$(id); const first=select.options[0]?.outerHTML || '<option value="">All</option>';
    select.innerHTML=first + values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(labelFn(v))}</option>`).join('');
  }

  function setupCaseFilters(){
    fillSelect('#filterState',state.data.filters.states,v=>v);
    fillSelect('#filterAttack',state.data.filters.attack_categories);
    fillSelect('#filterStage',state.data.filters.source_stages);
    fillSelect('#filterChannel',state.data.filters.channels);
    fillSelect('#filterImpersonation',state.data.filters.impersonation_categories);
    fillSelect('#filterEvidence',state.data.charts.evidence.map(d=>d.label),v=>v);
    const bindings={
      '#caseSearch':['search','input'], '#filterState':['state','change'], '#filterAttack':['attack','change'], '#filterStage':['stage','change'],
      '#filterChannel':['channel','change'], '#filterImpersonation':['impersonation','change'], '#filterResolution':['resolution','change'], '#filterEvidence':['evidence','change']
    };
    Object.entries(bindings).forEach(([id,[key,event]])=>$(id).addEventListener(event,e=>{state.caseFilters[key]=e.target.value;renderCases();}));
    $('#caseSort').addEventListener('change',e=>{state.caseSort=e.target.value;renderCases();});
    $('#resetCaseFilters').addEventListener('click',()=>{state.caseFilters={search:'',state:'',attack:'',stage:'',channel:'',impersonation:'',resolution:'',evidence:''};state.caseSort='id';syncCaseControls();renderCases();});
  }

  function syncCaseControls(){
    const map={search:'#caseSearch',state:'#filterState',attack:'#filterAttack',stage:'#filterStage',channel:'#filterChannel',impersonation:'#filterImpersonation',resolution:'#filterResolution',evidence:'#filterEvidence'};
    Object.entries(map).forEach(([k,id])=>$(id).value=state.caseFilters[k]||'');
    $('#caseSort').value=state.caseSort;
  }

  function filterCases(){
    const f=state.caseFilters;
    const search=f.search.trim().toLowerCase();
    let rows=state.data.cases.filter(c=>{
      if(f.state && c.state!==f.state) return false;
      if(f.attack && c.attack_category_primary!==f.attack) return false;
      if(f.stage && c.source_stage!==f.stage) return false;
      if(f.channel && !c.contact_channels.includes(f.channel) && c.contact_channel_primary!==f.channel) return false;
      if(f.impersonation && c.impersonated_identity_category!==f.impersonation) return false;
      if(f.resolution && c.resolution_summary!==f.resolution) return false;
      if(f.evidence && !c.evidence_present.includes(f.evidence)) return false;
      if(search){
        const hay=[c.case_id,c.case_title,c.incident_year,c.state,c.city,c.attack_category_primary,c.attack_category_secondary,c.platform_primary,c.impersonated_identity_detail,c.target_sector,c.initial_contact_summary,c.pretext_summary,c.requested_action,c.victim_action,c.other_evidence,c.case_summary,c.attribution_limitations,c.primary_evidentiary_gap,...c.evidence_present].join(' ').toLowerCase();
        if(!hay.includes(search)) return false;
      }
      return true;
    });
    if(state.caseSort==='year-desc') rows.sort((a,b)=>(b.incident_year_number||0)-(a.incident_year_number||0)||a.case_id.localeCompare(b.case_id));
    else if(state.caseSort==='loss-desc') rows.sort((a,b)=>(b.financial_loss_inr_number||-1)-(a.financial_loss_inr_number||-1));
    else rows.sort((a,b)=>a.case_id.localeCompare(b.case_id));
    return rows;
  }

  function caseCard(c){
    const meta=[c.state,isPresent(c.incident_year)?c.incident_year:null,titleize(c.attack_category_primary)].filter(Boolean);
    return `<article class="case-card" data-case-id="${escapeHtml(c.case_id)}" tabindex="0">
      <span class="case-id">${escapeHtml(c.case_id)}</span>
      <h3>${escapeHtml(c.case_title)}</h3>
      <div class="case-meta">${meta.map(x=>`<span>${escapeHtml(x)}</span>`).join('<span>·</span>')}</div>
      <p class="case-summary">${escapeHtml(c.case_summary||c.pretext_summary)}</p>
      <div class="case-footer">
        <div class="case-loss"><small>Reported focal loss</small><strong>${formatINR(c.financial_loss_inr_number)}</strong></div>
        <div class="case-resolution"><small>Human resolution</small><span class="resolution-pill">${escapeHtml(titleize(c.resolution_summary))}</span></div>
      </div>
    </article>`;
  }

  function renderActiveCaseFilters(){
    const labels={state:'State',attack:'Attack',stage:'Stage',channel:'Channel',impersonation:'Impersonation',resolution:'Resolution',evidence:'Evidence',search:'Search'};
    const chips=Object.entries(state.caseFilters).filter(([,v])=>v).map(([k,v])=>`<span class="filter-chip">${labels[k]}: ${escapeHtml(k==='search'?v:titleize(v))}</span>`);
    $('#activeCaseFilters').innerHTML=chips.join('');
  }

  function renderCases(){
    const rows=filterCases();
    $('#caseResultCount').textContent=rows.length;
    renderActiveCaseFilters();
    $('#caseGrid').innerHTML=rows.length?rows.map(caseCard).join(''):`<div class="empty-state">No reviewed incidents match this combination of filters.</div>`;
    $$('.case-card').forEach(el=>{
      el.addEventListener('click',()=>openCase(el.dataset.caseId));
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(el.dataset.caseId)}});
    });
  }

  function sourceBlock(s){
    const url=s.url || s.archive_url;
    return `<div class="source-mini"><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(s.title||s.source_id)} ↗</a><p>${escapeHtml([titleize(s.source_stage),s.court_or_body||s.publisher_or_authority,s.case_number].filter(Boolean).join(' · '))}</p>${s.claim_scope?`<p>${escapeHtml(s.claim_scope)}</p>`:''}</div>`;
  }

  function actorMini(a){
    const flags=[]; if(a.victim_facing_function==='yes')flags.push('Victim-facing'); if(a.financial_function==='yes')flags.push('Financial');
    return `<div class="actor-mini"><strong>${escapeHtml(a.actor_label)}</strong><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.identity_resolution))}</span>${flags.map(f=>`<span class="badge">${f}</span>`).join('')}<span class="badge">${escapeHtml(titleize(a.attribution_strength))}</span></div><p>${escapeHtml(a.conduct_assessed)}</p>${a.attribution_limitations?`<p><strong>Limit:</strong> ${escapeHtml(a.attribution_limitations)}</p>`:''}</div>`;
  }

  function openCase(caseId){
    const c=state.data.cases.find(x=>x.case_id===caseId); if(!c)return;
    const flow=[
      ['Initial contact',c.initial_contact_summary],['Pretext',c.pretext_summary],['Requested action',c.requested_action],['Victim action',c.victim_action]
    ].filter(([,v])=>isPresent(v));
    const tags=[c.state,isPresent(c.incident_year)?c.incident_year:null,titleize(c.attack_category_primary),titleize(c.source_stage)].filter(Boolean);
    const mechanisms=c.psychological_mechanisms.length?c.psychological_mechanisms:['Not explicitly coded'];
    const evidence=c.evidence_present.length?c.evidence_present:['No specific evidence field coded yes'];
    $('#caseDialogContent').innerHTML=`<div class="dialog-inner">
      <p class="eyebrow">${escapeHtml(c.case_id)} / REVIEWED INCIDENT</p>
      <h1>${escapeHtml(c.case_title)}</h1>
      <div class="dialog-meta">${tags.map(t=>`<span class="dialog-tag">${escapeHtml(t)}</span>`).join('')}</div>
      <div class="dialog-grid">
        <div>
          <section class="dialog-section"><h2>Attack reconstruction</h2><div class="attack-flow">${flow.map(([l,v])=>`<div class="flow-step"><strong>${escapeHtml(l)}</strong><br>${escapeHtml(v)}</div>`).join('')}</div></section>
          <section class="dialog-section"><h2>Case summary</h2><p>${escapeHtml(c.case_summary)}</p></section>
          <section class="dialog-section"><h2>Attribution boundary</h2><p><strong>Assessed target:</strong> ${escapeHtml(c.attribution_target||'Not separately stated')}</p><p>${escapeHtml(c.attribution_limitations)}</p>${c.primary_evidentiary_gap?`<p><strong>Primary evidentiary gap:</strong> ${escapeHtml(c.primary_evidentiary_gap)}</p>`:''}</section>
        </div>
        <div>
          <section class="dialog-section"><h2>Incident profile</h2><p><strong>Platform / service:</strong> ${escapeHtml(c.platform_primary||'Not reported')}<br><strong>Impersonation:</strong> ${escapeHtml(c.impersonated_identity_detail||titleize(c.impersonated_identity_category))}<br><strong>Target:</strong> ${escapeHtml(titleize(c.target_type))}${c.target_sector?` · ${escapeHtml(c.target_sector)}`:''}<br><strong>Reported focal loss:</strong> ${formatINR(c.financial_loss_inr_number)}</p></section>
          <section class="dialog-section"><h2>Psychological mechanisms</h2><div class="evidence-chipset">${mechanisms.map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></section>
          <section class="dialog-section"><h2>Evidence in the record</h2><div class="evidence-chipset">${evidence.map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div>${c.other_evidence?`<p>${escapeHtml(c.other_evidence)}</p>`:''}</section>
          <section class="dialog-section"><h2>Actor assessments</h2>${c.actors.length?c.actors.map(actorMini).join(''):'<p>No actor records linked.</p>'}</section>
          <section class="dialog-section"><h2>Sources</h2>${c.sources.length?c.sources.map(sourceBlock).join(''):'<p>No linked source found.</p>'}</section>
        </div>
      </div>
    </div>`;
    $('#caseDialog').showModal();
    history.replaceState(null,'',`#case=${encodeURIComponent(caseId)}`);
  }

  function setupActors(){
    fillSelect('#actorIdentity',state.data.filters.identity_resolution);
    fillSelect('#actorStrength',state.data.filters.actor_strength);
    $('#actorSearch').addEventListener('input',e=>{state.actorFilters.search=e.target.value;renderActors()});
    $('#actorIdentity').addEventListener('change',e=>{state.actorFilters.identity=e.target.value;renderActors()});
    $('#actorFunction').addEventListener('change',e=>{state.actorFilters.function=e.target.value;renderActors()});
    $('#actorStrength').addEventListener('change',e=>{state.actorFilters.strength=e.target.value;renderActors()});
  }

  function renderActorSummary(){
    const counts=Object.fromEntries(state.data.charts.identity_resolution.map(d=>[d.key,d.count]));
    const cards=[['identified','Identified'],['partially_identified','Partially identified'],['actor_cluster','Actor clusters'],['unknown','Unknown']];
    $('#actorSummary').innerHTML=cards.map(([k,l])=>`<div class="actor-summary-card"><strong>${counts[k]||0}</strong><span>${l}</span></div>`).join('');
  }

  function renderActors(){
    const f=state.actorFilters, q=f.search.toLowerCase().trim();
    let rows=state.data.actors.filter(a=>{
      if(f.identity&&a.identity_resolution!==f.identity)return false;
      if(f.strength&&a.attribution_strength!==f.strength)return false;
      if(f.function==='victim'&&a.victim_facing_function!=='yes')return false;
      if(f.function==='financial'&&a.financial_function!=='yes')return false;
      if(f.function==='both'&&!(a.victim_facing_function==='yes'&&a.financial_function==='yes'))return false;
      if(q&&!([a.actor_id,a.case_id,a.actor_label,a.role_primary,a.role_secondary,a.conduct_assessed,a.attribution_basis_primary,a.attribution_basis_secondary,a.attribution_limitations].join(' ').toLowerCase().includes(q)))return false;
      return true;
    });
    rows=rows.slice().sort((a,b)=>a.case_id.localeCompare(b.case_id)||a.actor_id.localeCompare(b.actor_id));
    $('#actorList').innerHTML=rows.length?rows.map(a=>{
      const flags=[];if(a.victim_facing_function==='yes')flags.push('Victim-facing');if(a.financial_function==='yes')flags.push('Financial');
      return `<div class="actor-row"><button class="actor-link actor-case" data-case-id="${escapeHtml(a.case_id)}">${escapeHtml(a.case_id)}</button><div><div class="actor-label">${escapeHtml(a.actor_label)}</div><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.identity_resolution))}</span>${flags.map(x=>`<span class="badge">${x}</span>`).join('')}</div></div><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.attribution_strength))}</span><span class="badge">${escapeHtml(titleize(a.role_primary))}</span></div><div class="actor-conduct"><strong>Evidence basis</strong><br>${escapeHtml([titleize(a.attribution_basis_primary),titleize(a.attribution_basis_secondary)].filter(x=>x!=='Not Reported').join(' · '))}</div><div class="actor-conduct">${escapeHtml(a.conduct_assessed)}</div></div>`;
    }).join(''):`<div class="empty-state">No actor assessments match these filters.</div>`;
    $$('.actor-link[data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));
  }

  function setupEvidence(){ renderEvidenceCatalog(); }

  function renderEvidenceCatalog(){
    const total=state.data.meta.case_count;
    $('#evidenceCatalog').innerHTML=state.data.charts.evidence.map(d=>`<button class="evidence-card" data-evidence-card="${escapeHtml(d.label)}"><strong>${d.count}</strong><span>${escapeHtml(d.label)} · ${pct(d.count,total)}% of reviewed incidents</span><div class="mini-track"><i style="width:${pct(d.count,total)}%"></i></div></button>`).join('');
    $$('[data-evidence-card]').forEach(el=>el.addEventListener('click',()=>selectEvidence(el.dataset.evidenceCard,false)));
  }

  function selectEvidence(label,jump){
    state.selectedEvidence=label;
    $$('[data-evidence-card]').forEach(el=>el.classList.toggle('is-active',el.dataset.evidenceCard===label));
    const cases=state.data.cases.filter(c=>c.evidence_present.includes(label));
    $('#evidenceInspector').innerHTML=`<p class="eyebrow">EVIDENCE TYPE</p><h2>${escapeHtml(label)}</h2><p><strong>${cases.length}</strong> of ${state.data.meta.case_count} reviewed incidents contain this evidence flag.</p><p>Select a case below to inspect what the record says and, crucially, what the evidence still does not establish.</p><div class="inspector-case-list">${cases.slice(0,14).map(c=>`<button class="inspector-case" data-case-id="${escapeHtml(c.case_id)}"><strong>${escapeHtml(c.case_id)} · ${escapeHtml(c.case_title)}</strong><span>${escapeHtml(c.state)} · ${escapeHtml(titleize(c.attack_category_primary))}</span></button>`).join('')}</div>${cases.length>14?`<button class="primary-action" id="showAllEvidenceCases">Show all ${cases.length} cases</button>`:''}`;
    $$('.inspector-case[data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));
    const show=$('#showAllEvidenceCases'); if(show)show.addEventListener('click',()=>{state.caseFilters.evidence=label;syncCaseControls();renderCases();setView('cases')});
    if(jump)setView('evidence');
  }

  function setupSources(){
    fillSelect('#sourceStageFilter',[...new Set(state.data.sources.map(s=>s.source_stage).filter(Boolean))].sort());
    fillSelect('#sourceTierFilter',[...new Set(state.data.sources.map(s=>s.source_tier).filter(Boolean))].sort(),v=>v);
    $('#sourceSearch').addEventListener('input',e=>{state.sourceFilters.search=e.target.value;renderSources()});
    $('#sourceStageFilter').addEventListener('change',e=>{state.sourceFilters.stage=e.target.value;renderSources()});
    $('#sourceTierFilter').addEventListener('change',e=>{state.sourceFilters.tier=e.target.value;renderSources()});
  }

  function renderSources(){
    const f=state.sourceFilters,q=f.search.toLowerCase().trim();
    const rows=state.data.sources.filter(s=>{
      if(f.stage&&s.source_stage!==f.stage)return false;
      if(f.tier&&s.source_tier!==f.tier)return false;
      if(q&&!([s.source_id,s.case_id,s.title,s.publisher_or_authority,s.court_or_body,s.case_number,s.claim_scope].join(' ').toLowerCase().includes(q)))return false;
      return true;
    });
    $('#sourceList').innerHTML=rows.length?rows.map(s=>`<div class="source-row"><div><span class="source-id">${escapeHtml(s.source_id)}</span><br><button class="actor-link" data-case-id="${escapeHtml(s.case_id)}">${escapeHtml(s.case_id)}</button></div><div class="source-title">${escapeHtml(s.title)}</div><div class="source-meta">${escapeHtml(s.court_or_body||s.publisher_or_authority)}<br>${escapeHtml(s.case_number)}</div><div class="source-meta">${escapeHtml(titleize(s.source_stage))}<br>${escapeHtml(s.source_tier)}</div><a href="${escapeHtml(s.url||s.archive_url)}" target="_blank" rel="noreferrer">Open source ↗</a></div>`).join(''):`<div class="empty-state">No registered sources match these filters.</div>`;
    $$('#sourceList [data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));
  }

  function resolveInitialRoute(){
    const hash=location.hash.replace(/^#/,'');
    if(hash.startsWith('case=')){ const id=decodeURIComponent(hash.split('=')[1]||''); setView('cases',{preserveHash:true}); openCase(id); return; }
    if(['overview','cases','actors','evidence','sources'].includes(hash))setView(hash,{preserveHash:true});
  }

  async function init(){
    try{
      await loadData();
      setupNav();
      renderMetrics(); renderAttackChart(); renderStateChart(); renderStageChart(); renderEvidenceOverview(); renderResolutionChart(); renderYearChart();
      setupCaseFilters(); renderCases();
      setupActors(); renderActorSummary(); renderActors();
      setupEvidence();
      setupSources(); renderSources();
      resolveInitialRoute();
      setTimeout(()=>$('#loadingScreen').classList.add('is-hidden'),150);
    }catch(err){
      console.error(err);
      $('#loadingScreen').innerHTML=`<div class="loading-mark">!</div><p>${escapeHtml(err.message)}</p>`;
    }
  }

  document.addEventListener('DOMContentLoaded',init);
})();
