'use strict';
/* All browser data are restricted researcher-coded metadata: no personal names,
 * raw documents, financial amounts, narrative text or source URLs. */
const EVIDENCE = {
 bank_evidence:'Bank or payment records',
 cdr_evidence:'Call detail records',
 phone_or_sim_evidence:'Phone or SIM records',
 ip_or_login_evidence:'IP or login records',
 device_evidence:'Device evidence',
 chat_message_evidence:'Chats or messages',
 email_evidence:'Email evidence',
 social_media_evidence:'Social media records',
 cctv_evidence:'CCTV',
 platform_provider_records:'Platform/provider records',
 forensic_examination_reported:'Forensic examination reported',
 electronic_evidence_authentication_discussed:'Electronic-record authentication discussed',
 chain_of_custody_discussed:'Chain of custody discussed',
 evidence_integrity_issue_reported:'Evidence-integrity issue reported'
};
const MECHANISMS={authority_mechanism:'Authority claim',fear_mechanism:'Fear or threat',urgency_mechanism:'Urgency',trust_mechanism:'Trust-building',scarcity_mechanism:'Scarcity',reciprocity_mechanism:'Reciprocity',isolation_mechanism:'Isolation',repeated_contact_mechanism:'Repeated contact'};
const REPO='https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India';
const $=id=>document.getElementById(id);
const label=v=>String(v??'not_reported').replaceAll('_',' ').replace(/\b\w/g,c=>c.toUpperCase());
const caseLink=id=>`./notes/${encodeURIComponent(id)}.html`;
let allCases=[];
let activeDrill=null;
const CHART_TITLES={
 overviewAttack:'Primary attack category', overviewStages:'Primary source stage',
 overviewEvidence:'Evidence reported in source', overviewAttribution:'Case-level attribution strength',
 categoryAttack:'Primary attack category', categoryChannels:'Primary contact channel',
 categoryMechanisms:'Manipulation mechanism reported',
 actorIdentity:'Actor identity resolution', actorStrength:'Actor attribution strength',
 actorVictim:'Victim-facing function', actorFinancial:'Financial function',
 sourceTiers:'Registered source tier', sourceCaseStages:'Primary source stage'
};
function matchCount(c,d){
 if(!d)return 1;
 if(d.scopeAttack&&c.attack_category_primary!==d.scopeAttack)return 0;
 if(d.scopeStage&&c.source_stage!==d.scopeStage)return 0;
 if(d.kind==='case')return Number(c[d.field]===d.value);
 if(d.kind==='evidence')return Number(c.evidence[d.field]===d.value);
 if(d.kind==='mechanism')return Number(c.mechanisms[d.field]===d.value);
 if(d.kind==='actor')return c.actor_counts?.[d.field]?.[d.value]||0;
 if(d.kind==='source')return c.source_counts?.[d.field]?.[d.value]||0;
 return 0;
}
function selectDrilldown(drill){
 const matches=allCases.reduce((n,c)=>n+matchCount(c,drill),0);
 if(matches!==drill.total){console.error('Chart and case index disagree',drill,matches);return;}
 activeDrill=drill;
 for(const id of ['caseSearch','caseAttack','caseStage','caseEvidence'])$(id).value='';
 renderCases(allCases);setView('cases');
 $('drilldownTitle').focus({preventScroll:true});
}

