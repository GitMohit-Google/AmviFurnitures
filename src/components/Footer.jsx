import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { products } from "../constants/productData";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-[#f4f4f4] sm:flex sm:flex-row p-10 px-20 justify-evenly items-start hidden">
        <Link to="home">
          <div className="flex flex-col gap-3">
            <img src="/ambi logo.png" alt="" className="w-40 h-[80px]" />
            <p className="text-gray-600 w-56">
              <span className="text-[#ee4d37]">AMVI India Limited <br /></span>
              {`(Amul Polymer India Pvt. Ltd.)`}
            </p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700 font-bold">More To Explore</p>
          <Link to="home">
            <p className="hover:text-[#ee4d37] hover:font-medium">Home</p>
          </Link>
          <Link to="aboutus">
            <p className="hover:text-[#ee4d37] hover:font-medium">About Us</p>
          </Link>
          <Link to="blogs">
            <p className="hover:text-[#ee4d37] hover:font-medium">Blogs</p>
          </Link>
          {/* <Link to="resources"><p>Resources</p></Link> */}
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700 font-bold">Chairs</p>
          {products.slice(0, 5).map((product, index) => {
            return (
              <Link to={product.title}>
                <p className="hover:text-[#ee4d37] hover:font-medium">{product.title}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700 font-bold">Others</p>
          {products.slice(6, 10).map((product, index) => {
            return (
              <Link to={product.title}>
                <p className="hover:text-[#ee4d37] hover:font-medium">{product.title}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-gray-700 font-bold">Support</p>
          <Link to="contactus">
            {" "}
            <p className="hover:text-[#ee4d37] hover:font-medium">Contact Us</p>
          </Link>
          <div className="flex flex-col items-start justify-center mt-5">
            <p className="text-xl text-[#ee4d37]">Address</p>
            <p className="w-72">
              <Link to="https://maps.app.goo.gl/CJEKbV21X8ADCwa19">
                Khasra No. 682 Behind HLM College Meerut Road Industrial Area,
                Duhai, Ghaziabad, Uttar Pradesh 201003
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mt-5">
            <p className="text-xl text-[#ee4d37]">Contact</p>
            <p className="w-72">Mobile : (+91 7497036847)</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] sm:flex px-20 pb-8 hidden">
        <div className="bg-gray-300 h-0.5 w-full"></div>
      </div>
      <div className="flex w-full flex-row justify-center items-center bg-[#f4f4f4] pb-6 text-2xl gap-3">
        <FaFacebook />
        <Link
          to="https://www.instagram.com/amvi_ltd?igsh=MWdjdzllZmNiZmE4bA=="
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <FaLinkedin />
      </div>

      {/* Foot */}
      <div className="w-full h-full bg-[#2E2E2E] p-2 flex justify-between items-center">
        <p className="text-white w-full flex justify-center sm:justify-end items-center gap-1 sm:text-base text-sm">
          @ 2024 <span className="text-[#ee4d37]"> Amvi India Ltd.</span>
        </p>
        <div className="sm:flex sm:flex-row hidden w-[80%] justify-end items-center gap-5 p-1">
          <RiVisaLine className="text-white text-xl" />
          <FaPaypal className="text-white text-xl" />
          <SiMastercard className="text-white text-xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
