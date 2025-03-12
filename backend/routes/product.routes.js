import express from "express"
import { createProduct, removeProduct, editProduct, getProducts} from "../controller/products.js"

const router = express.Router()

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", removeProduct);
router.put("/:id", editProduct);

const ProductRouter = router;

export {ProductRouter};