import React from "react";
const { useEffect, useState, useRef, useLayoutEffect } = React;
import { gsap } from "gsap";

import SimpleGSAP from "./components/SimpleGSAP";
import SampleCard from './components/SampleCard';


function GsapMotion() {
 
  return (
    <div id="gsapRoot">
      <h1>Using Greensock in React</h1>
      <SimpleGSAP />
      <section id="gsaspOne">
        <SampleCard />
      </section>
    </div>
)};

export default GsapMotion;
