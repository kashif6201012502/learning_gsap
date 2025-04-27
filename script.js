//make dom completely loaded

document.addEventListener("DOMContentLoaded",(event)=>{

//Tween

 let tweenTo =  gsap.to(".box",{
    x : 300,
  
    
     duration: 3,
      ease: "bounce(1.7)",
      rotation: 360,
        scale: 0.5,
    });

    //controllers

    document.querySelector("#play").onclick = ()=> tweenTo.play()
    document.querySelector("#pause").onclick = ()=> tweenTo.pause()
    document.querySelector("#resume").onclick = ()=> tweenTo.resume()
    document.querySelector("#reverse").onclick = ()=> tweenTo.reverse()
    document.querySelector("#restart").onclick = ()=> tweenTo.restart()
    document.querySelector("#stop").onclick = ()=> tweenTo.stop()


})