import React from "react";
import Cards from "../components/Cards";
import ClientStats from "./ClientStats";

const ProductsSection = () => {
  return (
    <div className="flex w-full items-center py-3 flex-col">
      <div className="flex w-full items-center justify-center text-5xl p-3">
        <p className="w-[750px] text-center font-medium" >
          Quality and Guaranteed Products Here
        </p>
      </div>
      <Cards />
      <div className="flex flex-col w-full px-9 gap-10">
        <img src="/banners/Banner.png" alt="" className="rounded-lg shadow-lg"/>
        {/* <img src="/Demo.png" alt="" className="rounded-lg shadow-lg"/> */}
      </div>
      <ClientStats/>
    </div>
  );
};

export default ProductsSection;
