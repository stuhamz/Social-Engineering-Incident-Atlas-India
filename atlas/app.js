(() => {
  'use strict';

  const emptyCaseFilters = () => ({
    search:'', state:'', attack:'', yearFrom:'', yearTo:'', stage:'', channel:'', impersonation:'',
    target:'', payment:'', mechanism:'', crossBorder:'', strength:'', credential:'', deviceCompromise:'',
    resolution:'', evidence:''
  });

  const state = {
    data:null,
    view:'overview',
    caseFilters:emptyCaseFilters(),
    caseSort:'id',
    actorFilters:{search:'',identity:'',function:'',strength:''},
    sourceFilters:{search:'',stage:'',tier:''},
    selectedEvidence:null,
    compareIds:[],
    lastViewBeforeCase:'cases',
    routing:false,
  };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  const titleize = value => String(value || 'Not reported').replaceAll('_',' ').replace(/\b\w/g, m => m.toUpperCase());
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const isPresent = v => v !== null && v !== undefined && String(v).trim() !== '' && !['not_reported','not_applicable','unknown','nan'].includes(String(v).toLowerCase());
  const formatCount = n => new Intl.NumberFormat('en-IN').format(n || 0);
  const pct = (part,total) => total ? Math.round(part/total*100) : 0;
  const caseById = id => state.data?.cases.find(c => c.case_id === id);

  const formatINR = n => {
    if (n === null || n === undefined || Number.isNaN(Number(n))) return 'Not reported';
    const x = Number(n);
    if (x >= 1e7) return `₹${(x/1e7).toFixed(x >= 1e8 ? 1 : 2).replace(/\.00$/,'')} cr`;
    if (x >= 1e5) return `₹${(x/1e5).toFixed(x >= 1e6 ? 1 : 2).replace(/\.00$/,'')} lakh`;
    return `₹${new Intl.NumberFormat('en-IN',{maximumFractionDigits:0}).format(x)}`;
  };

  function toast(message){
    const el=$('#toast');
    el.textContent=message;
    el.classList.add('is-visible');
    clearTimeout(toast.timer);
    toast.timer=setTimeout(()=>el.classList.remove('is-visible'),1800);
  }

  async function copyText(text, message='Copied'){
    try{
      await navigator.clipboard.writeText(text);
      toast(message);
    }catch{
      const ta=document.createElement('textarea');
      ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove(); toast(message);
    }
  }

  async function loadData(){
    const res=await fetch('./data/atlas.json',{cache:'no-store'});
    if(!res.ok) throw new Error(`Could not load Atlas data (${res.status})`);
    state.data=await res.json();
  }

  function setHash(hash, replace=false){
    const target=`#${hash}`;
    if(location.hash===target) return;
    if(replace) history.replaceState(null,'',target); else history.pushState(null,'',target);
  }

  function setView(view, options={}){
    state.view=view;
    $$('[data-view-panel]').forEach(el=>el.classList.toggle('is-active',el.dataset.viewPanel===view));
    $$('.nav-link').forEach(el=>el.classList.toggle('is-active',el.dataset.view===view));
    $('.topbar').classList.remove('nav-open');
    if(!options.preserveHash) setHash(view,!!options.replaceHash);
    if(!options.noScroll) window.scrollTo({top:0,behavior:'smooth'});
  }

  function setupNav(){
    $$('[data-view]').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
    $('#mobileNavToggle').addEventListener('click',()=>$('.topbar').classList.toggle('nav-open'));
    $('#dialogClose').addEventListener('click',closeCase);
    $('#caseDialog').addEventListener('click',e=>{if(e.target===$('#caseDialog')) closeCase();});
    $('#copyDatasetCitation').addEventListener('click',()=>copyText(state.data.meta.citation,'Dataset citation copied'));
    window.addEventListener('hashchange',()=>applyRoute());
  }

  function renderMetrics(){
    const m=state.data.meta;
    const metrics=[[m.case_count,'Reviewed incidents'],[m.actor_count,'Actor-role records'],[m.source_count,'Registered sources'],[m.states_ut_count,'States / UTs represented'],[`${m.year_min}–${m.year_max}`,'Incident years represented']];
    $('#metricStrip').innerHTML=metrics.map(([v,l])=>`<div class="metric"><strong>${escapeHtml(v)}</strong><span>${escapeHtml(l)}</span></div>`).join('');
    $('#footerVersion').textContent=`${m.research_data_version} · Interface ${m.interface_version}`;
    $('#methodVersion').textContent=`Current public interface: ${m.interface_version}. Research layer: ${m.research_data_version}.`;
  }

  function renderAttackChart(){
    const data=state.data.charts.attack_categories.slice(0,9), max=Math.max(...state.data.charts.attack_categories.map(d=>d.count),1);
    $('#attackChart').innerHTML=data.map(d=>`<button class="bar-item" data-filter-attack="${escapeHtml(d.key)}" aria-label="Show ${escapeHtml(d.label)} cases"><span class="bar-value">${d.count}</span><span class="bar-stick" style="height:${Math.max(7,d.count/max*100)}%"></span><span class="bar-label">${escapeHtml(d.label)}</span></button>`).join('');
    $$('[data-filter-attack]').forEach(el=>el.addEventListener('click',()=>jumpToCases({attack:el.dataset.filterAttack})));
  }

  function renderStateChart(){
    const data=state.data.charts.states.slice(0,8);
    $('#stateChart').innerHTML=data.map((d,i)=>`<button class="rank-row" data-filter-state="${escapeHtml(d.key)}"><span class="rank-index">${String(i+1).padStart(2,'0')}</span><span class="rank-name">${escapeHtml(d.key)}</span><span class="rank-count">${d.count}</span></button>`).join('');
    $$('[data-filter-state]').forEach(el=>el.addEventListener('click',()=>jumpToCases({state:el.dataset.filterState})));
  }

  function renderStageChart(){
    const data=state.data.charts.source_stages, total=data.reduce((a,b)=>a+b.count,0);
    const palette=['#0d2927','#2b6f67','#6f9d8f','#b9934b','#b24b2c','#9e8072'];
    let current=0;
    const stops=data.map((d,i)=>{const start=current;current+=d.count/total*100;return `${palette[i%palette.length]} ${start}% ${current}%`;}).join(',');
    $('#stageChart').innerHTML=`<div class="donut" style="background:conic-gradient(${stops})"><div class="donut-center"><strong>${total}</strong><span>cases</span></div></div><div class="donut-legend">${data.map((d,i)=>`<button class="legend-row" data-stage-jump="${escapeHtml(d.key)}"><i class="legend-dot" style="background:${palette[i%palette.length]}"></i><span>${escapeHtml(d.label)}</span><strong>${d.count}</strong></button>`).join('')}</div>`;
    $$('[data-stage-jump]').forEach(el=>el.addEventListener('click',()=>jumpToCases({stage:el.dataset.stageJump})));
  }

  function renderEvidenceOverview(){
    const data=state.data.charts.evidence.slice(0,10), total=state.data.meta.case_count;
    $('#evidenceOverviewChart').innerHTML=data.map(d=>`<button class="evidence-bar" data-evidence="${escapeHtml(d.label)}"><label>${escapeHtml(d.label)}</label><span class="evidence-track"><i class="evidence-fill" style="width:${pct(d.count,total)}%"></i></span><strong>${d.count}</strong></button>`).join('');
    $$('[data-evidence]',$('#evidenceOverviewChart')).forEach(el=>el.addEventListener('click',()=>selectEvidence(el.dataset.evidence,true)));
  }

  function renderResolutionChart(){
    $('#resolutionChart').innerHTML=state.data.charts.resolution.map(d=>`<button class="resolution-card" data-resolution="${escapeHtml(d.key)}"><strong>${d.count}</strong><span>${escapeHtml(d.label)}</span></button>`).join('');
    $$('[data-resolution]').forEach(el=>el.addEventListener('click',()=>jumpToCases({resolution:el.dataset.resolution})));
  }

  function renderYearChart(){
    const data=state.data.charts.years,max=Math.max(...data.map(d=>d.count),1);
    $('#yearChart').innerHTML=data.map((d,i)=>`<button class="spark-col" title="${d.year}: ${d.count} cases" data-year-jump="${d.year}"><i class="spark-bar" style="height:${Math.max(4,d.count/max*100)}%"></i>${(i===0||i===data.length-1||d.year%3===0)?`<span class="spark-year">${d.year}</span>`:''}</button>`).join('');
    $$('[data-year-jump]').forEach(el=>el.addEventListener('click',()=>jumpToCases({yearFrom:el.dataset.yearJump,yearTo:el.dataset.yearJump})));
  }

  function renderMap(){
    const points=state.data.charts.geo_points,max=Math.max(...points.map(d=>d.count),1);
    const offsets={Delhi:[1.4,-.8],Haryana:[-1.3,1.1],Chandigarh:[1.2,-1.1],Punjab:[-1.0,-.8],"Uttar Pradesh":[1.2,1.0]};
    const toXY=(lat,lon,stateName)=>{
      let x=(lon-67)/(98-67)*100, y=(38-lat)/(38-5)*100;
      const o=offsets[stateName]||[0,0]; return [x+o[0],y+o[1]];
    };
    $('#mapPins').innerHTML=points.map(d=>{
      const [x,y]=toXY(d.lat,d.lon,d.key); const size=15+Math.sqrt(d.count/max)*30;
      return `<button class="map-pin" data-map-state="${escapeHtml(d.key)}" title="${escapeHtml(d.key)}: ${d.count} reviewed cases" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--pin-size:${size.toFixed(1)}px"><span>${escapeHtml(d.key)} · ${d.count}</span></button>`;
    }).join('');
    $$('[data-map-state]').forEach(el=>el.addEventListener('click',()=>inspectMapState(el.dataset.mapState)));
  }

  function inspectMapState(name){
    $$('[data-map-state]').forEach(el=>el.classList.toggle('is-active',el.dataset.mapState===name));
    const cases=state.data.cases.filter(c=>c.state===name);
    const cats=[...new Set(cases.map(c=>titleize(c.attack_category_primary)))].sort();
    $('#mapInspector').innerHTML=`<p class="eyebrow">CORPUS COVERAGE</p><div class="map-stat">${cases.length}</div><h3>${escapeHtml(name)}</h3><p>reviewed incident${cases.length===1?'':'s'} in the current Atlas corpus. This number reflects retrieval and source availability, not state cybercrime prevalence.</p><div class="map-list">${cats.slice(0,8).map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div><button class="primary-action" id="mapExploreState">Explore ${escapeHtml(name)} cases</button>`;
    $('#mapExploreState').addEventListener('click',()=>jumpToCases({state:name}));
  }

  function fillSelect(id,values,labelFn=titleize){
    const select=$(id); if(!select)return;
    const first=select.options[0]?.outerHTML||'<option value="">All</option>';
    select.innerHTML=first+values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(labelFn(v))}</option>`).join('');
  }

  function setupCaseFilters(){
    fillSelect('#filterState',state.data.filters.states,v=>v);
    fillSelect('#filterAttack',state.data.filters.attack_categories);
    fillSelect('#filterYearFrom',state.data.filters.years,v=>v);
    fillSelect('#filterYearTo',state.data.filters.years,v=>v);
    fillSelect('#filterStage',state.data.filters.source_stages);
    fillSelect('#filterChannel',state.data.filters.channels);
    fillSelect('#filterImpersonation',state.data.filters.impersonation_categories);
    fillSelect('#filterTarget',state.data.filters.target_types);
    fillSelect('#filterPayment',state.data.filters.payment_methods);
    fillSelect('#filterMechanism',state.data.filters.psychological_mechanisms,v=>v);
    fillSelect('#filterCrossBorder',state.data.filters.cross_border_values);
    fillSelect('#filterStrength',state.data.filters.case_attribution_strength);
    fillSelect('#filterEvidence',state.data.charts.evidence.map(d=>d.label),v=>v);
    const bindings={
      '#caseSearch':['search','input'],'#filterState':['state','change'],'#filterAttack':['attack','change'],'#filterYearFrom':['yearFrom','change'],'#filterYearTo':['yearTo','change'],
      '#filterStage':['stage','change'],'#filterChannel':['channel','change'],'#filterImpersonation':['impersonation','change'],'#filterTarget':['target','change'],'#filterPayment':['payment','change'],
      '#filterMechanism':['mechanism','change'],'#filterCrossBorder':['crossBorder','change'],'#filterStrength':['strength','change'],'#filterCredential':['credential','change'],
      '#filterDeviceCompromise':['deviceCompromise','change'],'#filterResolution':['resolution','change'],'#filterEvidence':['evidence','change']
    };
    Object.entries(bindings).forEach(([id,[key,event]])=>$(id).addEventListener(event,e=>{state.caseFilters[key]=e.target.value;renderCases();}));
    $('#caseSort').addEventListener('change',e=>{state.caseSort=e.target.value;renderCases();});
    $('#resetCaseFilters').addEventListener('click',()=>{state.caseFilters=emptyCaseFilters();state.caseSort='id';syncCaseControls();renderCases();});
    $('#downloadFiltered').addEventListener('click',downloadFilteredCases);
  }

  function syncCaseControls(){
    const map={search:'#caseSearch',state:'#filterState',attack:'#filterAttack',yearFrom:'#filterYearFrom',yearTo:'#filterYearTo',stage:'#filterStage',channel:'#filterChannel',impersonation:'#filterImpersonation',target:'#filterTarget',payment:'#filterPayment',mechanism:'#filterMechanism',crossBorder:'#filterCrossBorder',strength:'#filterStrength',credential:'#filterCredential',deviceCompromise:'#filterDeviceCompromise',resolution:'#filterResolution',evidence:'#filterEvidence'};
    Object.entries(map).forEach(([k,id])=>{if($(id))$(id).value=state.caseFilters[k]||'';});
    $('#caseSort').value=state.caseSort;
  }

  function jumpToCases(filters){
    state.caseFilters=emptyCaseFilters(); Object.assign(state.caseFilters,filters); syncCaseControls();renderCases();setView('cases');
  }

  function filterCases(){
    const f=state.caseFilters,search=f.search.trim().toLowerCase();
    let rows=state.data.cases.filter(c=>{
      if(f.state&&c.state!==f.state)return false;
      if(f.attack&&c.attack_category_primary!==f.attack)return false;
      if(f.yearFrom&&(!c.incident_year_number||c.incident_year_number<Number(f.yearFrom)))return false;
      if(f.yearTo&&(!c.incident_year_number||c.incident_year_number>Number(f.yearTo)))return false;
      if(f.stage&&c.source_stage!==f.stage)return false;
      if(f.channel&&!c.contact_channels.includes(f.channel)&&c.contact_channel_primary!==f.channel)return false;
      if(f.impersonation&&c.impersonated_identity_category!==f.impersonation)return false;
      if(f.target&&c.target_type!==f.target)return false;
      if(f.payment&&c.payment_method!==f.payment)return false;
      if(f.mechanism&&!c.psychological_mechanisms.includes(f.mechanism))return false;
      if(f.crossBorder&&c.cross_border_dimension!==f.crossBorder)return false;
      if(f.strength&&c.attribution_strength!==f.strength)return false;
      if(f.credential&&c.credential_compromise!==f.credential)return false;
      if(f.deviceCompromise&&c.device_compromise!==f.deviceCompromise)return false;
      if(f.resolution&&c.resolution_summary!==f.resolution)return false;
      if(f.evidence&&!c.evidence_present.includes(f.evidence))return false;
      if(search){
        const hay=[c.case_id,c.case_title,c.incident_year,c.state,c.city,c.attack_category_primary,c.attack_category_secondary,c.platform_primary,c.impersonated_identity_detail,c.target_sector,c.initial_contact_summary,c.pretext_summary,c.requested_action,c.victim_action,c.other_evidence,c.case_summary,c.attribution_limitations,c.primary_evidentiary_gap,...c.evidence_present,...c.psychological_mechanisms].join(' ').toLowerCase();
        if(!hay.includes(search))return false;
      }
      return true;
    });
    if(state.caseSort==='year-desc')rows.sort((a,b)=>(b.incident_year_number||0)-(a.incident_year_number||0)||a.case_id.localeCompare(b.case_id));
    else if(state.caseSort==='loss-desc')rows.sort((a,b)=>(b.financial_loss_inr_number||-1)-(a.financial_loss_inr_number||-1));
    else rows.sort((a,b)=>a.case_id.localeCompare(b.case_id));
    return rows;
  }

  function caseCard(c){
    const meta=[c.state,isPresent(c.incident_year)?c.incident_year:null,titleize(c.attack_category_primary)].filter(Boolean);
    const selected=state.compareIds.includes(c.case_id);
    return `<article class="case-card" data-case-id="${escapeHtml(c.case_id)}" tabindex="0"><button class="case-card-select ${selected?'is-selected':''}" data-compare-id="${escapeHtml(c.case_id)}">${selected?'Selected':'Compare'}</button><span class="case-id">${escapeHtml(c.case_id)}</span><h3>${escapeHtml(c.case_title)}</h3><div class="case-meta">${meta.map(x=>`<span>${escapeHtml(x)}</span>`).join('<span>·</span>')}</div><p class="case-summary">${escapeHtml(c.case_summary||c.pretext_summary)}</p><div class="case-footer"><div class="case-loss"><small>Reported focal loss</small><strong>${formatINR(c.financial_loss_inr_number)}</strong></div><div class="case-resolution"><small>Human resolution</small><span class="resolution-pill">${escapeHtml(titleize(c.resolution_summary))}</span></div></div></article>`;
  }

  function renderActiveCaseFilters(){
    const labels={search:'Search',state:'State',attack:'Attack',yearFrom:'From',yearTo:'To',stage:'Stage',channel:'Channel',impersonation:'Impersonation',target:'Target',payment:'Payment',mechanism:'Mechanism',crossBorder:'Cross-border',strength:'Strength',credential:'Credentials',deviceCompromise:'Device compromise',resolution:'Resolution',evidence:'Evidence'};
    const chips=Object.entries(state.caseFilters).filter(([,v])=>v).map(([k,v])=>`<span class="filter-chip">${labels[k]}: ${escapeHtml(['search','state','mechanism'].includes(k)?v:titleize(v))}</span>`);
    $('#activeCaseFilters').innerHTML=chips.join('');
  }

  function renderCases(){
    const rows=filterCases();
    $('#caseResultCount').textContent=rows.length; renderActiveCaseFilters();
    $('#caseGrid').innerHTML=rows.length?rows.map(caseCard).join(''):'<div class="empty-state">No reviewed incidents match this combination of filters.</div>';
    $$('.case-card').forEach(el=>{el.addEventListener('click',()=>openCase(el.dataset.caseId));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(el.dataset.caseId);}});});
    $$('[data-compare-id]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();toggleCompare(btn.dataset.compareId);renderCases();}));
  }

  function toggleCompare(caseId){
    const i=state.compareIds.indexOf(caseId);
    if(i>=0)state.compareIds.splice(i,1);
    else if(state.compareIds.length<4)state.compareIds.push(caseId);
    else {toast('Compare up to four cases');return;}
    renderCompareTray();
    if(state.view==='compare')renderComparison();
  }

  function renderCompareTray(){
    const tray=$('#compareTray');tray.classList.toggle('is-visible',state.compareIds.length>0);
    $('#compareTrayCount').textContent=state.compareIds.length;
    $('#compareTrayItems').innerHTML=state.compareIds.map(id=>`<span class="compare-tray-item">${escapeHtml(id)}</span>`).join('');
  }

  function setupCompare(){
    $('#compareTrayClear').addEventListener('click',clearComparison);
    $('#compareTrayOpen').addEventListener('click',openComparison);
    $('#clearComparison').addEventListener('click',clearComparison);
    $('#copyCompareLink').addEventListener('click',()=>copyText(compareUrl(),'Comparison link copied'));
  }

  function clearComparison(){state.compareIds=[];renderCompareTray();renderCases();renderComparison();if(state.view==='compare')setView('cases');}
  function compareUrl(){const u=new URL(location.href);u.hash=`compare/${state.compareIds.join(',')}`;return u.toString();}
  function openComparison(){if(state.compareIds.length<2){toast('Select at least two cases');return;}renderComparison();setView('compare',{preserveHash:true});setHash(`compare/${state.compareIds.join(',')}`);}

  function chipCell(items){const arr=(Array.isArray(items)?items:[items]).filter(isPresent);return arr.length?`<div class="chip-cell">${arr.map(x=>`<span>${escapeHtml(titleize(x))}</span>`).join('')}</div>`:'Not reported';}

  function renderComparison(){
    const cases=state.compareIds.map(caseById).filter(Boolean);
    if(cases.length<2){$('#compareTableWrap').innerHTML='<div class="compare-empty"><h2>Select cases to compare</h2><p>Use the Compare button on any case card. You can place two to four incidents side by side.</p><button class="primary-action" data-compare-browse>Browse cases</button></div>';const b=$('[data-compare-browse]');if(b)b.addEventListener('click',()=>setView('cases'));return;}
    const fields=[
      ['Incident year',c=>c.incident_year],['State / UT',c=>c.state],['Primary attack',c=>titleize(c.attack_category_primary)],['Secondary attack',c=>titleize(c.attack_category_secondary)],
      ['Contact channels',c=>chipCell(c.contact_channels)],['Platform / service',c=>c.platform_primary||'Not reported'],['Impersonation',c=>c.impersonated_identity_detail||titleize(c.impersonated_identity_category)],
      ['Target',c=>`${titleize(c.target_type)}${c.target_sector?` · ${c.target_sector}`:''}`],['Psychological mechanisms',c=>chipCell(c.psychological_mechanisms)],['Requested action',c=>c.requested_action],
      ['Victim action',c=>c.victim_action],['Reported focal loss',c=>formatINR(c.financial_loss_inr_number)],['Payment method',c=>titleize(c.payment_method)],['Evidence present',c=>chipCell(c.evidence_present)],
      ['Human resolution',c=>titleize(c.resolution_summary)],['Incident attribution strength',c=>titleize(c.attribution_strength)],['Strongest actor attribution',c=>titleize(c.strongest_actor_attribution_strength)],['Primary source stage',c=>c.procedure_notice.label],['Case status',c=>titleize(c.case_status)],
      ['Primary evidentiary gap',c=>c.primary_evidentiary_gap||'Not separately reported']
    ];
    $('#compareTableWrap').innerHTML=`<table class="compare-table"><thead><tr><th>Field</th>${cases.map(c=>`<th class="compare-case-head"><span>${escapeHtml(c.case_id)}</span><strong>${escapeHtml(c.case_title)}</strong><button class="compare-open" data-compare-open-case="${escapeHtml(c.case_id)}">Open full case</button></th>`).join('')}</tr></thead><tbody>${fields.map(([label,fn])=>`<tr><th>${escapeHtml(label)}</th>${cases.map(c=>{const val=fn(c);return `<td>${typeof val==='string'&&val.startsWith('<')?val:escapeHtml(val||'Not reported')}</td>`;}).join('')}</tr>`).join('')}</tbody></table>`;
    $$('[data-compare-open-case]').forEach(b=>b.addEventListener('click',()=>openCase(b.dataset.compareOpenCase)));
  }

  function csvEscape(v){const s=String(v??'');return /[",\n]/.test(s)?`"${s.replaceAll('"','""')}"`:s;}
  function downloadFilteredCases(){
    const rows=filterCases();
    const fields=['case_id','case_title','incident_year','state','city','attack_category_primary','attack_category_secondary','contact_channel_primary','platform_primary','impersonated_identity_category','impersonated_identity_detail','target_type','target_sector','financial_loss_inr','payment_method','attribution_strength','source_stage','case_status','conviction_status','case_summary','attribution_limitations','primary_evidentiary_gap'];
    const csv=[fields.join(','),...rows.map(r=>fields.map(f=>csvEscape(r[f])).join(','))].join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=`SEIAI_filtered_${rows.length}_cases.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast(`Downloaded ${rows.length} cases`);
  }

  function sourceBlock(s){
    const url=s.url||s.archive_url;
    return `<div class="source-mini">${url?`<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(s.title||s.source_id)} ↗</a>`:`<strong>${escapeHtml(s.title||s.source_id)}</strong>`}<p>${escapeHtml([titleize(s.source_stage),s.court_or_body||s.publisher_or_authority,s.case_number].filter(Boolean).join(' · '))}</p>${s.claim_scope?`<p>${escapeHtml(s.claim_scope)}</p>`:''}</div>`;
  }

  function actorMini(a){
    const flags=[];if(a.victim_facing_function==='yes')flags.push('Victim-facing');if(a.financial_function==='yes')flags.push('Financial');
    return `<div class="actor-mini"><strong>${escapeHtml(a.actor_label)}</strong><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.identity_resolution))}</span>${flags.map(f=>`<span class="badge">${f}</span>`).join('')}<span class="badge">${escapeHtml(titleize(a.attribution_strength))}</span></div><p>${escapeHtml(a.conduct_assessed)}</p>${a.attribution_limitations?`<p><strong>Limit:</strong> ${escapeHtml(a.attribution_limitations)}</p>`:''}</div>`;
  }

  function caseCitation(c){return `Hamzah. (2026). “${c.case_title}” (${c.case_id}). Social Engineering Incident Atlas India, v0.2.1.`;}
  function caseUrl(id){const u=new URL(location.href);u.hash=`case/${id}`;return u.toString();}

  function openCase(caseId,options={}){
    const c=caseById(caseId);if(!c)return;
    if(!options.fromRoute)state.lastViewBeforeCase=state.view==='compare'?'compare':'cases';
    const flow=[['Initial contact',c.initial_contact_summary],['Pretext',c.pretext_summary],['Requested action',c.requested_action],['Victim action',c.victim_action]].filter(([,v])=>isPresent(v));
    const tags=[c.state,isPresent(c.incident_year)?c.incident_year:null,titleize(c.attack_category_primary),c.source_stage?titleize(c.source_stage):null].filter(Boolean);
    const mechanisms=c.psychological_mechanisms||[],evidence=c.evidence_present||[];
    const selected=state.compareIds.includes(c.case_id);
    $('#caseDialogContent').innerHTML=`<div class="dialog-inner"><p class="eyebrow">${escapeHtml(c.case_id)} / REVIEWED INCIDENT</p><h1>${escapeHtml(c.case_title)}</h1><div class="dialog-meta">${tags.map(x=>`<span class="dialog-tag">${escapeHtml(x)}</span>`).join('')}</div><div class="procedure-banner"><strong>${escapeHtml(c.procedure_notice.label)}</strong><p>${escapeHtml(c.procedure_notice.note)}</p></div><div class="dialog-actions"><button class="primary-dialog-action" id="copyCaseLink">Copy case link</button><button id="copyCaseCitation">Copy citation</button><button id="dialogCompare">${selected?'Remove from comparison':'Add to comparison'}</button>${c.primary_source_url?`<a href="${escapeHtml(c.primary_source_url)}" target="_blank" rel="noreferrer">Primary source ↗</a>`:''}<a href="${escapeHtml(c.case_note_url)}" target="_blank" rel="noreferrer">Case note on GitHub ↗</a></div><div class="dialog-grid"><div><section class="dialog-section"><h2>Attack reconstruction</h2><div class="attack-flow">${flow.map(([l,v])=>`<div class="flow-step"><strong>${escapeHtml(l)}</strong><br>${escapeHtml(v)}</div>`).join('')}</div></section><section class="dialog-section"><h2>Case summary</h2><p>${escapeHtml(c.case_summary)}</p></section><section class="dialog-section"><h2>Attribution boundary</h2><p><strong>Assessed target:</strong> ${escapeHtml(c.attribution_target||'Not separately stated')}</p><p>${escapeHtml(c.attribution_limitations)}</p>${c.primary_evidentiary_gap?`<p><strong>Primary evidentiary gap:</strong> ${escapeHtml(c.primary_evidentiary_gap)}</p>`:''}</section></div><div><section class="dialog-section"><h2>Incident profile</h2><p><strong>Platform / service:</strong> ${escapeHtml(c.platform_primary||'Not reported')}<br><strong>Impersonation:</strong> ${escapeHtml(c.impersonated_identity_detail||titleize(c.impersonated_identity_category))}<br><strong>Target:</strong> ${escapeHtml(titleize(c.target_type))}${c.target_sector?` · ${escapeHtml(c.target_sector)}`:''}<br><strong>Reported focal loss:</strong> ${formatINR(c.financial_loss_inr_number)}</p></section><section class="dialog-section"><h2>Psychological mechanisms</h2><div class="evidence-chipset">${mechanisms.length?mechanisms.map(x=>`<span>${escapeHtml(x)}</span>`).join(''):'<span>Not reported</span>'}</div></section><section class="dialog-section"><h2>Evidence in the record</h2><div class="evidence-chipset">${evidence.length?evidence.map(x=>`<span>${escapeHtml(x)}</span>`).join(''):'<span>Not reported</span>'}</div>${c.other_evidence?`<p>${escapeHtml(c.other_evidence)}</p>`:''}</section><section class="dialog-section"><h2>Actor assessments</h2>${c.actors.length?c.actors.map(actorMini).join(''):'<p>No actor records linked.</p>'}</section><section class="dialog-section"><h2>Sources</h2>${c.sources.length?c.sources.map(sourceBlock).join(''):'<p>No linked source found.</p>'}</section></div></div></div>`;
    $('#copyCaseLink').addEventListener('click',()=>copyText(caseUrl(c.case_id),'Case link copied'));
    $('#copyCaseCitation').addEventListener('click',()=>copyText(caseCitation(c),'Case citation copied'));
    $('#dialogCompare').addEventListener('click',()=>{toggleCompare(c.case_id);$('#dialogCompare').textContent=state.compareIds.includes(c.case_id)?'Remove from comparison':'Add to comparison';renderCases();});
    $('#caseDialog').showModal();
    if(!options.preserveHash)setHash(`case/${caseId}`);
  }

  function closeCase(){
    if($('#caseDialog').open)$('#caseDialog').close();
    if(state.lastViewBeforeCase==='compare'&&state.compareIds.length>=2)setHash(`compare/${state.compareIds.join(',')}`);
    else setHash(state.lastViewBeforeCase||'cases');
  }

  function setupActors(){
    fillSelect('#actorIdentity',state.data.filters.identity_resolution);fillSelect('#actorStrength',state.data.filters.actor_strength);
    $('#actorSearch').addEventListener('input',e=>{state.actorFilters.search=e.target.value;renderActors();});
    $('#actorIdentity').addEventListener('change',e=>{state.actorFilters.identity=e.target.value;renderActors();});
    $('#actorFunction').addEventListener('change',e=>{state.actorFilters.function=e.target.value;renderActors();});
    $('#actorStrength').addEventListener('change',e=>{state.actorFilters.strength=e.target.value;renderActors();});
  }

  function renderActorSummary(){
    const counts=Object.fromEntries(state.data.charts.identity_resolution.map(d=>[d.key,d.count]));
    const cards=[['identified','Identified'],['partially_identified','Partially identified'],['actor_cluster','Actor clusters'],['unknown','Unknown']];
    $('#actorSummary').innerHTML=cards.map(([k,l])=>`<div class="actor-summary-card"><strong>${counts[k]||0}</strong><span>${l}</span></div>`).join('');
  }

  function renderActors(){
    const f=state.actorFilters,q=f.search.toLowerCase().trim();
    let rows=state.data.actors.filter(a=>{
      if(f.identity&&a.identity_resolution!==f.identity)return false;if(f.strength&&a.attribution_strength!==f.strength)return false;
      if(f.function==='victim'&&a.victim_facing_function!=='yes')return false;if(f.function==='financial'&&a.financial_function!=='yes')return false;if(f.function==='both'&&!(a.victim_facing_function==='yes'&&a.financial_function==='yes'))return false;
      if(q&&!([a.actor_id,a.case_id,a.actor_label,a.role_primary,a.role_secondary,a.conduct_assessed,a.attribution_basis_primary,a.attribution_basis_secondary,a.attribution_limitations].join(' ').toLowerCase().includes(q)))return false;return true;
    }).sort((a,b)=>a.case_id.localeCompare(b.case_id)||a.actor_id.localeCompare(b.actor_id));
    $('#actorList').innerHTML=rows.length?rows.map(a=>{const flags=[];if(a.victim_facing_function==='yes')flags.push('Victim-facing');if(a.financial_function==='yes')flags.push('Financial');return `<div class="actor-row"><button class="actor-link actor-case" data-case-id="${escapeHtml(a.case_id)}">${escapeHtml(a.case_id)}</button><div><div class="actor-label">${escapeHtml(a.actor_label)}</div><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.identity_resolution))}</span>${flags.map(x=>`<span class="badge">${x}</span>`).join('')}</div></div><div class="actor-badges"><span class="badge">${escapeHtml(titleize(a.attribution_strength))}</span><span class="badge">${escapeHtml(titleize(a.role_primary))}</span></div><div class="actor-conduct"><strong>Evidence basis</strong><br>${escapeHtml([titleize(a.attribution_basis_primary),titleize(a.attribution_basis_secondary)].filter(x=>x!=='Not Reported').join(' · '))}</div><div class="actor-conduct">${escapeHtml(a.conduct_assessed)}</div></div>`;}).join(''):'<div class="empty-state">No actor assessments match these filters.</div>';
    $$('.actor-link[data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));
  }

  function setupEvidence(){renderEvidenceCatalog();renderEvidenceMatrix();}
  function renderEvidenceCatalog(){
    const total=state.data.meta.case_count;
    $('#evidenceCatalog').innerHTML=state.data.charts.evidence.map(d=>`<button class="evidence-card" data-evidence-card="${escapeHtml(d.label)}"><strong>${d.count}</strong><span>${escapeHtml(d.label)} · ${pct(d.count,total)}% of reviewed incidents</span><div class="mini-track"><i style="width:${pct(d.count,total)}%"></i></div></button>`).join('');
    $$('[data-evidence-card]').forEach(el=>el.addEventListener('click',()=>selectEvidence(el.dataset.evidenceCard,false)));
  }

  function selectEvidence(label,jump){
    state.selectedEvidence=label;$$('[data-evidence-card]').forEach(el=>el.classList.toggle('is-active',el.dataset.evidenceCard===label));
    const cases=state.data.cases.filter(c=>c.evidence_present.includes(label));
    $('#evidenceInspector').innerHTML=`<p class="eyebrow">EVIDENCE TYPE</p><h2>${escapeHtml(label)}</h2><p><strong>${cases.length}</strong> of ${state.data.meta.case_count} reviewed incidents contain this evidence flag.</p><p>Select a case below to inspect what the record says and, crucially, what the evidence still does not establish.</p><div class="inspector-case-list">${cases.slice(0,14).map(c=>`<button class="inspector-case" data-case-id="${escapeHtml(c.case_id)}"><strong>${escapeHtml(c.case_id)} · ${escapeHtml(c.case_title)}</strong><span>${escapeHtml(c.state)} · ${escapeHtml(titleize(c.attack_category_primary))}</span></button>`).join('')}</div>${cases.length>14?`<button class="primary-action" id="showAllEvidenceCases">Show all ${cases.length} cases</button>`:''}`;
    $$('.inspector-case[data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));const show=$('#showAllEvidenceCases');if(show)show.addEventListener('click',()=>jumpToCases({evidence:label}));if(jump)setView('evidence');
  }

  function renderEvidenceMatrix(){
    const m=state.data.charts.evidence_matrix;
    $('#evidenceMatrix').innerHTML=`<table class="evidence-matrix"><thead><tr><th>Primary attack</th>${m.columns.map(c=>`<th>${escapeHtml(c)}</th>`).join('')}</tr></thead><tbody>${m.rows.map(r=>`<tr><td>${escapeHtml(r.label)} <small>(${r.count})</small></td>${m.columns.map(col=>{const n=r.cells[col]||0,alpha=n?(.10+.72*(n/r.count)):0.02;return `<td><button class="matrix-cell ${n===0?'matrix-zero':''}" style="--matrix-alpha:${alpha.toFixed(2)}" data-matrix-attack="${escapeHtml(r.key)}" data-matrix-evidence="${escapeHtml(col)}" ${n===0?'disabled':''}>${n}</button></td>`;}).join('')}</tr>`).join('')}</tbody></table>`;
    $$('[data-matrix-attack]').forEach(b=>b.addEventListener('click',()=>jumpToCases({attack:b.dataset.matrixAttack,evidence:b.dataset.matrixEvidence})));
  }

  function setupSources(){
    fillSelect('#sourceStageFilter',[...new Set(state.data.sources.map(s=>s.source_stage).filter(Boolean))].sort());fillSelect('#sourceTierFilter',[...new Set(state.data.sources.map(s=>s.source_tier).filter(Boolean))].sort(),v=>v);
    $('#sourceSearch').addEventListener('input',e=>{state.sourceFilters.search=e.target.value;renderSources();});$('#sourceStageFilter').addEventListener('change',e=>{state.sourceFilters.stage=e.target.value;renderSources();});$('#sourceTierFilter').addEventListener('change',e=>{state.sourceFilters.tier=e.target.value;renderSources();});
  }

  function renderSources(){
    const f=state.sourceFilters,q=f.search.toLowerCase().trim();
    const rows=state.data.sources.filter(s=>{if(f.stage&&s.source_stage!==f.stage)return false;if(f.tier&&s.source_tier!==f.tier)return false;if(q&&!([s.source_id,s.case_id,s.title,s.publisher_or_authority,s.court_or_body,s.case_number,s.claim_scope].join(' ').toLowerCase().includes(q)))return false;return true;});
    $('#sourceList').innerHTML=rows.length?rows.map(s=>`<div class="source-row"><div><span class="source-id">${escapeHtml(s.source_id)}</span><br><button class="actor-link" data-case-id="${escapeHtml(s.case_id)}">${escapeHtml(s.case_id)}</button></div><div class="source-title">${escapeHtml(s.title)}</div><div class="source-meta">${escapeHtml(s.court_or_body||s.publisher_or_authority)}<br>${escapeHtml(s.case_number)}</div><div class="source-meta">${escapeHtml(titleize(s.source_stage))}<br>${escapeHtml(s.source_tier)}</div><a href="${escapeHtml(s.url||s.archive_url)}" target="_blank" rel="noreferrer">Open source ↗</a></div>`).join(''):'<div class="empty-state">No registered sources match these filters.</div>';
    $$('#sourceList [data-case-id]').forEach(el=>el.addEventListener('click',()=>openCase(el.dataset.caseId)));
  }

  function applyRoute(){
    if(state.routing||!state.data)return;
    const hash=decodeURIComponent(location.hash.replace(/^#/,''));
    if(hash.startsWith('case/')){
      const id=hash.slice(5);state.lastViewBeforeCase='cases';setView('cases',{preserveHash:true,noScroll:true});openCase(id,{fromRoute:true,preserveHash:true});return;
    }
    if(hash.startsWith('compare/')){
      if($('#caseDialog').open)$('#caseDialog').close();
      const ids=hash.slice(8).split(',').map(x=>x.trim()).filter(id=>caseById(id)).slice(0,4);state.compareIds=ids;renderCompareTray();renderCases();renderComparison();setView('compare',{preserveHash:true,noScroll:true});return;
    }
    if($('#caseDialog').open)$('#caseDialog').close();
    const views=['overview','cases','actors','evidence','sources','method'];
    setView(views.includes(hash)?hash:'overview',{preserveHash:true,noScroll:true});
  }

  async function init(){
    try{
      await loadData();setupNav();renderMetrics();renderMap();renderAttackChart();renderStateChart();renderStageChart();renderEvidenceOverview();renderResolutionChart();renderYearChart();
      setupCaseFilters();renderCases();setupCompare();renderComparison();setupActors();renderActorSummary();renderActors();setupEvidence();setupSources();renderSources();applyRoute();
      setTimeout(()=>$('#loadingScreen').classList.add('is-hidden'),150);
    }catch(err){console.error(err);$('#loadingScreen').innerHTML=`<div class="loading-mark">!</div><p>${escapeHtml(err.message)}</p>`;}
  }

  init();
})();
