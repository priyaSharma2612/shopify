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
        <h2 className="text-black font-bold md:font-semibold text-4xl md:text-6xl font-sans p-2">
          The best notebook <br /> collection 2025
        </h2>
        <h3 className="text-2xl font-semibold font-sans p-2">
          Exclusive offer <span className="text-red-600">-50%</span> off this
          week
        </h3>
        <div onClick={()=>navigate(`/products/laptops`)} className="bg-white w-[200px] h-[35px] rounded-md text-center m-3 p-2.5 hover:bg-blue-500 hover:text-white hover:cursor-pointer">
          Grab the opportunity now
        </div>
      </div>

      <div>
        <img
          className="object-scale-down
          "
          src="https://shopify-xrh7.onrender.com/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
