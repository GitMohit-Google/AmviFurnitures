import React from "react";

const AboutUs = () => {
  return (
    <div className="overflow-auto p-5 px-8 items-center">

      {/* About Us Heading Section */}
      <div className="flex w-full items-center justify-between mt-2 flex-row pr-56 pl-24 p-2 gap-4">
        <div className="flex flex-col gap-4 w-full items-start justify-center">
          <p className="text-6xl font-bold">
            About <span className="text-[#ee3d47]">AMVI FURNITURE</span>
          </p>
          <p className="text-xl w-full">
            We’re on a mission to start a conversation with you and your
            customers in this fast connected world. Let’s discover, build and
            grow your digital business.
          </p>
          <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd]">
            Book a Free Consultation
          </button>
        </div>
        <img src="banners/About.png" alt="" className="rounded-lg w-96 h-96" />
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
          <p className="text-6xl font-bold">Our Mission </p>
          <p className="text-xl w-full">
            Our mission is to provide our client what they need! We are a
            dynamic team of creative people. No need to waste time and money on
            different agencies that inclusively focus on various aspects of your
            business because at BrandCurb, we’ve got everything you need—and so
            much more.
          </p>
          <p className="text-xl w-full">
            BrandCurb houses professionals who will closely work with you as you
            effectively, efficiently, and sustainably race towards achieving
            your company’s growth, at a reasonable cost for your budding
            venture. So it’s worry-free, hassle-free, and affordable!
          </p>
          <button className="p-3 bg-[#ee4d37] rounded-full text-white px-5 hover:bg-[#ee4c37dd]">
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Why Choose US */}
      <div className="flex flex-row w-full items-center justify-evenly my-10">
        <div className="flex flex-col bg-white items-center justify-center py-16 px-10 w-[23%] rounded-md h-auto gap-3">
          <p className="text-3xl font-bold text-center">MUTUAL CONTRACTS</p>
          <p className="text-center">Our support teams are available to you through various digital channels at your earliest convenience---no telemarketers or sales reps from us. Just our friendly, neighborhood BrandCurb support specialists ready and able to give guidance and help where and when you want it.</p>
        </div>
        <div className="flex flex-col items-center gap-3 w-[35%]">
          <p className="p-1 bg-white shadow-2xl font-bold rounded-md px-3 text-gray-700">YOUR PARTNER IN SUCCESS</p>
          <p className="text-6xl font-bold">Why AMVI <span className="text-[#ee4d37]">?</span></p>
          <p className="w-full text-center text-gray-600">At BrandCurb, we believe that our clients' success is our success. That's why we are committed to providing exceptional service and customized solutions that meet the unique needs of each business we work with. We take a collaborative approach to every project, working closely with our clients to understand their goals and challenges. Our team of experts has the experience, knowledge, and creativity to deliver innovative marketing solutions that drive results. When you choose BrandCurb, you can be confident that you have a partner who is dedicated to your success.</p>
        </div>
        <div className="flex flex-col bg-[#ee4d37] items-center justify-center py-16 px-10 w-[23%] rounded-md text-white h-auto gap-3">
        <p className="text-3xl font-bold text-center">ECONOMICAL, EFFICIENT</p>
        <p className="text-center">Sure you can find a cheaper freelance service, but why not go straight to working with a team of professionals, who are experts in their respective fields? Anybody can make content for your website, but with BrandCurb, you get POP and BUMP-UP, hassle-free!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
