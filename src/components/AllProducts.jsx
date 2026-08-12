import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "./ProductCard";
import Footer from "../components/Footer";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 20;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(limit, skip);
        setProducts((prevProducts) => [...prevProducts, ...response.products]);
        setTotalProducts(response.total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [skip]);

  const loadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  return (
    <div >
      {products.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 lg:mx-12 md:mx-8 mx-2 mb-10">
            {products.map((product) => (
              <ProductCard key={product.id + 1 } product={product} />
            ))}
          </div>

       {products.length < totalProducts && (
  <div className="flex justify-center items-center mt-8">
    <button
      onClick={loadMore}
      className="px-4 py-2 rounded-md border hover:shadow mb-4"
    >
      View More
    </button>
  </div>
)}
        </>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl"></p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AllProducts;
