import React, { useState } from "react";
import toronto from "../../assets/images/CurrentlyServe/toronto.png"

import map from "../../assets/images/CurrentlyServe/map.png"
import USAStatesMap from "../Map/Map";

const CurrentlyServe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="text-center">
        <p className="text-green-500 text-2xl font-normal tracking-wide uppercase">
          States We
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-dark mt-2">
          Currently Serve
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          We believe everyone should have access to treatment and care. That's
          why we’re teaming up with providers all over the country. Click on a
          green state to see the insurance companies we currently accept and to
          learn more about online Suboxone doctors in your area.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 px-0 md:px-28">
        <div className="w-full md:w-1/3" >
          <img
            src={toronto}
            alt="Toronto"
            className="rounded-lg shadow-lg w-full md:w-80"
          />
          <div className="mt-4 text-center md:text-left">
            <h3 className="text-xl font-semibold text-black">Toronto</h3>
            <p className="text-[#00927C] text-sm mt-1 cursor-pointer hover:underline">
              📍 Ottawa St. and Homer Watson Blvd.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-2/3 flex justify-center">
      <img   onClick={() => setIsModalOpen(true)}
        src={map}
        alt="USA Map"
        className="rounded-lg w-full max-w-xl cursor-pointer transition-all duration-300"
        // onMouseEnter={() => setShowButton(true)}
        // onMouseLeave={() => setShowButton(false)}
      />

        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-orange-400 text-white px-6 py-2 rounded-md shadow-lg  font-serif
                     transition-all duration-300 hover:bg-orange-600 font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          View
        </button>

      {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white w-[98%] h-[90%] rounded-lg shadow-lg relative flex flex-col">
         <div className="absolute top-4 z-10 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 font-semibold font-serif text-sm px-4 py-2 rounded-lg shadow-lg">
  Hover over a state on the map to view its name 
</div>
           <button
             className="absolute top-4 right-4 text-yellow-300 hover:text-yellow-300  text-2xl font-bold z-10 bg-black rounded-5xl py-0.5 px-3"
             onClick={() => setIsModalOpen(false)}
           >
✖
           </button>

           <div className="flex-grow overflow-auto p-4 mt-20 md:mt-3">
             <USAStatesMap />
           </div>
         </div>
       </div>
      )}
    </div>
      </div>
      
    </section>
  );
};

export default CurrentlyServe;
