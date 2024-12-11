import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/avetec.solar.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Determine if we are on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start flex-shrink-0">
            <a href='/' >
              <img className="h-6 w-12 mr-1" src={logo} alt="Avetec Solar Logo"/>
              <span className="text-xl tracking-tight">avetec.solar</span>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={isHomePage ? item.href : `/${item.href}`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#contactus" className="py-2 px-3 border rounded-md">
              Contact Us
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={isHomePage ? item.href : `/${item.href}`}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#contactus" className="py-2 px-3 border rounded-md">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
