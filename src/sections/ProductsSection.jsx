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
      <div className="flex flex-col w-full px-1 sm:px-9 gap-10">
        <img
          src="/banners/Banner.png"
          alt=""
          className="rounded-lg shadow-lg"
        />
        {/* <img src="/Demo.png" alt="" className="rounded-lg shadow-lg"/> */}
      </div>
      <div className="mt-8 mb-5">
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default ProductsSection;
