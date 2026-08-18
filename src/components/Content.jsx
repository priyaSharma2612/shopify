import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[rgb(227,237,246)] md:flex md:justify-between md:items-center py-10 px-10 font-sans ">
      <div>
        <p className="p-2 text-xl">
          Starting At <span className="font-bold">999dt</span>
        </p>
        <h2
          data-aos="zoom-in"
          className="text-gray-900 font-extrabold text-4xl md:text-6xl leading-tight p-2"
        >
          The best notebook
          <br />
          collection <span className="text-blue-600">2025</span>
        </h2>

        <h3 className="text-2xl font-semibold p-2">
          Exclusive offer{" "}
          <span className="text-pink-500 font-extrabold">-50%</span> off this
          week
        </h3>

        <div
          data-aos="zoom-in"
          onClick={() => navigate("/products/laptops")}
          className="inline-flex items-center justify-center
  bg-blue-600 text-white
  px-10 py-3
  rounded-full
  font-semibold
  shadow-lg shadow-blue-200
  hover:bg-blue-700
  hover:-translate-y-1
  transition-all duration-300
  cursor-pointer"
        >
          Grab the opportunity
        </div>
      </div>

      <div>
        <img
          className="object-scale-down
          "
          src="https://shopify-xrh7.onrender.com/hero.png"
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default Content;
