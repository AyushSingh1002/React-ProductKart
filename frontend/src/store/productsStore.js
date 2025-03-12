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
            const { allProducts } = get();
            const res = await axiosInstance.put(`/${id}`, productData)
            const updatedProducts = allProducts.map((product) =>
                allProducts._id === id ? res.data : product
              );
            set({ allProducts : updatedProducts })
            toast.success("Product edited successfully");
        } catch (error) {
            console.error("Error editing product:", error);
            
        }
    }
    
}));
