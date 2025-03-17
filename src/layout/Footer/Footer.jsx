import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-8 lg:px-14">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 ">
            <h2 className="text-teal-500 text-4xl font-bold mb-4 ">LOGO</h2>
            <p className="text-gray-500 text-sm leading-relaxed text-justify font-cabinet">
              Experience The Convenience Of Recovery Delivered. Your Trusted Source For Online Medication Delivery. We Bring The Pharmacy To Your Doorstep, Ensuring Fast, Discreet, And Reliable Service. Whether You're Managing A Chronic Condition Or Need A One-Time Prescription Filled, We Make The Process Simple And Hassle-Free
            </p>
          </div>

          <div className="col-span-1 lg:ml-20">
            <h3 className="text-teal-400 text-lg font-normal mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Owners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Tenants</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Properties</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:ml-20">
            <h3 className="text-teal-400 text-lg font-normal font-serif mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Online Medications</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Download App</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Start Treatment</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">Online Urgent Care</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet">FAQ</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:ml-20">
            <h3 className="text-teal-400 text-lg font-normal font-serif mb-4">Contact</h3>
            <p className="flex items-center text-gray-600 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className='text-gray-500 hover:text-teal-500 transition-colors  text-sm font-cabinet'>1-866-757-9898</p>
            </p>

            <h3 className="text-teal-400 text-lg font-normal font-serif mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p className='text-gray-400'>©2024 · Recovery Delivered | All Rights Reserved</p>
          <p className="mt-2 md:mt-0 text-gray-400">Designed And Developed By Ropstam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;