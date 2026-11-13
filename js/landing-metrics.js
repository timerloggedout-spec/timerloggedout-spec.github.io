"use strict";
(function(){
  var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
  fetch('data/traffic-feed.json').then(function(r){ if(!r.ok) throw new Error('feed '+r.status); return r.json(); }).then(function(f){
    document.getElementById('tViews').textContent=f.views.count;
    document.getElementById('tUniques').textContent=f.views.uniques;
    var refs=(f.referrers||[]).map(function(x){ return '<div class="tref"><span>'+esc(x.referrer)+'</span><span>'+esc(x.count)+' visits · '+esc(x.uniques)+' unique</span></div>'; }).join('');
    document.getElementById('tRefs').innerHTML=refs || '<p>No referrers recorded in this window.</p>';
    document.getElementById('tNote').textContent=(f.note||'')+' Record generated '+(f.generated_at||'')+' · Source: '+(f.source||'')+'.';
  }).catch(function(){
    document.getElementById('tNote').textContent='Traffic record not yet published — the counter starts with the first collect; nothing is shown rather than anything guessed.';
  });
  fetch('help-wanted/data/fb-traffic.json').then(function(r){ if(!r.ok) throw new Error('fb '+r.status); return r.json(); }).then(function(f){
    var num=function(v){ var n=parseInt(v,10); return isNaN(n)?0:n; };
    var html='<h3>Facebook Pages — per-cell metrics</h3>';
    (f.pages||[]).forEach(function(pg){
      var tv=0,tu=0,te=0,tl=0;
      var rows=(pg.posts||[]).map(function(po){ var m=po.metrics||{}; tv+=num(m.views); tu+=num(m.unique_viewers); te+=num(m.engagements); tl+=num(m.link_clicks);
        var cap=String(po.caption_head||'').split('
')[0]; if(cap.length>64) cap=cap.slice(0,63)+'…';
        return '<div class="tref"><span>'+esc(cap)+'</span><span>'+esc(m.views||'0')+' views · '+esc(m.link_clicks||'0')+' link clicks</span></div>'; }).join('');
      html+='<p><strong>'+esc(pg.page)+'</strong> · cell '+esc(pg.cell||'')+' — totals: '+tv+' views · '+tu+' unique · '+te+' engagements · '+tl+' link clicks</p>'+rows;
    });
    html+='<p>Facebook record as of '+esc(f.as_of||'')+' · Source: '+esc(f.source||'')+'. '+(f.note||'')+'</p>';
    document.getElementById('tFb').innerHTML=html;
  }).catch(function(){
    document.getElementById('tFb').innerHTML='<p>Facebook metrics not yet published.</p>';
  });
})();
