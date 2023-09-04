function initial (){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}

initial()


 function cursormove(){
  window.addEventListener("mousemove",function (dets){
      document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}

cursormove()





var tl = gsap.timeline({

    scrollTrigger:{
        trigger:".page1 h2",
        scroller:".main",
        start:"top 20%",
        end:"top 0%",
        scrub:2,
    }
})
tl.to(".head1 h2", {
    x: -80, 
},gsap)
tl.to(".head2 h2",{
    x : 100,
},gsap)

tl.to("#video",{
    width:"90%",
},gsap)





var tl2 = gsap.timeline({
  scrollTrigger : {
    trigger:".page2",
    scroller: ".main",
    start:"top 50vw",
    end:"top 30vw",
    scrub:3,
  }
})

tl2.to(".main",{
    backgroundColor:"#fff",
})

tl2.from(".page2-left p",{
    x:"-20vw",
})    

tl2.from("#page2-vid",{
  x:"5vw",
 
})


var tl3 = gsap.timeline({
  scrollTrigger : {
    trigger:".page3",
    scroller: ".main",
    start:"top 50vw",
    end:"top 40vw",
    scrub:3,
   
  }
})



tl3.to(".main",{
    backgroundColor:"rgb(149, 137, 137)"
})
tl3.to("#img1 img",{
    rotate:"360 deg",
    duration:1.5,
    scale:.9,
})

tl3.from("#img2 img",{
  y:80,
  duration:1.5,
  delay: .8,
  
})

tl3.from("#vid2 video",{
  y:-100,
  duration:1,
  
})

tl3.to("#vid1 video",{
  x:2,
  duration:1,
  scale:1,
})


var tl4 = gsap.timeline({
  scrollTrigger : {
    trigger:".page4",
    scroller: ".main",
    start:"top 60vw",
    end:"top 50vw",
    scrub:3,
  }
})
tl4.to(".main",{
  backgroundColor:"#111",
})




var boxes= document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att= elem.getAttribute("data-img")
    console.log(att)

    // cursormove.style.width= "20vw"
    // cursormove.style.height= "20vw"
    // cursormove.style.borderRadius= "0"
    // cursormove.backgroundImage = `url(${att})`

  })

})
