import React from "react";
import {useNavigate} from "react-router-dom";

const OfferSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className = "lg:flex lg:mx-12 md:mx-8 mx-2 ">

        <img
          className="lg:w-1/2"
          src="https://shopify-xrh7.onrender.com/banner.jpg"
          alt=""
        />
        <div className="bg-[#e3edf6] lg:w-1/2 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold mb-1">Don't miss the offer!</p>
          <p className="text-3xl font-semibold mb-3">Grab it now</p>
          <div>
            <button onClick={()=> navigate(`products/mobile-accessories`)} className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white mb-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
