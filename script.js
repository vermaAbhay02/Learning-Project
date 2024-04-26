const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


window.onload = function () {
  setTimeout(() => {
    // Gradually hide loading screen and show main content
    document.querySelector('.loading-container').style.display = 'none';
    document.getElementById('#main').style.display = 'block';
  }, 3000); // Add a small delay to improve transition smoothness
};





setTimeout(() => {
  


function mousefollower(){
  window.addEventListener('mousemove',(dets)=>{
    document.querySelector("#mouse-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
  })
}
function landingPageAnimate(){
  var tl=gsap.timeline();
  tl
  .from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.3,
    ease:Expo.easeInOut 
  })
  .to(".bound-elem",{
    y:0,
    ease:Expo.easeInOut,
    duration:1,
  })
  .to(".bound-img",{
    y:'0',
    delay:-0.5,
    duration:1.5,
    ease:Expo.easeInOut
  })
}
landingPageAnimate();
mousefollower();

document.querySelectorAll(".projects").forEach((project) => {
   
  var diffrotation=0;
  var rotation=0;


  project.addEventListener("mouseleave", (details) => {
    
     gsap.to(project.querySelector("img"), {
      opacity: 0,
      ease: Power3,

  });

  });


})
}, 3100); // Add a small delay to improve transition smoothness