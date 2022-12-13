import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from './theme/theme.js';

import AppHeader from  './AppHeader.jsx';
// import Home from './Home.jsx';
import CssExamples from './CssExamples.jsx';
import GsapExamples from './GsapExamples.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader />
        <CssExamples />
        <Routes>
          {/* <Route path="/" element={ <Home />} /> */}
          <Route path="/css" element={ <CssExamples />} />
          <Route path="/gsap" element={ <GsapExamples />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
