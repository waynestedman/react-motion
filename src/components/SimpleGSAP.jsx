import React from "react";
const { useEffect, useState, useRef, useLayoutEffect } = React;
import { gsap } from "gsap";

function SimpleGSAP() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#6c90e6", color: "#FFFFFF", scale: 1.3, duration: 0.65, ease: "sine.inOut"});
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#00e6d6", color: "#000000", scale: 1 });
  };
  
  const circleRef = useRef();

  useLayoutEffect(() => {
    // console.log(circleRef) // { current: div.box.circle }

    gsap.to(circleRef.current, {
      rotation: "+=360",
      duration: 2, 
      repeat: -1,
      ease: "back.in(1.7)",
    });
  });
  
  return (
    <div className="gsapSimple">
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div>
      <div className="box circle" ref={circleRef}>Spin</div>
    </div>
)};

export default SimpleGSAP;
