import React from 'react'


function onScroll() {
    console.log("scroll!");
  }
  
// document.getElementById("moveable-3d").addEventListener("mousemove", effect3d);
document.querySelectorAll('.moveable-3d').forEach(item => {
    item.addEventListener('mousemove', effect3d)
  })
  const moveableEls = document.querySelectorAll('.moveable-3d');
  
  const limit = 25;
  const sensitivity = 50;
  
  
  let shiny = document.createElement("div");
  shiny.classList.add('effect3d--shine')
  
  moveableEls.forEach(el => {
      el.appendChild(shiny);
  })
  
  function effect3d(event) {
      function doEffect(el, event) {
  
          let w = el.scrollWidth;
          let h = el.scrollHeight;
          let mouseX = Math.round(event.pageX - el.offsetLeft);
          let mouseY = Math.round(event.pageY - el.offsetTop - el.style.marginTop);
          
          //pos of the mouse position in relation to the center of the element
          let dx = mouseX - w / 2;
          let dy = mouseY - h / 2;
  
          // alter dx and dy by our sensitivy and limit
          // to create a smoother experience
          let ax = dx / sensitivity;
          if(ax >= limit) ax = limit;
          if(ax <= -limit) ay = limit;
          let ay = dy / sensitivity;
          if(ay > limit) ay = limit;
          if(ay < -limit) ay = -limit;
  
          //
          let theta  = Math.atan2(dy, dx);
          let angle = theta * 180 / Math.PI - 90;
  
  
          //Ensure that our gradient angle doesn't go under 0 degrees
          if(angle < 0) angle = angle + 360;
          //Reverse the angle
          angle = angle - 180;
  
          el.style.transform = `rotateX(${-ay}deg) rotateY(${ax}deg)`
         
      }
  
      //
      moveableEls.forEach(el => {
          doEffect(el, event);
      })
  }
  
  



const card3d = () => {
    return null;
}

export default card3d
