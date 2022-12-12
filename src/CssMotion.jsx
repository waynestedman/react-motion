import React from "react";

function CssMotion() {
  return (
    <div className="cssMotionExamples">
      <h1>CSS motion in React</h1>
      <h2>Animated menu buttons</h2>
      <div className="examples">
        <div className="menuTrigger">
          <h2>Menu trigger example #1</h2>
          <button className="button1" aria-controls="primary-navigation" aria-expanded="false">
            <svg className="hamburger" viewBox="0 0 100 100" width="200">
              <rect className="line top"
                width="80" height="10"
                x="10" y="25" rx="5">
              </rect>
              <rect className="line middle"
                width="80" height="10"
                x="10" y="45" rx="5">
              </rect>
              <rect className="line bottom"
                width="80" height="10"
                x="10" y="65" rx="5">
              </rect>
            </svg>
          </button>
        </div>
        <div className="menuTrigger">
          <h2>Menu trigger example #2</h2>
          <button className="button2" aria-controls="primary-navigation" aria-expanded="false"></button>
        </div>
        <div className="menuTrigger">
          <h2>Menu trigger example #3</h2>
          <button className="button3" aria-controls="primary-navigation" aria-expanded="false"></button>
        </div>
      </div>
    </div>
)};

export default CssMotion;