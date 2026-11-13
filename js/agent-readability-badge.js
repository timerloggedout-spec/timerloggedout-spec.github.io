(function(){
  var badge=document.getElementById("agent-readability-badge");
  if(!badge)return;
  fetch("/data/agent-readability-status.json",{cache:"no-store"})
    .then(function(r){if(!r.ok)throw new Error("status "+r.status);return r.json();})
    .then(function(status){
      var threshold=Number(status.threshold||95);
      var score=Number(status.score);
      var scan=String(status.scan_url||"");
      var verified=Date.parse(status.verified_at||"");
      var scanValid=/^https:\/\/agent-ready\.dev\/scan\/[A-Za-z0-9_-]+$/.test(scan);
      if(!Number.isFinite(score)||score<threshold||score>100||!scanValid||!Number.isFinite(verified))return;
      badge.href=scan;
      badge.textContent="Agent Ready "+score+"/100";
      badge.setAttribute("aria-label","Verified Agent Readability score "+score+" out of 100");
      badge.hidden=false;
    })
    .catch(function(){});
})();
