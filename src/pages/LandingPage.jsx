import React from 'react';
import StatsBanner from '../components/StatsBanner';
import ProductsSection from '../sections/ProductsSection';

const LandingPage = () => {
  return (
    <div className='overflow-auto p-5 px-8'>
      {/* Title */}
      <div className="flex flex-col lg:flex-row bg-[#f4f4f4] rounded-md shadow-lg w-full p-3 px-5 gap-5">
        <div className="flex flex-col w-full p-10 pt-16 gap-4 text-center lg:text-left">
          <p className='text-gray-500 text-lg'>Transform and Redesign your Home</p>
          <p className='text-4xl lg:text-8xl mb-4'>
            Find Your <span style={{color:"#ee4d37"}}>Signature</span> Seat
          </p>
          <p className='text-base lg:text-lg text-gray-700'>
            Embrace the harmony of form and function. Explore our range and discover the furniture that will become your sanctuary of relaxation.
          </p>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <lottie-player src="https://lottie.host/d5c03e87-9907-4061-9c97-aa2f5d5b1199/kI9fyKRnxY.json" background="transparent" speed="0.5" style={{width: "100%", maxWidth: "400px", height: "auto"}} loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img src="/banners/SignatureChair-Photoroom.png" alt="Banner" className="w-full max-w-[450px] h-auto"/>
        </div>
      </div>
      <StatsBanner />
      <ProductsSection />
    </div>
  );
};

export default LandingPage;
