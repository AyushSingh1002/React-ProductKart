import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
export const useProductsStore = create((set, get) => ({
    allProducts: [],

    getAllProducts: async () => {
        try {
            const { data } = await axiosInstance.get("/");
            console.log("Fetched products:", data); // Log fetched data
            set({ allProducts: data }); // Update the state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },
    createProduct: async (products) => {
        try {
            const { data } = await axiosInstance.post("/", products);
            toast.success("Product created successfully");
        } catch (error) {
            console.error("Error creating product:", error);
            
        }
    },
    removeProduct: async (id) => {
        try {
            const { allProducts } = get();
            const product = allProducts.filter((product) => product._id !== id);
            set({ allProducts: product})
            const res = await axiosInstance.delete(`/${id}`);
            toast.success("Product deleted successfully");
        } catch (error) {
            console.error("Error removing product:", error);
            
        }
    },
    editProduct: async (id, productData) => {
        try {
          const { allProducts } = get(); // Get the current state
          console.log("Current products:", allProducts); // Log current state
      
          const res = await axiosInstance.put(`/${id}`, productData); // API call
          console.log("Edited product:", res.data); // Log updated product
      
          // Update the state
            set({allProducts : allProducts.map((product) => {
                if(product._id === id) {
                    return {
                        ...product,
                        ...productData
                    }
                }
                return product
            })})
          
      
          toast.success("Product edited successfully");
        } catch (error) {
          console.error("Error editing product:", error);
          toast.error("Failed to edit product");
        }
      },
      }));
