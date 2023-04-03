import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAssociate from './features/associate/pages';
import HomeStartup from './features/startup/pages';

const App: React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/associate" element={<HomeAssociate />} />
            <Route path="/startup" element={<HomeStartup />} />  
        </Routes>
        </BrowserRouter>
    );
  };
  
  export default App;

