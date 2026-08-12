import React from "react";
import { Rating } from "@smastrom/react-rating";
import { HiOutlineShoppingCart, HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductDetailCard = ({ product }) => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity,addToWishlist } = useCart();

  return (
    <div className="lg:flex justify-around p-10 ">
      <div>
        <img
          className="w-80 h-80 object-cover"
          src={product.thumbnail}
          alt=""
        />
      </div>

      <div>
        <h2 className="text-2xl">{product.title}</h2>
        <div className="flex gap-1 text-xl">
          <Rating style={{ maxWidth: 60 }} value={product.rating} readOnly />
          <h2 className="text-gray-600 font-semibold">{product.rating}</h2>
        </div>
        <h2 className="font-medium text-blue-500 text-xl"> $12.99</h2>
        <div className="flex gap-1">
          <h4 className="mr-2 text-sm line-through opacity-70 ">
            ${product.price}
          </h4>
          <h4 className="text-sm font-bold">-{product.discountPercentage}%</h4>
        </div>
        <div className="flex gap-1">
          <h2 className="pr-2 text-lg font-bold">Brand</h2>
          <h4 className="text-lg ">{product.brand}</h4>
        </div>

        <div className="flex gap-1">
          <h2 className="pr-2 text-lg font-bold">Category</h2>
          <h4 className="text-lg ">{product.category}</h4>
        </div>
        <div className="flex gap-1">
          <h2 className="pr-2 text-lg font-bold">Stock</h2>
          <h4 className="text-lg ">{product.stock}</h4>
        </div>

        <div className="font-bold text-lg mt-2">About the product</div>
        <p className="w-[450px] leading-5">
          {product.description}It is important to take care of the patient, to
          be followed by the patient, but it will happen at such a time that
          there is a lot of work and pain. For to come to the smallest detail,
          no one should practice any kind of work unless he derives some benefit
          from it. Do not be angry with the pain in the reprimand in the
          pleasure he wants to be a hair from the pain in the hope that there is
          no breeding. Unless they are blinded by lust, they do not come forth;
          they are in fault who abandon their duties and soften their hearts,
          that is, their labors.
        </p>

        <div className="flex gap-1 items-center mt-3">
          <button
            onClick={() => addToCart(product)}
            className="w-14 hover:bg-pink-700 bg-pink-500 text-white rounded-sm py-2 px-4"
          >
            <HiOutlineShoppingCart size={16} />
          </button>
          <button className="w-14 hover:bg-blue-700 bg-blue-500 text-white rounded-sm py-2 px-4">
            <HiOutlineShoppingBag size={16} />
          </button>
          <button onClick={()=>addToWishlist(product)} className="w-14 hover:bg-yellow-700 bg-yellow-500 text-white rounded-sm py-2 px-4">
            <FiHeart size={16} />
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold my-5">Reviews</h2>

        {product.reviews?.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index}>
              <h3 className="font-bold">{review.reviewerName}</h3>

              <div className="flex items-center gap-2 ">
                <Rating
                  style={{ maxWidth: 50 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.rating}</p>
              </div>

              <p className="mb-5 text-gray-600 w-96">
                {/* I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money. */}
                {review.comment} {review.comment} {review.comment}{" "}
                {review.comment}
              </p>
            </div>
          ))
        ) : (
          <p>No Reviews Available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailCard;
