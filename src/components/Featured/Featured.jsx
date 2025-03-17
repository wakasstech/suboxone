import React from 'react';
import cbc from "../../assets/images/featured/CBS News.png";
import abc from "../../assets/images/featured/ABC.png";
import nbc from "../../assets/images/featured/NBC.png";
import fox from "../../assets/images/featured/FOX.png";

const FeaturedOn = () => {
    return (
      <section className="bg-gray-50 py-20 lg:px-14">
        <div className=" flex items-center justify-between container mx-auto px-8">
          <div className="w-2/4">
            <p className="text-green-500 text-2xl font-normal">As Seen</p>
            <h2 className="text-2xl font-medium font-cabinet text-dark mt-3">Featured On</h2>
          </div>
  
          <div className="w-3/4 overflow-hidden relative">
            <div className="flex space-x-20 animate-marquee">
            <img src={cbc} alt="CBS News" className="h-10 " />
              <img src={abc} alt="ABC" className="h-10" />
              <img src={nbc} alt="NBC News" className="h-10" />
              <img src={fox} alt="FOX" className="h-10" />
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 12s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>
    );
  };
  
  export default FeaturedOn;
  
  