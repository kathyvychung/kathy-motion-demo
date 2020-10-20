import * as Demo from './demo.js';
import {gsap} from "gsap";

import {giraffeAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(giraffeAnimation);