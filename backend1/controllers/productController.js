import productsModel from "../models/productModels.js";
import productModels from "../models/productModels.js";


// function to add product
const addProduct = async (req, res) => {

  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;


    // const images = req.files.map(file => `/uploads/${file.filename}`);
    // map to get the file names and prepend with /uploads/
     const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    let parsedSizes = [];
    if (sizes) {
      try {
        // if it's valid JSON like ["M","L"]
        parsedSizes = JSON.parse(sizes);
      } catch (err) {
        // fallback: handle comma separated "M,L"
        parsedSizes = sizes.split(",").map((s) => s.trim());
      }
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true",
      sizes: parsedSizes,
      images: imageUrls, // store local URLs
      date: Date.now(),
    };

    const product = new productModels(productData);
    await product.save();
    res.json({
      success: true,
      message: "Product Added",
      // product
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// function to list product
const listProducts = async (req, res) => {
  try {
    const products = await productModels.find({});
    res.json({ success: true, products });
  } catch (error) {
    ("");
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//  function to remove product
const removeProduct = async (req, res) => {
  try {
    await productModels.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//  function to single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productsModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
