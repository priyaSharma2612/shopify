import React from "react";
import { Rating } from "@smastrom/react-rating";
import {
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductDetailCard = ({ product }) => {
  const { addToCart, addToWishlist } = useCart();

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10">

        {/* Product Image */}
        <div className="bg-gray-50 rounded-2xl min-h-[400px] flex items-center justify-center relative overflow-hidden">

          <span className="absolute top-5 left-5 bg-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
            -{Math.round(product.discountPercentage)}%
          </span>

          <img
            className="w-[350px] h-[350px] object-contain transition-transform duration-500 hover:scale-110"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <Rating
              style={{ maxWidth: 90 }}
              value={product.rating}
              readOnly
            />

            <span className="font-semibold text-gray-600">
              {product.rating}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-5">
            <span className="text-3xl font-extrabold text-gray-900">
              ${product.price}
            </span>

            <span className="text-gray-400 line-through">
              ${originalPrice}
            </span>

            <span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-full text-xs font-bold">
              SAVE {Math.round(product.discountPercentage)}%
            </span>
          </div>

          {/* Product Info */}
          <div className="grid grid-cols-2 gap-3 mt-6">

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase">
                Brand
              </p>
              <p className="font-bold text-gray-900 mt-1">
                {product.brand || "No brand"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase">
                Stock
              </p>
              <p className="font-bold text-green-600 mt-1">
                {product.stock} available
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              About this product
            </h2>

            <p className="text-gray-500 leading-7">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-7">

            <button
              onClick={() => addToCart(product)}
              className="
                flex-1 min-w-[150px]
                bg-blue-600
                text-white
                py-3
                px-6
                rounded-xl
                font-semibold
                flex items-center justify-center gap-2
                hover:bg-blue-700
                hover:-translate-y-0.5
                shadow-lg shadow-blue-100
                transition-all
              "
            >
              <HiOutlineShoppingCart size={21} />
              Add to Cart
            </button>

            <button
              className="
                bg-gray-900
                text-white
                px-5
                rounded-xl
                hover:bg-gray-800
                transition
              "
            >
              <HiOutlineShoppingBag size={21} />
            </button>

            <button
              onClick={() => addToWishlist(product)}
              className="
                bg-pink-50
                text-pink-500
                px-5
                rounded-xl
                hover:bg-pink-100
                transition
              "
            >
              <FiHeart size={21} />
            </button>

          </div>

        </div>
      </div>

      {/* Reviews */}
      <div className="border-t border-gray-100 p-6 md:p-10">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Customer Reviews
          </h2>

          <span className="text-sm text-gray-500">
            {product.reviews?.length || 0} reviews
          </span>
        </div>

        {product.reviews?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="
                  bg-gray-50
                  rounded-2xl
                  p-5
                  border border-gray-100
                "
              >
                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-gray-900">
                    {review.reviewerName}
                  </h3>

                  <span className="text-xs text-gray-400">
                    Verified
                  </span>

                </div>

                <div className="flex items-center gap-2 mt-2">
                  <Rating
                    style={{ maxWidth: 65 }}
                    value={review.rating}
                    readOnly
                  />

                  <span className="text-sm font-semibold text-gray-600">
                    {review.rating}
                  </span>
                </div>

                <p className="mt-3 text-gray-600 leading-6">
                  {review.comment}
                </p>
              </div>
            ))}

          </div>
        ) : (
          <p className="text-gray-500">
            No reviews available.
          </p>
        )}

      </div>

    </div>
  );
};

export default ProductDetailCard;
