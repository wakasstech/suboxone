import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full  z-50 transition-all backdrop-blur-sm duration-300 lg:px-14 ${
        isScrolled ? 'bg-black/70 py-3' : 'bg-transparent py-4 md:mt-8'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-white text-4xl font-bold">LOGO</div>
        
        <div className="hidden lg:flex items-center ">
          <nav>
            <ul className="flex space-x-8">
              <li><a href="/" className="text-white font-cabinet hover:text-primary transition-colors">Home</a></li>
              <li><a href="/" className="text-white font-cabinet hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/" className="text-white font-cabinet hover:text-primary transition-colors">Owners</a></li>
              <li><a href="/" className="text-white font-cabinet hover:text-primary transition-colors">Tenants</a></li>
              <li><a href="/" className="text-white font-cabinet hover:text-primary transition-colors">Properties</a></li>
            </ul>
          </nav>
          
        </div>
        <div className="hidden lg:flex">
        <Button  text="Start Treatment" />
        </div>
       
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm text-white py-4 px-4 absolute w-full transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            <li><a href="/" className="block py-2 font-cabinet hover:text-primary transition-colors">Home</a></li>
            <li><a href="/" className="block py-2 font-cabinet hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/" className="block py-2 font-cabinet hover:text-primary transition-colors">Owners</a></li>
            <li><a href="/" className="block py-2 font-cabinet hover:text-primary transition-colors">Tenants</a></li>
            <li><a href="/" className="block py-2 font-cabinet hover:text-primary transition-colors">Properties</a></li>
            <li className="pt-2">
              <Button text="Start Treatment" fullWidth />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;