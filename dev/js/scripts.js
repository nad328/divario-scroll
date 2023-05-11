import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.set("#section-1 h1 span",{alpha:0.25});

let heroBtnTl = gsap.timeline({paused:true});
heroBtnTl.to("#tabby",{duration:1, alpha:0, y:50}, "myLabel")
;


function tabbyanimation(){
    let tl = gsap.timeline();
    tl.from("#tabby",{duration:3,alpha:0, y:-600})
    ;

    return tl;
}

gsap.from("#box",{duration:1, scrollTrigger:{
    trigger:"#box",
    toggleActions:"play resume reverse",
    start:"bottom 90%",
    end:"top 30%",
    markers: false
    },
    scale:2, 
    rotation:520, 
    x:"-=600%"});  

    

    function rosesanimation(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#section-3",
                start:"top 80%",
                end:"top 40%",
                scrub:true,
                markers:false
            }});
        
        tl.from("#section-3 h1",{duration:5, scale:50, alpha:0}, "meow")
       
    
        ;
    
        return tl;
    }

    function meowanim(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#section-3",
                start:"top 80%",
                end:"top 40%",
                scrub:true,
                markers:true
            }});
        tl.from("#bg-img",{duration:1, alpha:0}, "rawr0")
        
       
    
        ;
    
        return tl;
    }
    



let mainTl = gsap.timeline();
mainTl.add(tabbyanimation())
    .add(rosesanimation())
    .add(meowanim())
    

;



