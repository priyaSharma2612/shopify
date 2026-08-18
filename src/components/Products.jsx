import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getProductsByCategory } from "../api/productApi";
import ProductCard from "./ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsByCategory(category);
        console.log(response);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);
  return (
    <div>
 <div className="lg:mx-12 md:mx-8 mx-8 mb-10 mt-5">
      <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
        Categories {">"}
        <span className="text-sm font-bold md:text-2xl text-gray-900 capitalize"> {category}</span>
      </div>

              {/* Product count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              {products.length}
            </span>{" "}
            products found
          </p>
        </div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4  ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
      <Footer/>

    </div>
   
  );
};

export default Products;
