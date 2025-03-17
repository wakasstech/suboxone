import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GradientSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // Heading animations - from left and right
  const mainHeadingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };
  
  const subHeadingVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-gradient-to-r from-blue-400 to-[#76a098] w-full py-16 px-4 md:py-24 md:px-8">
        <div className="absolute inset-0 w-full h-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div 
              key={index}
              className="absolute top-0 bottom-0 w-1 bg-white/20"
              style={{ 
                left: `${(index + 1) * 3.33}%`,
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: [0.3, 0.9, 0.5], 
                width: ["6px", "8px", "6px"],
                color: "#7c31df",
                transition: { 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut",
                  delay: index * 0.03
                } 
              } : {}}
            />
          ))}
        </div>
        
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.p 
            className="text-black uppercase tracking-wider text-2xl md:text-sm mb-2 font-semibold"
            variants={subHeadingVariants}
          >
            Secure access to your medications
          </motion.p>
          
          <motion.h2 
            className="text-black text-2xl md:text-3xl font-bold mb-6"
            variants={mainHeadingVariants}
          >
            Get Your Meds Online Today
          </motion.h2>
          
          <motion.p 
            className="text-black text-sm md:text-base mb-8"
            variants={textVariants}
          >
            We have partnered with Rx-Outreach to provide mail order medications at a fraction of the price you 
            may find in your local pharmacy. Meet your Rx needs from your mobile today and get your
            medication delivered as quickly as 24 hours later.
          </motion.p>
          
          <motion.button 
            className="bg-black text-white py-2 px-6 rounded inline-flex items-center font-serif"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get The App
            <motion.svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default GradientSection;