import React from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import videoSrc from "../../assets/images/videoSrc.png"
const TreatmentPlatformSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="text-green-500 font-normal mb-3 text-2xl">
              WELCOME TO RECOVERY DELIVERED
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium font-cabinet mb-6 text-dark">
              Your Fully Online Suboxone Treatment Platform
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.
              </p>
              
              <p className="text-gray-600">
                With monthly and weekly meetings based on where you are in your recovery. Get a same day appointment and script.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <VideoPlayer 
                thumbnailSrc={videoSrc}
                videoSrc="#" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TreatmentPlatformSection;
