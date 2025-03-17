import React, { useState, useEffect } from 'react';

const CounterCard = ({ value, label, color = "text-primary" }) => {
  const [counted, setCounted] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          setDisplayValue(value);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [value, label, counted]);

  return (
    <div 
      id={`counter-${label}`}
      className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      <div className={`text-3xl md:text-4xl font-medium mb-2 ${color} animate-fadeIn`}>
        {displayValue}
      </div>
      <div className="text-gray-800 text-center text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default CounterCard;