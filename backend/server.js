import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./database/Mongoos.js"
import {ProductRouter} from "./routes/product.routes.js"
import cors from "cors"


dotenv.config()
const port = process.env.port || 3000

const app = express()
app.use(cors({ origin: "http://localhost:5173", credentials: true}));


app.use(express.json())
app.use("/api/products", ProductRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connectDB(process.env.MONGO_URI)
})