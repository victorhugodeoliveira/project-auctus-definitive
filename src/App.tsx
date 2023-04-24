import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAssociate from './features/associate/pages';
import HomeStartup from './features/startup/pages';
import HomeLoginEnter from './features/login/enter/pages'
import HomeLoginRegister from './features/login/register/pages'

import AuthenticatedLayout from './private-route'

const App: React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>             
            <Route path="/login" element={<HomeLoginEnter />} />
            <Route path="/login-register" element={<HomeLoginRegister/>} />
            <Route path="/startup" element={<AuthenticatedLayout><HomeStartup /></AuthenticatedLayout>}/>
            <Route path="/associate" element={<AuthenticatedLayout><HomeAssociate /></AuthenticatedLayout>}/>
            <Route path="/desenStartup" element={<HomeStartup/>}/>
            <Route path="/desenAssociate" element={<HomeAssociate/>}/>
        </Routes>
        </BrowserRouter>
    );
  };
  
  export default App;

