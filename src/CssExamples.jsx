import React from "react";
import HambugerOne from "./components/HamburgerOne";

function CssExamples() {
  
  // function clickUpdate() {
  //   const buttons = document.querySelectorAll("button");

  //   buttons.forEach((button) => {
  //       const currentState = button.getAttribute("data-state");
    
  //       if (!currentState || currentState === "closed") {
  //         button.setAttribute("data-state", "opened");
  //         button.setAttribute("aria-expanded", "true");
  //       } else {
  //         button.setAttribute("data-state", "closed");
  //         button.setAttribute("aria-expanded", "false");
  //       }
  //   });
  // };

  return (
    <div className="cssMotionExamples">
      <h1>CSS motion in React</h1>
      <h2>Animated menu buttons</h2>
      <div className="examples">
        <HambugerOne />

        <div className="menuTrigger">
          <h2>Menu trigger example #2</h2>
          <button className="button2" aria-controls="primary-navigation" aria-expanded="false">
            <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 100" width="200">
              <line className="line top"
                x1="90" x2="10" y1="40" y2="40"
                strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0"
              >
              </line>
              <line className="line bottom"
                x1="10" x2="90" y1="60" y2="60"
                strokeWidth="10" strokeLinecap="round" strokeDasharray="80" strokeDashoffset="0"
              >
              </line>

            </svg>
          </button>
        </div>
        <div className="menuTrigger">
          <h2>Menu trigger example #3</h2>
          <button className="button3" aria-controls="primary-navigation" aria-expanded="false">
            <svg stroke="var(--button-color)" fill="none" className="hamburger" viewBox="-10 -10 120 120" width="200">
              <path className="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
)};

export default CssExamples;