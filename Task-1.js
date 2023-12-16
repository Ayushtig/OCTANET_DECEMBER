 var tl = gsap.timeline()
 tl.from(".one img", {
    y:100,
    opacity:0,
    duration:1
 })

 .from(".one h2",{
    y:100,
    opacity:0,
    duration:1
 })

 .from(".one h1",{
    y:100,
    opacity:0,
    duration:1
 })

 .to(".one img", {
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.7
 })

 .to(".one h2",{
    y:-100,
    opacity:0,
    duration:0.7,
   
 })

 .to(".one h1",{
    y:-100,
    opacity:0,
    duration:0.7,
  
 })

 var tl2 = gsap.timeline()
 tl2.from(".two img", {
    y:500,
    
    opacity:0,
    duration:2,
    delay:6
 }, "hello")

 .from(".two h1",{
    y:100,
    opacity:0,
    duration:1
 })

 .from(".two h4",{
    y:100,
    opacity:0,
    duration:1
 })

 .from(".box",{
   x:-50,
   opacity:0,
   stagger:1,
   duration:1,
   delay:6

},"hello")
 

 .to(".two img", {
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.7
 }, "cool")

 .to(".two h1",{
    y:-100,
    opacity:0,
    duration:0.7,
   
 })

 .to(".two h4",{
    y:-100,
    opacity:0,
    duration:0.7,
  
 })

 .to(".box",{
   x:50,
   opacity:0,
   stagger:1,
   duration:0.6,
   

},"cool")
 

var tl3 = gsap.timeline()
 tl3.from(".three img", {
    y:500,
    
    opacity:0,
    duration:2,
    delay:13
 },"dam")

 .from(".three h1",{
    y:100,
    opacity:0,
    duration:1
 })

 .from(".three h5",{
    y:100,
    opacity:0,
    duration:1
 })

 

.from(".cube",{
   x:-100,
   opacity:0,
   
   duration:1,
   delay:13

},"dam")
 

 .to(".three img", {
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.7
 }, "cool2")

 .to(".three h1",{
    y:-100,
    opacity:0,
    duration:0.7,
   
 })

 .to(".three h5",{
    y:-100,
    opacity:0,
    duration:0.7,
  
 })

 .to(".cube",{
   x:100,
   opacity:0,
   duration:0.6,
   delay:0.3
   

},"cool2")
 


var tl4 = gsap.timeline()
 tl4.from(".four img", {
    y:500,
    
    opacity:0,
    duration:2,
    delay:18
 },"dam2")

 .from(".four h1",{
    y:100,
    opacity:0,
    duration:1
 })

 .from(".four h5",{
    y:100,
    opacity:0,
    duration:1
 })

 

.from(".right-4 img",{
   x:-100,
   opacity:0,
   
   duration:1,
   delay:18

},"dam2")
 

 .to(".four img", {
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.7
 }, "cool3")

 .to(".four h1",{
    y:-100,
    opacity:0,
    duration:0.7,
   
 })

 .to(".four h5",{
    y:-100,
    opacity:0,
    duration:0.7,
  
 })

 .to(".right-4 img",{
   x:100,
   opacity:0,
   duration:0.6,
   delay:0.3
   

},"cool3")
 


var tl5 = gsap.timeline()
 tl5.from(".right-5 img", {
    y:500,
    
    opacity:0,
    duration:2,
    delay:24
 },"dam3")

 .from(".right-5 h2",{
    y:100,
    stagger:1,
    opacity:0,
    duration:1
 })

 

 

.from(".pic",{
   x:-100,
   opacity:0,
   
   duration:1,
   delay:24

},"dam3")
 

 .to(".right-5 img", {
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.7
 }, "cool4")

 .to(".right-5 h2",{
    y:-100,
    opacity:0,
    stagger:1,
    duration:0.7,
   
 })
 .to(".pic",{
   x:100,
   opacity:0,
   duration:0.6,
   delay:0.3
   

},"cool4")
 
