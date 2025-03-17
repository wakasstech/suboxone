import React, { useState, useRef } from 'react';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import { ChevronLeft, ChevronRight } from './Icons/Icons';
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const testimonials = [
    {
      id: 1,
      rating: 4,
      content: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
      author: "Nicholas O.",
      avatar: profile1
    },
    {
      id: 2,
      rating: 3.5,
      content: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      author: "Christine M.",
      avatar: profile2
    },
    {
      id: 3,
      rating: 3.5,
      content: "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard. Thank you!",
      author: "Heather B.",
      avatar: profile2
    },
    {
        id: 4,
        rating: 4,
        content: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
        author: "Nicholas O.",
        avatar: profile2
      },
  ];

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-8 lg:px-14">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="text-green-500 text-2xl font-normal mb-2">
              OUR CLIENT'S
            </div>
            <h2 className="text-3xl md:text-4xl font-medium font-cabinet text-dark">
              Testimonials
            </h2>
          </div>
          
          <div className="hidden sm:flex space-x-3">
            <button 
              onClick={scrollPrev}
              className={`w-10 h-10 rounded-full flex items-center text-gray-400 justify-center border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ${activeIndex === 0 ? '' : ''}`}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={scrollNext}
              className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-primary text-white hover:bg-primary-hover transition-all duration-300 ${activeIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex flex-col sm:flex-row justify-center items-center sm:justify-start transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100 / testimonials.length}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                onMouseEnter={() => setHovered(testimonial.id)}
                onMouseLeave={() => setHovered(null)}
                className={`min-w-full px-2 sm:min-w-[30%] md:min-w-[33.333%] lg:min-w-[33.333%] pb-6 
                    ${hovered === testimonial.id ? 'md:-rotate-3 md:scale-90 md:z-10' : hovered ? 'md:opacity-35 md:scale-95' : ''}`
                  }
                  
              >
                <TestimonialCard 
                  rating={testimonial.rating}
                  content={testimonial.content}
                  author={testimonial.author}
                  avatar={testimonial.avatar}
                //   isActive={index === activeIndex}
                //   onMouseEnter={() => setActiveIndex(index)} // Hover action
                //   onMouseLeave={() => setActiveIndex(null)} // Reset on hover leave

                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;