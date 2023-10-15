import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import AboutGSP from './components/AboutGSP';
import Hours from './components/Hours';
import Programming from './components/Programming';
import ContactUs from './components/ContactUs';
import Athletes from './components/Athletes';
import Adults from './components/Adults';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutGSP />} />
        <Route path="hours" element={<Hours />} />
        <Route path="programming" element={<Programming />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="athletes" element={<Athletes />} />
        <Route path="adults" element={<Adults />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
