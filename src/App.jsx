import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUs from './components/WhyUs';
import OurProcess from './components/Workflow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <WhyUs />
                <OurProcess />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
