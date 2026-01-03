const hearts = document.querySelector(".hearts");

setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.style.left=Math.random()*100+"%";
  h.style.animationDuration=(Math.random()*3+3)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},300);