const countBy=(arr,k)=>arr.reduce((a,c)=>(a[c[k]||'not_reported']=(a[c[k]||'not_reported']||0)+1,a),{});
function make(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;}
function chartBars(id,values,limit=0,formatter=label,drill=null){
 const dest=$(id);dest.replaceChildren();const sorted=Object.entries(values).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const shown=limit?sorted.slice(0,limit):sorted;const max=Math.max(1,...shown.map(x=>x[1]));
 const chart=make('div','bar-chart');chart.setAttribute('role','group');chart.setAttribute('aria-label',CHART_TITLES[id]||'Research chart');
 shown.forEach(([k,v])=>{
  const canDrill=!!drill&&v>0;
  const row=make(canDrill?'button':'div','bar-row'+(canDrill?' bar-trigger':'')),name=make('span','bar-label',formatter(k)),track=make('span','bar-track'),bar=make('span','bar-fill'),number=make('span','bar-number',String(v));
  bar.style.width=(v/max*100).toFixed(2)+'%';track.append(bar);
  row.title=`${formatter(k)}: ${v} records`+(canDrill?'. Select to view corresponding cases.':'');
  if(canDrill){
   row.type='button';row.setAttribute('aria-label',`${CHART_TITLES[id]||'Chart'}: ${formatter(k)}, ${v} coded records. View matching cases.`);
   row.addEventListener('click',()=>selectDrilldown({kind:drill.kind,field:drill.field||(drill.kind==='evidence'||drill.kind==='mechanism'?k:undefined),value:drill.value||k,total:v,title:`${CHART_TITLES[id]}: ${formatter(k)}`}));
  }
  row.append(name,track,number);chart.append(row);
 });dest.append(chart);
}
function options(id,values,formatter=label){const select=$(id);Object.keys(values).sort((a,b)=>formatter(a).localeCompare(formatter(b))).forEach(k=>{const opt=make('option','',formatter(k));opt.value=k;select.append(opt)});}
function setView(view,changeHash=true){if(!document.getElementById(view))view='overview';document.querySelectorAll('.view').forEach(e=>{const active=e.dataset.view===view;e.classList.toggle('active',active);e.hidden=!active});document.querySelectorAll('.tab').forEach(e=>{const active=e.dataset.tab===view;e.classList.toggle('active',active);if(active)e.setAttribute('aria-current','page');else e.removeAttribute('aria-current')});if(changeHash)history.replaceState(null,'','#'+view);window.scrollTo({top:0,behavior:'instant'});}
function wireNav(){document.querySelectorAll('[data-tab],[data-jump]').forEach(e=>e.addEventListener('click',()=>setView(e.dataset.tab||e.dataset.jump)));window.addEventListener('hashchange',()=>setView(location.hash.substring(1),false));setView(location.hash.substring(1)||'overview',false);}
function evidenceCounts(cases,field){const n={yes:0,no:0,not_reported:0,not_applicable:0};cases.forEach(c=>{const v=c.evidence[field];n[v==='yes'||v==='no'||v==='not_applicable'?v:'not_reported']++});return n;}
function drawMatrix(cases){const matrix=$('evidenceMatrix');matrix.replaceChildren();const total=cases.length;$('evidenceScope').textContent=`${total} case records in selected scope`;
 const legend=make('div','legend');[['yes','Yes'],['no','No'],['nr','Not reported'],['na','Not applicable']].forEach(([cls,txt])=>{const el=make('span','');const dot=make('span','legend-dot '+cls);el.append(dot,document.createTextNode(txt));legend.append(el)});matrix.append(legend);
 const list=make('div','matrix');for(const [field,title] of Object.entries(EVIDENCE)){
  const codes=evidenceCounts(cases,field),row=make('div','matrix-row'),name=make('span','matrix-label',title),stack=make('div','stack'),right=make('span','matrix-total',String(codes.yes));
  row.title=`${title}: yes ${codes.yes}, no ${codes.no}, not reported ${codes.not_reported}, not applicable ${codes.not_applicable}`;
  stack.setAttribute('role','group');stack.setAttribute('aria-label',`${title}: select an evidence status to view matching cases`);
  [['yes','yes','Yes'],['no','no','No'],['not_reported','nr','Not reported'],['not_applicable','na','Not applicable']].forEach(([key,cls,txt])=>{
   const seg=make('button','seg-'+cls);seg.type='button';seg.style.width=total?(codes[key]/total*100).toFixed(3)+'%':'0%';seg.disabled=codes[key]===0;
   seg.title=`${title}, ${txt}: ${codes[key]} cases. Select to view cases.`;
   seg.setAttribute('aria-label',`${title}, ${txt}, ${codes[key]} cases. View matching cases.`);
   if(codes[key])seg.addEventListener('click',()=>selectDrilldown({kind:'evidence',field,value:key,total:codes[key],scopeAttack:$('evidenceAttack').value,scopeStage:$('evidenceStage').value,title:`${title}: ${txt}${$('evidenceAttack').value?' | '+label($('evidenceAttack').value):''}${$('evidenceStage').value?' | '+label($('evidenceStage').value):''}`}));
   stack.append(seg);
  });row.append(name,stack,right);list.append(row);
 }matrix.append(list);
 const note=make('p','hint','Select a bar segment to see matching cases. Right-hand numbers count cases coded “yes”.');matrix.append(note);
}
function renderCases(cases){
 const q=$('caseSearch').value.toLowerCase().trim().replaceAll(' ','_'),attack=$('caseAttack').value,stage=$('caseStage').value,evidence=$('caseEvidence').value;
 const scoped=activeDrill?cases.filter(c=>matchCount(c,activeDrill)>0):cases;
 const filtered=scoped.filter(c=>(!q||c.case_id.toLowerCase().includes(q)||c.attack_category_primary.toLowerCase().includes(q))&&(!attack||c.attack_category_primary===attack)&&(!stage||c.source_stage===stage)&&(!evidence||c.evidence[evidence]==='yes'));
 const showCount=!!activeDrill&&(activeDrill.kind==='actor'||activeDrill.kind==='source');
 $('matchedRecordsHeader').hidden=!showCount;
 $('drilldownBanner').hidden=!activeDrill;
 if(activeDrill){
  $('drilldownTitle').textContent=activeDrill.title;
  const records=scoped.reduce((n,c)=>n+matchCount(c,activeDrill),0);
  $('drilldownDescription').textContent=showCount
   ?`${records} matching ${activeDrill.kind==='actor'?'actor-role':'source'} records across ${scoped.length} distinct incidents. A case may contain multiple matching records; select any case ID to open its note.`
   :`${scoped.length} matching incident records in the 300-case Atlas. Select any case ID to open its note.`;
 }
 $('caseCount').textContent=`${filtered.length} of ${scoped.length} matching incidents shown${activeDrill?' (300 total in Atlas)':''}`;
 const tbody=$('caseTable');tbody.replaceChildren();filtered.slice(0,300).forEach(c=>{
  const tr=make('tr'),a=make('a','',c.case_id);a.href=caseLink(c.case_id);a.target='_blank';a.rel='noopener';
  const td=make('td');td.append(a);tr.append(td);
  for(const value of [label(c.attack_category_primary),label(c.source_stage),c.primary_source_tier,String(Object.values(c.evidence).filter(s=>s==='yes').length)])tr.append(make('td','',value));
  if(showCount)tr.append(make('td','record-match',String(matchCount(c,activeDrill))));
  const last=make('td'),link=make('a','','Read case note');link.href=caseLink(c.case_id);link.target='_blank';link.rel='noopener';last.append(link);tr.append(last);tbody.append(tr);
 });
 $('exportCases').onclick=()=>{
  const header=['case_id','attack_category_primary','source_stage','primary_source_tier','attribution_strength'];if(showCount)header.push('matching_records');
  const lines=[header.join(',')];filtered.forEach(c=>{
   const values=[c.case_id,c.attack_category_primary,c.source_stage,c.primary_source_tier,c.attribution_strength];if(showCount)values.push(String(matchCount(c,activeDrill)));
   lines.push(values.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(','));
  });const blob=new Blob([lines.join('\n')+'\n'],{type:'text/csv;charset=utf-8'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='atlas-filtered-cases.csv';a.click();URL.revokeObjectURL(u);
 };
}
function initialize(data){const cases=data.cases;allCases=cases;const expected=300;
 if(cases.length!==expected||data.meta.case_count!==expected||Object.keys(cases[0].evidence).length!==Object.keys(EVIDENCE).length)throw Error('Unexpected corpus or evidence payload');
 const stats=[['Incident records',data.meta.case_count],['Actor-role records',data.meta.actor_role_count],['Registered sources',data.meta.registered_source_count],['Screening decisions',data.meta.screening_count]];
 stats.forEach(([label,value])=>{const b=make('div','stat'),n=make('b','',String(value)),l=make('span','',label);b.append(n,l);$('summaryStats').append(b)});
 const att=countBy(cases,'attack_category_primary'),stages=countBy(cases,'source_stage'),channels=countBy(cases,'contact_channel_primary'),caseAttr=countBy(cases,'attribution_strength');const yesEvidence=Object.fromEntries(Object.keys(EVIDENCE).map(k=>[k,cases.filter(c=>c.evidence[k]==='yes').length]));const yesMechanisms=Object.fromEntries(Object.keys(MECHANISMS).map(k=>[k,cases.filter(c=>c.mechanisms[k]==='yes').length]));
 chartBars('overviewAttack',att,10,label,{kind:'case',field:'attack_category_primary'});
 chartBars('overviewStages',stages,0,label,{kind:'case',field:'source_stage'});
 chartBars('overviewEvidence',yesEvidence,7,k=>EVIDENCE[k],{kind:'evidence',value:'yes'});
 chartBars('overviewAttribution',caseAttr,0,label,{kind:'case',field:'attribution_strength'});
 chartBars('categoryAttack',att,0,label,{kind:'case',field:'attack_category_primary'});
 chartBars('categoryChannels',channels,0,label,{kind:'case',field:'contact_channel_primary'});
 chartBars('categoryMechanisms',yesMechanisms,0,k=>MECHANISMS[k],{kind:'mechanism',value:'yes'});
 chartBars('actorIdentity',data.actors_aggregate.identity_resolution,0,label,{kind:'actor',field:'identity_resolution'});
 chartBars('actorStrength',data.actors_aggregate.attribution_strength,0,label,{kind:'actor',field:'attribution_strength'});
 chartBars('actorVictim',data.actors_aggregate.victim_facing_function,0,label,{kind:'actor',field:'victim_facing_function'});
 chartBars('actorFinancial',data.actors_aggregate.financial_function,0,label,{kind:'actor',field:'financial_function'});
 chartBars('sourceTiers',data.source_aggregate.tier,0,k=>k,{kind:'source',field:'source_tier'});
 chartBars('sourceCaseStages',stages,0,label,{kind:'case',field:'source_stage'});
 options('caseAttack',att);options('caseStage',stages);options('evidenceAttack',att);options('evidenceStage',stages);options('caseEvidence',EVIDENCE,k=>EVIDENCE[k]);
 ['caseSearch','caseAttack','caseStage','caseEvidence'].forEach(id=>$(id).addEventListener(id==='caseSearch'?'input':'change',()=>renderCases(cases)));
 $('resetCases').addEventListener('click',()=>{['caseSearch','caseAttack','caseStage','caseEvidence'].forEach(id=>$(id).value='');renderCases(cases)});
 const updateEvidence=()=>drawMatrix(cases.filter(c=>(!$('evidenceAttack').value||c.attack_category_primary===$('evidenceAttack').value)&&(!$('evidenceStage').value||c.source_stage===$('evidenceStage').value)));
 ['evidenceAttack','evidenceStage'].forEach(id=>$(id).addEventListener('change',updateEvidence));
 $('clearDrilldown').addEventListener('click',()=>{
  activeDrill=null;for(const id of ['caseSearch','caseAttack','caseStage','caseEvidence'])$(id).value='';
  renderCases(cases);$('caseSearch').focus();
 });
 renderCases(cases);updateEvidence();wireNav();
}
fetch('./data/atlas.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Could not load Atlas data');return r.json()}).then(initialize).catch(e=>{console.error(e);const err=make('p','loading-error','The Atlas metadata index could not be loaded. The repository and case notes remain available via the GitHub link above.');$('summaryStats').replaceChildren(err);wireNav()});
