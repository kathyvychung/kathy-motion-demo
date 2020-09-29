import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */

var timeOfAnimation = 2;

gsap.to(".stick",{duration: timeOfAnimation, rotation: 360, x:500, y:400});

gsap.from(".circle-1",{duration: timeOfAnimation, x:-800, y:300, delay:2});
gsap.to(".circle-1",{duration: timeOfAnimation, x:800, y:300, delay:2});

gsap.from(".circle-2",{duration: timeOfAnimation, x:-700, y:100, delay:3 });
gsap.to(".circle-2",{duration: timeOfAnimation, x:700, y:100, delay:3 });

gsap.from(".circle-3",{duration: timeOfAnimation, x:-550, y:-100, delay:4 });
gsap.to(".circle-3",{duration: timeOfAnimation, x:550, y:-100, delay:4 });

gsap.to(".circle-3",{duration: 1, alpha:0, delay:6});
gsap.to(".circle-2",{duration: 1, alpha:0, delay:7});
gsap.to(".circle-1",{duration: 1, alpha:0, delay:8});
