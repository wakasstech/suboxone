import React from 'react';
import Button from '../Button/Button';
import bannerImage from "../../assets/images/main-banner.png"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-0">
        <img 
          src={bannerImage}
          alt="Couple walking down a street" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-8 lg:px-14 relative z-10">
        <div className="max-w-2xl lg:mt-32 " >
          <p className="text-white text-lg mb-4 font-thin animate-fadeIn">No lines. Less hassle. Lower costs.</p>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-cabinet  font-medium mb-6 leading-tight animate-slideUp">
            Easy Online Suboxone Treatment for Opioid Addiction
          </h1>
          
          <div className="mt-10 animate-fadeIn delay-300 font-serif" >
            <Button 
              text="Download The App Today" 
              icon={
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;