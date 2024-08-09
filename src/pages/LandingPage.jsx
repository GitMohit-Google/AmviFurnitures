import React, { useEffect } from "react";
import StatsBanner from "../components/StatsBanner";
import ProductsSection from "../sections/ProductsSection";
import ContactPage from "./ContactPage";
import IndiaMap from "../components/Maps";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div className="overflow-auto p-5 px-8">
      {/* Title */}

      <div className="flex flex-row bg-[#f4f4f4] rounded-md shadow-lg w-full p-3 px-5">
        <div className="flex flex-col w-full p-10 pt-16 gap-4">
          <p className="text-gray-500 text-lg">
            Transform and Redesign your Home
          </p>
          <p className="text-8xl w-fit mb-4">
            Find Your <span style={{ color: "#ee4d37" }}>Signature</span> Seat
          </p>
          <p className="text-lg text-gray-700">
            Embrace the harmony of form and funtion. Explore our range and
            discover the furniture that will become your sanctuary of
            relaxation.
          </p>
        </div>
        <lottie-player
          src="https://lottie.host/d5c03e87-9907-4061-9c97-aa2f5d5b1199/kI9fyKRnxY.json"
          background="transparent"
          speed="0.5"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <img
          src="/banners/SignatureChair-Photoroom.png"
          alt="Banner"
          style={{ width: "450px", height: "auto" }}
        />
      </div>
      <StatsBanner />
      <div className="flex w-full items-center justify-center">
      <img src="/Online.png" alt="" />
      </div>
      <ProductsSection />
      <IndiaMap />
      <div style={{ marginTop: "-100px" }}>
        <ContactPage />
      </div>
      {/*  */}
    </div>
  );
};

export default LandingPage;
