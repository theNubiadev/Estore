import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// App Config

const app = express();
const port = process.env.PORT || 6000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());



// api endpoints

app.use('/api/user', userRouter)
app.get("/", (req, res) => {
  res.send("Api Working Initialized");
});

app.listen(port, () => console.log("Server started on Port :" + port));


// nubia.devPassword