import {gsap} from "gsap";

gsap.set("#neck",{transformOrigin: "center"})
/* -----------------
    Demo Script
----------------- */
const giraffeTL = gsap.timeline();
giraffeTL.from("#neck",{duration: 5, y: 600, ease: "none"}, "swing")
        .from("#numberFill",{duration: 4, y: 500, ease: "none"}, "swing")
        .from("#tail",{rotation:20, transformOrigin:"left top"}, "swing")
        .from("#tail",{rotation:0, transformOrigin:"left top"}, "swing")
        .to("#svg-demo",{ duration: 0.2, alpha: 0, ease: "none"})
        .to("#bush",{ duration: 0.2, alpha: 1, ease: "none"})
        // .to("#neck",{ duration: 1, alpha: 1, y: 400});

export function giraffeAnimation(){
    return giraffeTL;
}