import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { cart, addToCart, increaseQuantity,decreaseQuantity } = useCart();
  const navigate = useNavigate();
  const cartProduct = cart.find((item) => item.id === product.id);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth animation
    });
  };
  return (
    <div>
      <div>
        <div className="border border-gray-300 w-full ">
          {" "}
          <div className="flex justify-center items-center cursor-pointer">
            <img
              onClick={() => {
                handleScrollTop();
                navigate(`/product/${product.id}`);
              }}
              className="w-[200px] h-[180px] object-contain hover:scale-110  "
              src={product.thumbnail}
              alt={product.alt}
            />
          </div>
          <hr className="w-full  border-gray-300 my-2 " />
          <div className="px-4">
            <p className="text-gray-500 text-[14px] font-medium ">
              {product.category}
            </p>
            <p
              onClick={() => navigate(`/product/${product.id}`)}
              className="text-black lg:text-lg md font-bold hover:underline cursor-pointer "
            >
              {product.title}
            </p>

            <div className="flex gap-1">
              <Rating
                style={{ maxWidth: 60 }}
                value={product.rating}
                readOnly
              />
              <p className="ml-2 text-gray-600 font-semibold ">
                {product.rating}
              </p>
            </div>
            <p className="font-medium text-blue-500 text-xl">
              ${product.price}
            </p>

            <div className="flex flex-wrap items-start justify-between pb-4">
              <div className="flex gap-2 items-center">
                <p className="line-through text-sm opacity-70">
                  ${product.price}
                </p>
                <p className="text-[14px] font-semibold text-black">
                  -{product.discountPercentage}%
                </p>
              </div>

              {cartProduct && cartProduct.quantity>0 ? (
                <div>
                  <button  onClick={() => decreaseQuantity(product.id)} className="border px-2 rounded-full hover:bg-gray-100 text-2xl h-10 w-10 active:scale-95 ">
                    -
                  </button>

                   <span className=" text-center text-lg font-semibold text-gray-800 m-4">
{cartProduct.quantity}</span>

                  <button onClick={() => increaseQuantity(product.id)}className="border px-2  rounded-full hover:bg-gray-100 text-2xl h-10 w-10 active:scale-95 ">
                    +
                  </button>
                </div>
              ) : (
<button onClick={()=> addToCart(product)} className="w-16 h-10 bg-pink-500 text-white rounded py-2 px-4 flex justify-center active:scale-95  hover:bg-blue-500 ">
                <HiOutlineShoppingCart size={20} />
              </button>              )}
              {/* <button onClick={()=> addToCart(product)} className="w-16 h-10 bg-pink-500 text-white rounded py-2 px-4 flex justify-center  hover:bg-blue-500 ">
                <HiOutlineShoppingCart size={20} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
