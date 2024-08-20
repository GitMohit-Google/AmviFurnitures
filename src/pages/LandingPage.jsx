import React, { useEffect } from "react";
import StatsBanner from "../components/StatsBanner";
import ProductsSection from "../sections/ProductsSection";
import ContactPage from "./ContactPage";
import IndiaMap from "../components/Maps";
import ClientStats from "../sections/ClientStats";
import ClientTestimonials from "../components/ClientTestimonial";

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
    <div className="overflow-auto p-5 sm:px-8 overflowXhide">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row bg-[#f4f4f4] rounded-md shadow-lg w-full p-3 sm:px-5 hiddenblur sm:h-[450px]">
        <div className="flex flex-col w-full p-6 sm:p-10 pt-8 sm:pt-16 gap-4">
          <p className="text-gray-500 text-base sm:text-lg">
            Transform and Redesign your Home
          </p>
          <p className="text-5xl sm:text-7xl w-fit mb-4">
            Find Your <span style={{ color: "#ee4d37" }}>Signature</span> Seat
          </p>
          <p className="text-sm sm:text-lg text-gray-700">
            Embrace the harmony of form and function. Explore our range and
            discover the furniture that will become your sanctuary of
            relaxation.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex-shrink-0 w-[40%] sm:w-[35%] hidden sm:flex">
            <lottie-player
              src="https://lottie.host/d5c03e87-9907-4061-9c97-aa2f5d5b1199/kI9fyKRnxY.json"
              background="transparent"
              speed="0.5"
              style={{ width: "70%", height: "auto" }}
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </div>
          <div className="flex-shrink-0 w-[70%] sm:w-[55%]">
            <img
              src="/banners/SignatureChair-Photoroom.png"
              alt="Banner"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <StatsBanner />
      <div className="flex-col w-full px-1 sm:px-5 gap-10 my-12 flex">
        <img
          src="/Frame 7.png"
          alt=""
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <img
          src="/Frame 8.png"
          alt=""
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      {/* Products Section */}
      <ProductsSection />
      <ClientStats />

      <div className="flex-col w-full px-1 sm:px-5 gap-10 mt-12 hidden sm:flex">
        <img
          src="/Bann3.png"
          alt=""
          className="rounded-lg shadow-lg w-full h-auto hiddenLeft"
        />
        <img
          src="/Bann2.png"
          alt=""
          className="rounded-lg shadow-lg w-full h-auto hiddenRight"
        />
      </div>
      {/* North India Info */}
      <div className="flex flex-col w-full items-center justify-center mt-8 gap-4">
        <p className="text-4xl font-medium w-[90%] sm:w-[75%] lg:w-[25%] xl:w-[40%] text-center py-1">
          Territory Presence <span className="text-[#ee4d37]"> & USP's</span>{" "}
        </p>
        <p className="w-[90%] sm:w-[75%] lg:w-[45%] text-center hiddenblur text-sm sm:text-base">
          Available throughout{" "}
          <span className="text-[#ee4d37]">North India</span>, serving over{" "}
          <span className="text-[#ee4d37]">50 million people</span> and present
          in more than <span className="text-[#ee4d37]">1,900 outlets</span>{" "}
          nationwide
        </p>
      </div>

      {/* India Map */}
      <div className="flex flex-col gap-8 w-full items-center justify-evenly mt-10 sm:flex-row">
        <div className="items-center gap-4 flex-row flex sm:hidden">
          {/* <img src="/Premium.jpg" alt="Amvi Furniture" /> */}
          <img src="/Since.jpg" alt="" className="w-16 h-16 rounded-full" />
          <img src="/PriceLow.png" alt="" className="w-16 h-16" />
          <img
            src="/Premium.jpg"
            alt="Amvi Furniture"
            className="rounded-full w-16 h-16"
          />
          <img src="/image 40.png" alt="" className="w-16 h-16" />
        </div>
        <div className="items-center gap-10 flex-row sm:flex hidden">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/Premium.jpg"
              alt="Amvi Furniture"
              className="rounded-full w-20 h-20"
            />
            <p className="text-sm text-center">
            Uncompromising Quality,
             <br />
             Premium Excellence
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/image 40.png" alt="" />
            <p className="text-sm text-center">
              Recycle and Reuse <br />
              for a Sustainable Tomorrow
            </p>
          </div>
        </div>
        <img
          src="/IndiaMap.png"
          alt="India Map"
          className="max-w-[800px] w-full lg:w-[40%] rounded-lg"
        />
        <div className="items-center gap-10 flex-row sm:flex hidden">
          {/* <img src="/Premium.jpg" alt="Amvi Furniture" /> */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/Since.jpg" alt="" className="w-24 h-24 rounded-full" />
            <p className="text-sm text-center">
              Manufacturing with
              <br />
              Excellence Since 2008
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/PriceLow.png" alt="" className="w-24 h-24" />
            <p className="text-sm text-center">
              Priced Lower,
              <br />
              Quality Higher
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 mb-5">
        <ClientTestimonials />
      </div>

      {/* Contact Section */}
      <div className="mt-[-50px] sm:mt-[-100px]">
        <ContactPage />
      </div>
    </div>
  );
};

export default LandingPage;
