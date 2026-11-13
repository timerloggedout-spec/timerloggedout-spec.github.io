(function(){const C=window.CONTENT,$=i=>document.getElementById(i),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.title=C.brand;$('brand').textContent=C.brand;$('nav').innerHTML=C.nav.map(n=>`<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('');
$('h1').textContent=C.hero.headline;$('sub').textContent=C.hero.subhead;for(const id of['cta1','cta2']){$(id).textContent=C.hero.cta;$(id).href=C.hero.ctaHref;}
$('inc').textContent=C.hero.incentive;$('inc2').textContent=C.hero.incentive;$('ctaH').textContent=C.hero.headline;
$('benefits').innerHTML=C.benefits.map(b=>`<div class="card"><div class="ic">${esc(b.icon)}</div><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></div>`).join('');
$('demoTitle').textContent=C.demo.title;$('demoText').textContent=C.demo.text;$('demoBtn').textContent=C.demo.button;$('demoBtn').href=C.demo.href;$('repoBtn').href=C.demo.repoHref;
if(C.partners&&C.partners.items&&C.partners.items.length){const P=C.partners;$('pTitle').textContent=P.title;$('pLead').textContent=P.lead;
$('pGrid').innerHTML=P.items.map(p=>`<a class="card pcard" href="${esc(p.href)}" target="_blank" rel="noopener sponsored"><div class="ic">${esc(p.icon||'◇')}</div><span class="tag">${esc(p.category||'')}</span><h3>${esc(p.name)}</h3><p>${esc(p.text||'')}</p>${p.offer?`<span class="offer">${esc(p.offer)}</span>`:''}</a>`).join('');
$('pNote').innerHTML=(P.note?esc(P.note)+' ':'')+(P.registryHref?`<a href="${esc(P.registryHref)}" target="_blank" rel="noopener">${esc(P.registryLabel||'Registry')}</a>`:'');}else{$('partners').style.display='none'}
// Invite-code programmes render from the live referral feed (rotation-safe:
// the feed publishes exactly one live code per programme; codes are never
// baked into this page). Programmes without a live code render nothing.
fetch('help-wanted/data/referral-feed.json').then(r=>{if(!r.ok)throw new Error('feed '+r.status);return r.json()}).then(F=>{
const ch=new URLSearchParams(location.search).get('ch');
const pick=i=>i.mechanic==='invite_code'?((ch==='fb-b'&&i.cell_b_code)?i.cell_b_code:i.live_code):null;
const codes=(F.items||[]).map(i=>({i,code:pick(i)})).filter(x=>x.code);
if(codes.length)
$('pGrid').insertAdjacentHTML('beforeend',codes.map(({i,code})=>`<div class="card pcard"><span class="tag">Invite code — free</span><h3>${esc(i.name)}</h3><p>${esc(i.visitor_reward||'')}</p><div><span class="codechip">${esc(code)}</span><button class="copybtn" data-copy="${esc(code)}">Copy</button></div>${i.free_no_cc?`<p class="warn">${esc(i.free_no_cc)}</p>`:''}${i.reserve_codes?`<p class="pool">Pool healthy: ${i.reserve_codes} backup code${i.reserve_codes>1?'s':''} ready if this one fills.</p>`:''}</div>`).join(''));
const aff=(F.items||[]).filter(i=>i.mechanic==='affiliate_link'&&i.badge_svg&&i.link);
if(aff.length)$('pGrid').insertAdjacentHTML('beforeend',aff.map(i=>`<a class="card pcard" href="${esc(i.link)}" target="_blank" rel="noopener sponsored"><span class="tag">Affiliate — free to join</span><h3>${esc(i.name)}</h3><p>${esc(i.visitor_reward||'')}</p><img src="${esc(i.badge_svg)}" alt="${esc(i.name)}" loading="lazy"></a>`).join(''));
const lnk=(F.items||[]).filter(i=>i.mechanic==='referral_link'&&i.status==='active_link'&&i.link);
if(lnk.length)$('pGrid').insertAdjacentHTML('beforeend',lnk.map(i=>`<a class="card pcard" href="${esc(i.link)}" target="_blank" rel="noopener sponsored"><span class="tag">Referral link — free to join</span><h3>${esc(i.name)}</h3><p>${esc(i.visitor_reward||'Referral link — offer NOT ESTABLISHED; check the terms on signup.')}</p></a>`).join(''));
}).catch(()=>{});
$('pGrid').addEventListener('click',e=>{const b=e.target.closest('[data-copy]');if(!b)return;const done=()=>{b.textContent='Copied';setTimeout(()=>{b.textContent='Copy'},1600)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(b.getAttribute('data-copy')).then(done).catch(done)}else{done()}});
$('fline').textContent=C.footer.line;$('flinks').innerHTML=C.footer.links.map(l=>`<li><a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join('');$('disc').textContent=C.footer.disclosure||'';
document.querySelector('meta[name=description]').content=C.hero.subhead;})();
