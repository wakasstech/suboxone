import React from 'react';

const Button = ({ text, onClick, fullWidth = false, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-primary hover:bg-primary-hover text-white font-medium py-1.5 px-5
        rounded-md transition-all duration-300 transform hover:scale-105
        flex items-center justify-center whitespace-nowrap
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;