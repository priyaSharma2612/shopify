import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductCategories, getProductsByCategory } from "../api/productApi";
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
 <div className="lg:mx-12 md:mx-8 mx-2 mb-10">
      <div className=" text-lg mt-2">
        Categories {">"}
        <span className="font-bold "> {category}</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 ">
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
