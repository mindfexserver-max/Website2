setInterval(()=>{
  document.querySelectorAll(".bar span").forEach(bar=>{
    bar.style.width = Math.floor(Math.random()*80+10)+"%";
  });
},2000);
