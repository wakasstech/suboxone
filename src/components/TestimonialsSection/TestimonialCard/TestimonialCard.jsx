import React from 'react';
import StarRating from './StarRating/StarRating';

const TestimonialCard = ({ rating, content, author, avatar}) => {
  return (
    <div 
 
    className={`bg-white rounded-lg border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-lg
        
    `}
    >
      <StarRating rating={rating} />
      
      <p className="text-gray-600 font-cabinet mt-4 mb-4 text-[15px] sm:text-[13px] md:text-[13px] lg:text-[15px]">
        {content}
      </p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={avatar} 
            alt={`${author} avatar`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/50?text=' + author.charAt(0);
            }}
          />
        </div>
        <p className="font-medium text-dark">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;