import React from "react";
import reactLogo from './assets/react.svg';

function AppHome() {
  return (
    <div>
      <h1>Motion in React</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
)};

export default AppHome;