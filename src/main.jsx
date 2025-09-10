import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModeProvider } from './contexts/modeContext'; // Import the ModeProvider
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ModeProvider>
      <App />
    </ModeProvider>
  </BrowserRouter>
);