import {gsap} from "gsap";

gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
// giraffeTL.from("#numberFill",{duration: 4, y: 500, ease: "none"}, "swing");


export function giraffeAnimation(){
    return giraffeTL;
}