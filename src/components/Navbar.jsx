import React, { useState } from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineSearch,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { FiHeart } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import AccountDropdown from "./AccountDropdown";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, wishlist } = useCart();
  return (
    <>
      <nav className="flex navbar-enter items-center justify-between bg-white px-5 py-4 shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl lg:text-4xl font-semibold font-sans">
          Shopify
        </h1>

        <div className="w-96 hidden lg:flex">
          <input
            className="border-2 w-full border-blue-500 px-4 py-2 rounded-l-md outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-blue-500 px-5 rounded-r-md flex items-center justify-center">
            <HiOutlineSearch size={25} className="text-white" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a className="font-bold text-lg" href="/allProducts">
            Products
          </a>
          <a className="font-bold text-lg" href="/categories">
            Categories
          </a>
          <AccountDropdown />

          <div className="relative">
            <HiOutlineShoppingCart
              size={25}
              className="cursor-pointer heart-pop"
              onClick={() => setCartOpen(true)}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        
          <div className="relative">
            <FiHeart className="cursor-pointer heart-pop" onClick={() => navigate("/wishlist")} size={25} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <HiOutlineMenu size={30} />
        </button>
      </nav>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen min-w-full  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <HiOutlineX size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <a className="font-bold text-lg" href=" /allProducts" onClick={() => setOpen(false)}>
            Products
          </a>
          <a className="font-bold text-lg" href="/categories" onClick={() => setOpen(false)}>
            Categories
          </a>
<AccountDropdown/>
<div className="flex flex-col gap-4">
  {/* Cart */}
  <div className="relative w-fit">
    <HiOutlineShoppingCart
      size={25}
      className="cursor-pointer heart-pop"
      onClick={() => {
        setCartOpen(true);
        setOpen(false);
      }}
    />

    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cart.length}
    </span>
  </div>

  {/* Wishlist */}
  <div className="relative w-fit">
    <FiHeart
      size={25}
      className="cursor-pointer heart-pop"
      onClick={() => {
        navigate("/wishlist");
        setOpen(false);
      }}
    />

    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {wishlist.length}
    </span>
  </div>
</div>
        </div>
      </div>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
