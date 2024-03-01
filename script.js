const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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




  project.addEventListener("mousemove", (details) => {
    var diffY = details.clientY - project.getBoundingClientRect().top;
    var diffX = details.clientX - project.getBoundingClientRect().left;

    diffrotation=details.clientX-rotation;
    rotation=details.clientX;

    var img = project.querySelector("img");
    var imgWidth = img.offsetWidth;
    var imgHeight = img.offsetHeight;

    if (diffX >= 0 && diffX <= project.offsetWidth && diffY >= 0 && diffY <= project.offsetHeight) {
      gsap.to(img, {
        opacity: 1,
        top: diffY - imgHeight / 2,
        left: diffX - imgWidth / 2,
        ease: Power3,
        rotate:gsap.utils.clamp(-10,10,diffrotation)
      });
    }
  }); 
})
