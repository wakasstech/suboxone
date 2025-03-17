import React from 'react';
import { motion } from "framer-motion";
import CounterCard from './CounterCard/CounterCard';
import backgroundGif from '../../assets/images/breakingBarrier-gif.jpg';

const BreakingBarriersSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `url(${backgroundGif})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "0% 50%",
        }}
      />

      <div className="container mx-auto px-8 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-dark font-cabinet">
              Breaking Barriers to <br/> Recovery
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. We're deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-10">
            <p className="text-gray-700 mb-10">
              We're not just offering a service. We're creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery–whether it's stigma, inconvenience, or lack of access to quality care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-serif">
              <CounterCard 
                value="500+" 
                label="Patients Treated" 
                color="text-green-500"
              />
              <CounterCard 
                value="300+" 
                label="Centers Nationwide" 
                color="text-green-400"
              />
              <CounterCard 
                value="4.9/5" 
                label="Patients Satisfaction" 
                color="text-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingBarriersSection;