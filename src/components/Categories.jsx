import React, { useEffect, useState } from "react";
import { getProductCategories } from "../api/productApi";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getProductCategories(50, 0);
        setCategories(result);
      } catch (error) {
        console.error("Error Fetching Categories:", error);
      }
    };

    fetchCategories();
  }, []);

return (
  <div className="min-h-[calc(100vh-72px)] flex flex-col">
    <div className="flex-1">
      <div className="lg:mx-12 md:mx-10 mx-8">
        <p className="p-4 text-xl">Categories</p>

        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-5">
          {categories.map((category) => (
            <div key={category.slug} className="bg-gray-100 rounded-sm p-4">
              <p>{category.name}</p>
              <button onClick={()=>navigate(`/products/${category.slug}`)} className="text-blue-500 hover:underline cursor-pointer">
                VIEW PRODUCTS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
};

export default Categories;
