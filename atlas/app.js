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
const caseLink=id=>`${REPO}/search?q=${encodeURIComponent(id)}&type=code`;
const countBy=(arr,k)=>arr.reduce((a,c)=>(a[c[k]||'not_reported']=(a[c[k]||'not_reported']||0)+1,a),{});
function make(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;}
function chartBars(id,values,limit=0,formatter=label){
 const dest=$(id);dest.replaceChildren();const sorted=Object.entries(values).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const shown=limit?sorted.slice(0,limit):sorted;const max=Math.max(1,...shown.map(x=>x[1]));
 const chart=make('div','bar-chart');chart.setAttribute('role','img');chart.setAttribute('aria-label','Bar chart: '+shown.map(([k,v])=>formatter(k)+' '+v).join(', '));
 shown.forEach(([k,v])=>{let row=make('div','bar-row'),name=make('span','bar-label',formatter(k)),track=make('div','bar-track'),bar=make('div','bar-fill'),number=make('span','bar-number',String(v));bar.style.width=(v/max*100).toFixed(2)+'%';track.append(bar);row.title=`${formatter(k)}: ${v} records`;row.append(name,track,number);chart.append(row)});
 dest.append(chart);
}
function options(id,values,formatter=label){const select=$(id);Object.keys(values).sort((a,b)=>formatter(a).localeCompare(formatter(b))).forEach(k=>{const opt=make('option','',formatter(k));opt.value=k;select.append(opt)});}
function setView(view,changeHash=true){if(!document.getElementById(view))view='overview';document.querySelectorAll('.view').forEach(e=>{const active=e.dataset.view===view;e.classList.toggle('active',active);e.hidden=!active});document.querySelectorAll('.tab').forEach(e=>{const active=e.dataset.tab===view;e.classList.toggle('active',active);if(active)e.setAttribute('aria-current','page');else e.removeAttribute('aria-current')});if(changeHash)history.replaceState(null,'','#'+view);window.scrollTo({top:0,behavior:'instant'});}
function wireNav(){document.querySelectorAll('[data-tab],[data-jump]').forEach(e=>e.addEventListener('click',()=>setView(e.dataset.tab||e.dataset.jump)));window.addEventListener('hashchange',()=>setView(location.hash.substring(1),false));setView(location.hash.substring(1)||'overview',false);}
function evidenceCounts(cases,field){const n={yes:0,no:0,not_reported:0,not_applicable:0};cases.forEach(c=>{const v=c.evidence[field];n[v==='yes'||v==='no'||v==='not_applicable'?v:'not_reported']++});return n;}
function drawMatrix(cases){const matrix=$('evidenceMatrix');matrix.replaceChildren();const total=cases.length;$('evidenceScope').textContent=`${total} case records in selected scope`;
 const legend=make('div','legend');[['yes','Yes'],['no','No'],['nr','Not reported'],['na','Not applicable']].forEach(([cls,txt])=>{const el=make('span','');const dot=make('span','legend-dot '+cls);el.append(dot,document.createTextNode(txt));legend.append(el)});matrix.append(legend);
 const list=make('div','matrix');for(const [field,title] of Object.entries(EVIDENCE)){const codes=evidenceCounts(cases,field),row=make('div','matrix-row'),name=make('span','matrix-label',title),stack=make('div','stack'),right=make('span','matrix-total',String(codes.yes));row.title=`${title}: yes ${codes.yes}, no ${codes.no}, not reported ${codes.not_reported}, not applicable ${codes.not_applicable}`;stack.setAttribute('role','img');stack.setAttribute('aria-label',row.title);[['yes','yes'],['no','no'],['not_reported','nr'],['not_applicable','na']].forEach(([key,cls])=>{const seg=make('div','seg-'+cls);seg.style.width=total?(codes[key]/total*100).toFixed(3)+'%':'0%';stack.append(seg)});row.append(name,stack,right);list.append(row)}matrix.append(list);
 const note=make('p','hint','Right-hand numbers count cases coded “yes”. Bar segments show all coding statuses.');matrix.append(note);
}
function renderCases(cases){const q=$('caseSearch').value.toLowerCase().trim().replaceAll(' ','_'),attack=$('caseAttack').value,stage=$('caseStage').value,evidence=$('caseEvidence').value;
 const filtered=cases.filter(c=>(!q||c.case_id.toLowerCase().includes(q)||c.attack_category_primary.toLowerCase().includes(q))&&(!attack||c.attack_category_primary===attack)&&(!stage||c.source_stage===stage)&&(!evidence||c.evidence[evidence]==='yes'));
 $('caseCount').textContent=`${filtered.length} of ${cases.length} incidents shown`;const tbody=$('caseTable');tbody.replaceChildren();filtered.slice(0,300).forEach(c=>{const tr=make('tr'),a=make('a','',c.case_id);a.href=caseLink(c.case_id);a.target='_blank';a.rel='noopener';const td=make('td');td.append(a);tr.append(td);for(const value of [label(c.attack_category_primary),label(c.source_stage),c.primary_source_tier,String(Object.values(c.evidence).filter(s=>s==='yes').length)]){tr.append(make('td','',value))}const last=make('td');const link=make('a','','Find note in GitHub');link.href=caseLink(c.case_id);link.target='_blank';link.rel='noopener';last.append(link);tr.append(last);tbody.append(tr)});
 $('exportCases').onclick=()=>{const lines=[['case_id','attack_category_primary','source_stage','primary_source_tier','attribution_strength'].join(',')];filtered.forEach(c=>lines.push([c.case_id,c.attack_category_primary,c.source_stage,c.primary_source_tier,c.attribution_strength].map(s=>'"'+String(s).replaceAll('"','""')+'"').join(',')));const blob=new Blob([lines.join('\n')+'\n'],{type:'text/csv;charset=utf-8'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='atlas-public-metadata-filtered.csv';a.click();URL.revokeObjectURL(u)};
}
function initialize(data){const cases=data.cases;const expected=300;
 if(cases.length!==expected||data.meta.case_count!==expected||Object.keys(cases[0].evidence).length!==Object.keys(EVIDENCE).length)throw Error('Unexpected corpus or evidence payload');
 const stats=[['Incident records',data.meta.case_count],['Actor-role records',data.meta.actor_role_count],['Registered sources',data.meta.registered_source_count],['Screening decisions',data.meta.screening_count]];
 stats.forEach(([label,value])=>{const b=make('div','stat'),n=make('b','',String(value)),l=make('span','',label);b.append(n,l);$('summaryStats').append(b)});
 const att=countBy(cases,'attack_category_primary'),stages=countBy(cases,'source_stage'),channels=countBy(cases,'contact_channel_primary'),caseAttr=countBy(cases,'attribution_strength');const yesEvidence=Object.fromEntries(Object.keys(EVIDENCE).map(k=>[k,cases.filter(c=>c.evidence[k]==='yes').length]));const yesMechanisms=Object.fromEntries(Object.keys(MECHANISMS).map(k=>[k,cases.filter(c=>c.mechanisms[k]==='yes').length]));
 chartBars('overviewAttack',att,10);chartBars('overviewStages',stages);chartBars('overviewEvidence',yesEvidence,7,k=>EVIDENCE[k]);chartBars('overviewAttribution',caseAttr);
 chartBars('categoryAttack',att);chartBars('categoryChannels',channels);chartBars('categoryMechanisms',yesMechanisms,0,k=>MECHANISMS[k]);
 chartBars('actorIdentity',data.actors_aggregate.identity_resolution);chartBars('actorStrength',data.actors_aggregate.attribution_strength);chartBars('actorVictim',data.actors_aggregate.victim_facing_function);chartBars('actorFinancial',data.actors_aggregate.financial_function);
 chartBars('sourceTiers',data.source_aggregate.tier,0,k=>k);chartBars('sourceCaseStages',stages);
 options('caseAttack',att);options('caseStage',stages);options('evidenceAttack',att);options('evidenceStage',stages);options('caseEvidence',EVIDENCE,k=>EVIDENCE[k]);
 ['caseSearch','caseAttack','caseStage','caseEvidence'].forEach(id=>$(id).addEventListener(id==='caseSearch'?'input':'change',()=>renderCases(cases)));
 $('resetCases').addEventListener('click',()=>{['caseSearch','caseAttack','caseStage','caseEvidence'].forEach(id=>$(id).value='');renderCases(cases)});
 const updateEvidence=()=>drawMatrix(cases.filter(c=>(!$('evidenceAttack').value||c.attack_category_primary===$('evidenceAttack').value)&&(!$('evidenceStage').value||c.source_stage===$('evidenceStage').value)));
 ['evidenceAttack','evidenceStage'].forEach(id=>$(id).addEventListener('change',updateEvidence));
 renderCases(cases);updateEvidence();wireNav();
}
fetch('./data/atlas.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Could not load Atlas data');return r.json()}).then(initialize).catch(e=>{console.error(e);const err=make('p','loading-error','The Atlas metadata index could not be loaded. The repository and case notes remain available via the GitHub link above.');$('summaryStats').replaceChildren(err);wireNav()});
