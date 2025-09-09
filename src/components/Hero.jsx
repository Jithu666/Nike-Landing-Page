import React from "react";
import logo from "../assets/shoe_image.svg";
import flipkartLogo from "../assets/flipkart.svg";
import amazonLogo from "../assets/amazon.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center ml-28 w-4/5">
      <div className="pl-10 w-1/2 space-x-2 mt-6">
        <h1 className="text-6xl font-extrabold mb-12">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-stretch-75% font-medium pl-2 pr-20">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <button className="bg-red-700 text-white text-xl font-medium ml-2 mt-6 px-4 py-1 space-x-5">
          Shop Now
        </button>
        <button className="bg-white text-black border text-xl font-medium ml-8 mt-6 px-4 py-1 space-x-5">
          Category
        </button>
        <p className="ml-2 mt-4">Also Available On </p>
        {/* E-commerce icons */}
        <div className="flex items-center ml-2 mt-4 space-x-4">
          <img src={flipkartLogo} alt="" />
          <img src={amazonLogo} alt="" />
        </div>
      </div>
      {/* Image Container */}
      <div className="flex flex-col mt-0 p-2 h-max">
        <div className="mt-6"></div>
        <img src={logo} alt="" className="w-xl h-max" />
      </div>
    </div>
  );
};

export default Hero;
