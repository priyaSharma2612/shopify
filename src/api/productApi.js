import api from "../services/api"

export const getProducts = async(limit,skip)=>{
    try{ const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;}
    catch(error){
        console.error("Error fetching products:", error);
        return [];
    }
   
};

export const getProductCategories = async(limit,skip)=>{
    try{ const response = await api.get(`/products/categories?limit=${limit}&skip=${skip}`);
    return response.data;}
    catch(error){
        console.error("Error fetching categories:", error);
        return [];
    }
   
};

export const getProductsById = async(id)=>{
    const response = await api.get(`/products/${id}`);
    return response.data;
};

export const getProductsByCategory = async(category)=>{
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
};
