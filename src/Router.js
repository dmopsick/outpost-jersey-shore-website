import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Coaching from './components/Coaching';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
