import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { getProducts } from "../api/productApi";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(8,0);
        setProducts(response.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="lg:mx-12 md:mx-8 sm:mx-16 mx-6 mb-10">
    <div className="flex items-end justify-between mb-6">
  <div>
    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
      What's popular
    </p>

    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Trending Products
    </h2>
  </div>

  <button
    onClick={() => navigate("/allProducts")}
    className="hidden sm:block text-blue-600 font-semibold hover:text-pink-500 transition"
  >
    View all →
  </button>
</div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
