import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductDetail from "../components/ProductDetail";
import AllProducts from "../components/AllProducts";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/allProducts" element={<AllProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
