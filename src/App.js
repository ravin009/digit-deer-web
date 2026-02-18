// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; // <--- 1. Import About here
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content-wrap">
           <Routes>
             <Route path="/" element={<Home />} />
             
             {/* 2. Add the Route here */}
             <Route path="/about" element={<About />} />
             
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;