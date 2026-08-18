import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById, getProductsByCategory } from "../api/productApi";
import ProductDetailCard from "./ProductDetailCard";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

// import { FaShoppingBag } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductsById(id);
        setProduct(response);
        const similar = await getProductsByCategory(response.category);

        setSimilarProducts(similar.filter((item) => item.id !== response.id));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-up delay-200  min-h-screen bg-white rounded-3xl shadow-sm border border-gray-100">
      {" "}
      <ProductDetailCard product={product} />
      <hr className=" border-gray-300 m-8 " />
      <h2 className="text-4xl font-bold m-8 animate-fade-up delay-300">
        Similar Products
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 m-8 animate-fade-up delay-500">
        {similarProducts.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
