import React from "react";
import Cards from "../components/Cards";
import ClientStats from "./ClientStats";
import ClientTestimonials from "../components/ClientTestimonial";

const ProductsSection = () => {
  return (
    <div className="flex w-full items-center py-3 flex-col">
      <div className="flex w-full items-center justify-center text-5xl p-3">
        <p className="w-[750px] text-center font-medium hiddenDown">
          Quality and <span className="text-[#ee4d37]">Guaranteed</span>{" "}
          Products Here
        </p>
      </div>
      <Cards />
      {/* <div className="flex-col w-full px-1 sm:px-5 gap-10 mt-12 hidden sm:flex">
        <img
          src="/banners/Bannerr.png"
          alt=""
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div> */}
    </div>
  );
};

export default ProductsSection;
