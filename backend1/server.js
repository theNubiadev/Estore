// // nubia.devPassword

import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App config

const app = express();
const port = process.env.PORT || 4001;
connectDB() 
connectCloudinary()


// MIDDLEWARES
app.use(express.json());
app.use(cors());


// make "uploads" folder publicly accessible
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Api endpoints
app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)

app.get("/", (req, res) => {
  res.send("API Working🌑🚀👩🏿‍🚀🌙 ");
});
app.listen(port, () => console.log("Server started on PORT " + port));