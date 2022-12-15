function HambugerOne() {

  function clickUpdate(e) {
    // const burger = e.currentTarget.title;
    let currentState = e.currentTarget.title;
console.log(currentState);
    if (!currentState || currentState === "closed") {
      currentState.setAttribute("title", "true");
    } else {
      currentState.setAttribute("title", "false");
    }
  };

  return (
    <div className="menuTrigger">
      <h2>Menu trigger example #1</h2>
      <button onClick={clickUpdate} className="button1" title={"foo"} aria-controls="primary-navigation" aria-expanded="false" datastate="closed">
        <svg fill="var(--button-color)" className="hamburger" viewBox="0 0 100 100" width="200">
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
  )
};

export default HambugerOne;