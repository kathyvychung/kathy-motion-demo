import {gsap} from "gsap";

gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
giraffeTL.from("#neck",{duration: 5, y: 600, ease: "none"}, "swing")
        .to("#tail",{duration:1, rotation:20, transformOrigin:"left top", repeat:5, ease: "none"}, "swing")
        .from("#tail",{duration:1, rotation:0, transformOrigin:"left top", repeat:5, ease: "none"}, "swing")
        .to("#part1",{ duration: 0.1, alpha: 0})
        .from("#goal",{alpha:0})
        .from("#neck2",{duration: 3, y: 400},"rise")
        .from("#leaf1",{duration: 1, y: 1500},"rise")
        .from("#leaf2",{duration: 1, y: 1500},"rise")
        .from("#numberFill2",{duration: 2.5, y: 500},"rise")
        .to("#ear2",{rotation:20, transformOrigin:"left top"});


export function giraffeAnimation(){
    return giraffeTL;
}