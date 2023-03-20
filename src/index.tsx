import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAssociate from './templates/associate/home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/associate" element={<HomeAssociate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

