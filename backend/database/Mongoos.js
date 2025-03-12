import mongoose from "mongoose";

const connectDB = async (url) => {
    mongoose.connect(url, {
    }).then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err))
};

export {connectDB};