import { Product } from "../models/product.model.js";

const createProduct = async (req,res) => {
    try {
        const {name, price, imageUrl , category} = req.body;
        if(!name || !price || !imageUrl || !category) {
            return res.status(400).json({message: "All fields are required"})
        }
        const product = new Product({
            name,
            price,
            imageUrl,
            category
        })
        await product.save();
        res.status(201).json({message: "Product created successfully"})
    } catch (error) {
        console.log("something went wrong in create product controller", error)
    }
}
const getProducts = async (req,res) => {
    try {
        const allProducts = await Product.find({})
        res.status(200).json(allProducts)
    } catch (error) {
        console.log("something went wrong in get products controller", error)
        
    }
}
const removeProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        if(!productId){
            return res.status(400).json({message: "Product id is required"})
        }
        const selectedProduct = await Product.findByIdAndDelete(productId)
        res.status(201).json({message: "prodduct deleted successfully"})
    } catch (error) {
        console.log("something went wrong in remove product controller", error)
        
    }
}
const editProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const {name, price, imageUrl, category} = req.body;
        if(!productId){
            return res.status(400).json({message: "Product id is required"})
        }
        const selectedProduct = await Product.findByIdAndUpdate(productId, {
            name,
            price,
            imageUrl,
            category
        })
        res.status(201).json({message: selectedProduct})
    } catch (error) {
        console.log("something went wrong in edit product controller", error)
        
    }
}
export {createProduct, getProducts, removeProduct, editProduct};