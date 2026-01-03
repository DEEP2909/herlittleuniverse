const bday = new Date("Jan 6, 2026 00:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const d=bday-now;
document.getElementById("countdown").innerHTML=
Math.floor(d/(1000*60*60*24))+" Days "+
Math.floor((d/(1000*60*60))%24)+" Hrs "+
Math.floor((d/(1000*60))%60)+" Min "+
Math.floor((d/1000)%60)+" Sec until your day 💖";
},1000);
