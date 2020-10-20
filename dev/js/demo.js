import {gsap} from "gsap";

gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
// giraffeTL.from("#neck",{duration: 2, y: 600, ease: "none"})
        // .to("#neck",{y: -600, ease: "none"});

export function giraffeAnimation(){
    return giraffeTL;
}