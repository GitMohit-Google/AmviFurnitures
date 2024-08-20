import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClientStats from "../sections/ClientStats";
import ContactPage from "./ContactPage";
import { MdOutlineFileDownload } from "react-icons/md";

const AboutUs = () => {
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
    <div className="overflow-auto p-5 md:px-8 items-center overflowXhide">
      {/* About Us Heading Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-between mt-2 md:pr-20 lg:pr-56 md:pl-10 lg:pl-24 p-2 pb-2 gap-4 hiddenblur">
        <div className="flex flex-col gap-4 w-full items-start justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About <span className="text-[#ee3d47]">AMVI FURNITURE</span>
          </p>
          <p className="text-base md:text-lg lg:text-xl w-full">
            AMVI stands at the forefront of the molded furniture industry
            through its prestigious AMVI FURNITURE brand. Renowned for its
            commitment to excellence, AMVI offers an unparalleled selection of
            furniture products, distinguished by a comprehensive range that
            caters to diverse needs. Select items come with a three-year
            guarantee, underscoring our confidence in the durability and quality
            of our offerings.
          </p>
          <a href="/brochure.pdf" download>
            <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd] flex flex-row items-center gap-2">
              Access Product Guide <MdOutlineFileDownload className="text-xl" />
            </button>
          </a>
        </div>
        {/* <img
          src="/vision.png"
          alt="About AMVI Furniture"
          className="rounded-lg w-[300px] md:w-[400px] lg:w-[450px] h-[300px] md:h-[400px] lg:h-[450px] hidden sm:flex"
        /> */}
        <lottie-player
          src="https://lottie.host/e37c7a5a-0684-4d82-b1be-4ff9d3fcca0f/fMWXrN3bCG.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: "600px", height: "400px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>

      {/* Banner */}
      {/* <div className="w-full items-center justify-center mt-2 hidden sm:flex">
        <img
          src="/Banner_Style-Photoroom.png"
          alt="Banner"
          className="rounded-lg w-full md:w-[91%] lg:w-[90%] h-auto"
        />
      </div> */}

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-between mt-2 md:pr-10 lg:pr-36 md:pl-10 lg:pl-24 p-2 gap-8">
        {/* <img
          src="/target.png"
          alt="Our Mission"
          className="rounded-lg w-[300px] md:w-[400px] lg:w-[450px] h-[300px] md:h-[400px] lg:h-[450px]"
        /> */}
        <div className="hidden sm:flex">
        <lottie-player
          src="https://lottie.host/f1afa1dc-ecc9-46d1-8088-614c622a641f/vrhYJkFtzr.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        </div>
        <div className="flex flex-col gap-4 w-full items-start justify-center md:my-10 md:mb-20 hiddenRight">
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#ee4d37]">
            Mission
          </p>
          <p className="text-base md:text-lg lg:text-xl w-full mb-5">
            To revolutionize comfort and durability in every home with
            innovative, eco-friendly plastic furniture solutions.
          </p>
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#ee4d37]">
            Vision
          </p>
          <p className="text-base md:text-lg lg:text-xl w-full mb-5">
            To be the leading provider of stylish, sustainable, and durable
            plastic furniture, enhancing everyday living with innovative design
            and environmental responsibility.
          </p>
          {/* <a href="/brochure.pdf" download>
            <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd] flex flex-row items-center gap-2">
              Access Product Guide <MdOutlineFileDownload className="text-xl" />
            </button>
          </a> */}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-evenly my-10 gap-8 lg:gap-0">
        <div className="flex flex-col items-center justify-center py-8 px-5 md:py-12 md:px-8 lg:py-16 lg:px-10 w-full md:w-[90%] lg:w-[23%] rounded-md h-auto gap-4 order-2 lg:order-1 hiddenLeft">
          <img
            src="/AMVIOwner-Photoroom.png"
            alt="Owner"
            className="sm:w-96 h-56 w-auto"
          />
          <p className="text-2xl font-bold">Mr. Yogesh Goyal</p>
          <p className="text-lg font-semibold text-[#ee4d37]">Director/CEO</p>
        </div>
        <div className="flex flex-col items-center gap-3 w-full md:w-[90%] lg:w-[35%] text-center order-1 lg:order-2 hiddenblur">
          {/* <p className="p-1 bg-white shadow-2xl font-bold rounded-md px-3 text-gray-700">
            YOUR PARTNER IN SUCCESS
          </p> */}
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Message from <span className="text-[#ee4d37]"> Chairman ?</span>
          </p>
          <p className="w-full text-gray-600 text-sm md:text-base lg:text-lg">
            At AMVI FURNITURE, formerly known as Amul Polymer India Pvt Ltd, we
            are dedicated to establishing ourselves as leaders in the furniture
            industry by excelling in product categories, market penetration, and
            consumer engagement. Our commitment to innovation drives us to
            integrate cutting-edge technology with a compassionate approach,
            positioning us as a highly admired, cost-effective, and
            design-focused company. We aspire to significantly grow our presence
            in the market, promoting plastic furniture as a sustainable
            alternative to wooden options. By doing so, we aim to minimize
            environmental impact and offer solutions that are both
            environmentally friendly and stylish.
          </p>
        </div>
        <div className="flex flex-col bg-[#ee4d37] items-center justify-center py-8 px-5 md:py-12 md:px-8 lg:py-16 lg:px-10 w-full md:w-[90%] lg:w-[23%] rounded-md text-white h-auto gap-3 order-3 lg:order-3 hiddenRight">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
            Excellent design
          </p>
          <p className="text-center text-sm md:text-base lg:text-lg">
            We offer chairs, tables and stools in elegant designs that add a
            perfect charm to your interiors. Enjoy maximum comfort when you shop
            with us.
          </p>
        </div>
      </div>

      {/* Value for Money Section */}
      <div className="flex flex-col bg-[#2a2a2a] items-center justify-center py-8 px-5 md:py-12 md:px-8 lg:py-16 lg:px-10 lg:w-[91%] md:w-[90%] mx-auto rounded-md text-white h-auto gap-3 hiddenLeft">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Crafting Comfort, Redefining Style
        </p>
        <p className="text-center text-sm md:text-base lg:text-lg">
        Our commitment to quality and design ensures each piece is not only a visual delight but also a testament to functional excellence, enriching your everyday life with both beauty and support.
        </p>
      </div>
      <ClientStats />
      {/* Full-Width IndiaMap Image */}
      {/* <div className="flex w-full items-center justify-center mt-[50px]">
        <img
          src="/IndiaMap.png"
          alt="India Map"
          style={{
            maxWidth: "800px",
            width: "100%",
          }}
          className="w-[1/2] lg:w-[90%] rounded-lg"
        />
      </div> */}
      <ContactPage />
    </div>
  );
};

export default AboutUs;
