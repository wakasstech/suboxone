import React from "react";
import suboxone from "../../assets/images/suboxone-globe.png";

const SuboxoneTreatment = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffff] to-[#e6f0fa]
 py-12  min-h-screen flex flex-col  relative">
      
      <div className="container mx-auto px-8 lg:px-14">
        <div className="mb-2">
          <p className="text-green-500 text-2xl font-normal ">GET SAME DAY ONLINE</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h1 className="text-3xl font-medium font-cabinet text-dark">Suboxone Treatment In 10 Minutes</h1>
          <button className="mt-4 md:mt-0 bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md text-sm">
            Download The App Today →
          </button>
        </div>
        </div>

      <div className="relative w-full  mt-10 flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">
          
          <div className="flex flex-col space-y-6 z-10">
            <div className="bg-white p-4 rounded-lg shadow-md border border-[#49C7AB] w-80 mx-auto">
              <p className="text-dark font-medium">Step 1 - Download The App</p>
              <p className="text-gray-500 text-sm">
                Click the link to download our app to get started.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border border-[#49C7AB] w-80 mx-auto">
            <p className="text-dark">Step 3 - Schedule Your First Visit</p>
              <p className="text-gray-500  text-sm">
                Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 flex justify-center items-center pointer-events-none ">
  <img 
    src={suboxone} 
    alt="Suboxone Background"
    className="w-[80%] md:w-[40%] lg:w-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
  />
</div>

          

          <div className="flex flex-col space-y-6  z-10">
            <div className="bg-white p-4 rounded-lg shadow-md border border-[#49C7AB] w-80 mx-auto">
            <p className="text-dark">Step 2 - Complete Onboarding</p>
              <p className="text-gray-500 text-sm">
                Provide medical history and sign treatment forms.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border border-[#49C7AB] w-80 mx-auto">
            <p className="text-dark">Step 4 - Meet With Licensed Provider</p>
              <p className="text-gray-500  text-sm">
                At the time of your appointment, open this app on your phone to have your visit.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 z-10">
          <div className="bg-white p-4 rounded-lg shadow-md border border-[#49C7AB] w-80 md:w-96 text-center">
          <p className="text-black">Step 5 - Pick Up Medication</p>
            <p className="text-gray-500 text-sm">
              Your script will be sent to your pharmacy of choice for pick up the same day.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SuboxoneTreatment;
