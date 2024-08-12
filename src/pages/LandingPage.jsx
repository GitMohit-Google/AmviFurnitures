import React, { useEffect } from "react";
import StatsBanner from "../components/StatsBanner";
import ProductsSection from "../sections/ProductsSection";
import ContactPage from "./ContactPage";
import IndiaMap from "../components/Maps";

const LandingPage = () => {
  useEffect(() => {
    const observerX = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showX");
        } else {
          entry.target.classList.remove("showX");
        }
      });
    });

    const observerY = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showY");
        } else {
          entry.target.classList.remove("showY");
        }
      });
    });

    const hiddenElementsBlur = document.querySelectorAll(".hiddenblur");
    hiddenElementsBlur.forEach((el) => observerX.observe(el));

    const hiddenElementsRight = document.querySelectorAll(".hiddenRight");
    hiddenElementsRight.forEach((el) => observerX.observe(el));

    const hiddenElementsLeft = document.querySelectorAll(".hiddenLeft");
    hiddenElementsLeft.forEach((el) => observerX.observe(el));

    const hiddenElementsDown = document.querySelectorAll(".hiddenDown");
    hiddenElementsDown.forEach((el) => observerY.observe(el));

    const hiddenElementsTop = document.querySelectorAll(".hiddenTop");
    hiddenElementsTop.forEach((el) => observerY.observe(el));

    // Cleanup observers on component unmount
    return () => {
      observerX.disconnect();
      observerY.disconnect();
    };
  }, []);

  return (
    <div className="overflow-auto p-5 px-8">
      {/* Title */}

      <div className="flex flex-row bg-[#f4f4f4] rounded-md shadow-lg w-full p-3 px-5 hiddenblur">
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
      <ProductsSection />
      <div className="flex w-full items-center justify-center">
        <p className="w-[75%] sm:w-[45%] text-center hiddenblur">
          Available throughout{" "}
          <span className="text-[#ee4d37]">North India</span>, serving over{" "}
          <span className="text-[#ee4d37]">50 million people</span> and present
          in more than <span className="text-[#ee4d37]">1,900 outlets</span>{" "}
          nationwide
        </p>
      </div>
      <div className="flex w-full items-center justify-center mt-[50px]">
        <img
          src="/IndiaMap.png"
          alt="India Map"
          style={{
            maxWidth: "800px",
            width: "100%",
          }}
          className="w-[1/2] lg:w-[90%] rounded-lg"
        />
      </div>
      <div style={{ marginTop: "-100px" }}>
        <ContactPage />
      </div>
      {/*  */}
    </div>
  );
};

export default LandingPage;
