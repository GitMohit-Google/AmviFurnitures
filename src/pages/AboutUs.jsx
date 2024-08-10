import React from "react";
import IndiaMap from "../components/Maps";

const AboutUs = () => {
  return (
    <div className="overflow-auto p-5 px-8 items-center">
      {/* About Us Heading Section */}
      <div className="flex w-full items-center justify-between mt-2 flex-row pr-56 pl-24 p-2 pb-10 gap-4">
        <div className="flex flex-col gap-4 w-full items-start justify-center">
          <p className="text-6xl font-bold">
            About <span className="text-[#ee3d47]">AMVI FURNITURE</span>
          </p>
          <p className="text-xl w-full">
            AMVI stands at the forefront of the molded furniture industry
            through its prestigious AMVI FURNITURE brand. Renowned for its
            commitment to excellence, AMVI offers an unparalleled selection of
            furniture products, distinguished by a comprehensive range that
            caters to diverse needs. Select items come with a three-year
            guarantee, underscoring our confidence in the durability and quality
            of our offerings
          </p>
          <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd]">
            Connect Now
          </button>
        </div>
        <img
          src="banners/About.png"
          alt=""
          className="rounded-lg w-[450px] h-[450px]"
        />
      </div>

      {/* Banner */}
      <div className="flex w-full items-center justify-center mt-2">
        <img src="/Banner_Style-Photoroom.png" alt="" className="rounded-lg" />
      </div>

      {/* Our Mission Section */}
      <div className="flex w-full items-center justify-between mt-2 flex-row pr-36 pl-24 p-2 gap-8">
        <img
          src="banners/OurMission-Photoroom.png"
          alt=""
          className="rounded-lg w-[450px] h-[450px]"
        />
        <div className="flex flex-col gap-4 w-full items-start justify-center my-20">
          <p className="text-6xl font-bold">Our Mission & Vision</p>
          <p className="text-xl w-full">
            To revolutionize comfort and durability in every home with
            innovative, eco-friendly plastic furniture solutions.
          </p>
          <p className="text-xl w-full">
            To be the leading provider of stylish, sustainable, and durable
            plastic furniture, enhancing everyday living with innovative design
            and environmental responsibility.
          </p>
          <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd]">
            Connect Now
          </button>
        </div>
      </div>

      {/* Why Choose US */}
      <div className="flex flex-col sm:flex-row w-full items-center justify-evenly my-10">
        <div className="flex flex-col bg-white items-center justify-center py-16 px-10 w-[23%] rounded-md h-auto gap-3">
          <p className="text-3xl font-bold text-center">MUTUAL CONTRACTS</p>
          <p className="text-center">
            Our support teams are available to you through various digital
            channels at your earliest convenience---no telemarketers or sales
            reps from us. Just our friendly, neighborhood BrandCurb support
            specialists ready and able to give guidance and help where and when
            you want it.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 w-[35%]">
          <p className="p-1 bg-white shadow-2xl font-bold rounded-md px-3 text-gray-700">
            YOUR PARTNER IN SUCCESS
          </p>
          <p className="text-6xl font-bold">
            Why AMVI <span className="text-[#ee4d37]">?</span>
          </p>
          <p className="w-full text-center text-gray-600">
            At AMVI FURNITURE, formerly known as Amul Polymer India Pvt Ltd, we
            are dedicated to establishing ourselves as leaders in the furniture
            industry by excelling in product categories, market penetration, and
            consumer engagement. Our commitment to innovation drives us to
            integrate cutting-edge technology with a compassionate approach,
            positioning us as a highly admired, cost- effective, and
            design-focused company. We aspire to significantly grow our presence
            in the market, promoting plastic furniture as a sustainable
            alternative to wooden options. By doing so, we aim to minimize
            environmental impact and offer solutions that are both
            environmentally friendly and stylish.
          </p>
        </div>
        <div className="flex flex-col bg-[#ee4d37] items-center justify-center py-16 px-10 w-[23%] rounded-md text-white h-auto gap-3">
          <p className="text-3xl font-bold text-center">
            ECONOMICAL, EFFICIENT
          </p>
          <p className="text-center">
            Sure you can find a cheaper freelance service, but why not go
            straight to working with a team of professionals, who are experts in
            their respective fields? Anybody can make content for your website,
            but with BrandCurb, you get POP and BUMP-UP, hassle-free!
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
      <p className="w-[45%] text-center">
        Available throughout <span className="text-[#ee4d37]">North India</span>, serving over <span className="text-[#ee4d37]">50 million people</span> and
        present in more than <span className="text-[#ee4d37]">1,900 outlets</span> nationwide
      </p>
      </div>
      <IndiaMap/>
    </div>
  );
};

export default AboutUs;
