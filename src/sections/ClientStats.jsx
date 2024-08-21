import { Box } from "@mui/material";
import React from "react";
import Slider from "react-infinite-logo-slider";

const ClientStats = () => {
  return (
    <div className="flex flex-col  xs:w-[100%] md:w-[95%] mx-[auto] my-8 px-5 p-3 gap-16 ">
      <div className="flex w-full flex-col p-3 justify-center items-center gap-1 hiddenDown">
        <p className="text-lg text-gray-500">OUR CERTIFICATIONS</p>
        <p className="text-4xl text-center">Trusted by over <span className="text-[#ee4d37]"><br />2 Cr+ clients</span></p>
        <p className="text-xl text-gray-700 text-center">
          Our clients are our top priority, and we are committed to providing
          them{" "}
        </p>
        <p className="text-xl text-gray-700 text-center">
          with the highest level of service
        </p>
      </div>
      <Box
        style={{
          boxShadow: "3px 0 3px -2px #ee4d37, -3px 0 3px -2px #ee4d37",
        }}
      >
        <Slider
          width="250px"
          duration={10}
          pauseOnHover={false}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img src="/banners/ISO-Photoroom.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/banners/Vocal-Photoroom.png"
              alt="any2"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/banners/SwachBharat-Photoroom.png"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/banners/MakeIndia-Photoroom.png"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="/banners/Girl-Photoroom.png"
              alt="any3"
              className="w-36"
            />
          </Slider.Slide>
        </Slider>
      </Box>
    </div>
  );
};

export default ClientStats;
