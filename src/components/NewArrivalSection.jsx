import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "./ProductCard";

const NewArrivalSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts(8, 8);
        setProducts(result.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
          fetchProducts();

  },[]);

  return ( <div className="lg:mx-12 md:mx-8 mx-2 mb-10">
      <h2 className="text-4xl font-semibold font-sans  text-black">
        New Arrivals
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
