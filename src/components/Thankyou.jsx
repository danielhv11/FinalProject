// src/ThankYou.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path
import Footer from '../components/Footer'; // Adjust the path

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            Thank You!
          </h1>
          <p className="text-lg">We got your email. Someone will be in touch with you shortly.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
