fetch('assets/data.json').then(r=>r.json()).then(d=>{
  const liq=d.liquidity_top12, cov=d.coverage;
  const tb1=document.querySelector('#tblLiq tbody');
  liq.forEach(x=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${x.symbol}</td><td>${x.avg_rel_spread.toExponential(2)}</td><td>${x.tick_rate.toLocaleString()}</td><td>${Math.round(x.score).toLocaleString()}</td>`;tb1.appendChild(tr);});
  const tb2=document.querySelector('#tblCov tbody');
  cov.forEach(x=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${x.symbol}</td><td>${x.ticks.toLocaleString()}</td><td>${x.days}</td>`;tb2.appendChild(tr);});
  new Chart(document.getElementById('chLiq'),{type:'bar',data:{labels:liq.map(x=>x.symbol),datasets:[{label:'Liquidity score',data:liq.map(x=>Math.round(x.score))}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#a9b6dd'}},y:{ticks:{color:'#a9b6dd'}}}}});
  new Chart(document.getElementById('chCov'),{type:'bar',data:{labels:cov.map(x=>x.symbol),datasets:[{label:'Ticks',data:cov.map(x=>x.ticks)}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#a9b6dd'}},y:{ticks:{color:'#a9b6dd'}}}}});
});
