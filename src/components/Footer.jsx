import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { products } from "../constants/productData";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-[#f4f4f4] flex flex-row p-10 px-20 justify-evenly items-start">
        <div className="flex flex-col gap-3">
          <img src="/ambi logo.png" alt="" className="w-40 h-[80px]" />
          <p className="text-gray-600 w-56">
            <span className="text-[#ee4d37]">AMVI India Limited </span>
            {`(leading plastic furniture manufacturer)`}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700">More To Explore</p>
          <p>Home</p>
          <p>About Us</p>
          <p>Blogs</p>
          <p>Resources</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700">Chairs</p>
          {products.slice(0, 5).map((product, index) => {
            return <p>{product.title}</p>;
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700">Others</p>
          {products.slice(6, 10).map((product, index) => {
            return <p>{product.title}</p>;
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700">Support</p>
          <p>Contact Us</p>
          <div className="flex flex-col items-start justify-center mt-5">
            <p className="text-xl text-[#ee4d37]">Address</p>
            <p className="w-72">
              Khasra No. 682 Behind HLM College Meerut Road Industrial Area,
              Duhai, Ghaziabad, Uttar Pradesh 201003
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mt-5">
            <p className="text-xl text-[#ee4d37]">Contact</p>
            <p className="w-72">
            Mobile : (+91-7838257909)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] flex px-20 pb-8">
        <div className="bg-gray-300 h-0.5 w-full"></div>
      </div>
      <div className="flex w-full flex-row justify-center items-center bg-[#f4f4f4] pb-6 text-2xl gap-3">
        <FaFacebook/>
        <FaInstagram/>
        <FaLinkedin/>
      </div>

      {/* Foot */}
      <div className="w-full h-full bg-[#2E2E2E] p-2 flex justify-between items-center">
        <p className="text-white w-full flex justify-end items-center">
          Powered By <span className="text-[#ee4d37]"> IT Sagar Solutions</span>
        </p>
        <div className="flex flex-row w-[70%] justify-end items-center gap-5 p-1">
          <RiVisaLine className="text-white text-xl" />
          <FaPaypal className="text-white text-xl" />
          <SiMastercard className="text-white text-xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
