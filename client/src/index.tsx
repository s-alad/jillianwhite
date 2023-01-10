import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './views/App/App';
import { inject } from '@vercel/analytics';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {
      false ?
      <div className='dev'>in development.</div>
      :
      <>
      {inject()}
      <App/>
      </>
      
    }

  </React.StrictMode>
);
