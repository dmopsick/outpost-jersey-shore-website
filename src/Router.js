import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Pricing from './components/Pricing';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
