import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { getProducts } from "../api/productApi";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
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
      <h2 className="text-4xl font-semibold font-sans  text-black">
        Trending Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
