import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('approot');
const root = createRoot(container);

const AppWrapper = () => {
  return (
    <App />
  );
};

root.render(<AppWrapper tab="Home" />);
