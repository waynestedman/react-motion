import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      </ThemeProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Motion in React</h1>
    </div>
  )
}

export default App
