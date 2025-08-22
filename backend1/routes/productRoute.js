import express from "express";
import { listProducts, addProduct, removeProduct, singleProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// Add product (multiple images)
productRouter.post(
  "/add",
  adminAuth,
  // upload.fields([
  //   { name: "image1", maxCount: 1 },
  //   { name: "image2", maxCount: 1 },
  //   { name: "image3", maxCount: 1 },
  //   { name: "image4", maxCount: 1 },
  // ]),
   upload.array("images", 4),
  addProduct
);

// Remove product (no file upload needed)
productRouter.post("/remove", adminAuth, removeProduct);

// Single product details (no file upload needed)
productRouter.post("/single", singleProduct);

// List all products (no file upload needed)
productRouter.get("/list", listProducts);

export default productRouter;
