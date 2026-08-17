import React from "react";
import { useCart } from "../context/CartContext";
import { LuTrash2 } from "react-icons/lu";
import { useSnackbar } from "notistack";

const Cart = ({ open, onClose }) => {
  const { cart, decreaseQuantity, increaseQuantity, removeFromCart,getCartTotal, clearCart } = useCart();
  const {enqueueSnackbar} = useSnackbar();
  const handleCheckout = () => {
  if (cart.length === 0) {
    enqueueSnackbar("Your cart is empty!", {
      variant: "warning",
    });
    return;
  }

  clearCart();

  enqueueSnackbar("Order confirmed successfully!", {
    variant: "success",
  });

  onClose();
};
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50
            overflow-y-scroll
                shadow-2xl transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button
            onClick={onClose}
            className="text-5xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
            
          cart.map((item) => (
            <div key={item.id}>
              <div className="border border-gray-200 h-28  m-4">
                <div className="flex items-center justify-start gap-10 mx-6">
                  <img
                    className="w-24 h-24  object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-[12px] leading-[13px] line-clamp-2 py-1 ">{item.title}</p>
                    <p className="font-bold"> ${item.price}</p>
                    <div className="flex items-center justify-start ">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="border  text-black border-black rounded-full hover:bg-gray-100  h-5 w-5 active:scale-95  text-sm leading-none"
                      >
                        -
                      </button>

                      <span className=" text-center text-sm  font-bold text-gray-800 m-4">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="border  border-black text-black text-sm rounded-full hover:bg-gray-100 h-5 w-5 active:scale-95 leading-none "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="font-bold ml-auto">
                    ${item.price}
                    <LuTrash2 className="ml-auto" onClick={()=>removeFromCart(item.id)} size={15} color="red" />
                  </div>
                </div>
              </div>

              
            </div>
          ))
        )}

        <div className="border-t mt-4 p-6">
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold">Total</span>

    <span className="text-xl font-bold">
      ${getCartTotal().toFixed(2)}
    </span>
  </div>

  <button onClick={handleCheckout}
    className="w-full bg-black text-white py-3 mt-4 rounded-lg
               hover:bg-gray-800 active:scale-95 transition"
  >
    Checkout
  </button>
</div>
      </div>
    </>
  );
};

export default Cart;
