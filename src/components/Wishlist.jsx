import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

const Wishlist = () => {
  const { wishlist,removeFromWishlist } = useCart();

    if (wishlist.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-2xl font-semibold text-gray">
          Your Wishlist is Empty
        </p>

        <p className="mt-2 text-gray-500">
          Add some products to your wishlist to see them here.
        </p>
      </div>
    );
  }


  return (
     <div className="lg:mx-12 md:mx-8 mx-2 mb-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
      {wishlist.map((item) => (
        <div key={item.id} className="relative">

            
          <ProductCard product={item} />

          <button
            onClick={() => removeFromWishlist(item.id)}
            className="absolute top-2 right-2  w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white shadow-md active:scale-95"
            title="Remove from wishlist"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;