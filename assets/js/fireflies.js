setInterval(()=>{
    const f=document.createElement("div");
    f.className="firefly";
    f.style.left=Math.random()*100+"%";
    f.style.top=Math.random()*100+"%";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),4000);
    },400);
    