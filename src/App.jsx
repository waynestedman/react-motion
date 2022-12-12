import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from './theme/theme.js';

import AppHeader from  './AppHeader.jsx';
// import Home from './Home.jsx';
import CssMotion from './CssMotion.jsx';
import GsapMotion from './GsapMotion.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader />
        <CssMotion />
        <Routes>
          {/* <Route path="/" element={ <Home />} /> */}
          <Route path="/css" element={ <CssMotion />} />
          <Route path="/gsap" element={ <GsapMotion />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
