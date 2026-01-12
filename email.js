emailjs.init("HHXuwzLx8VyUVmj-a");

const modal=document.getElementById("modal");
const card=document.getElementById("card");

document.getElementById("openBtn").onclick=()=>modal.style.display="flex";
function closeModal(){modal.style.display="none";}


card.addEventListener("mousemove",(e)=>{
  const r=card.getBoundingClientRect();
  const x=e.clientX-r.left;
  const y=e.clientY-r.top;
  const rx=(y/r.height-0.5)*10;
  const ry=(x/r.width-0.5)*-10;
  card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
});
card.addEventListener("mouseleave",()=>card.style.transform="rotateX(0) rotateY(0)");



document.getElementById("ratingForm").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("service_e2svjnd","template_4s2nlgk",this)
  .then(()=>{
    this.style.display="none";
    document.getElementById("successBox").style.display="block";
  });
});



function toggleTheme(){
  document.body.classList.toggle("light");
}