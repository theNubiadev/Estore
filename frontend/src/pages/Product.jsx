import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { StarHalfIcon, StarIcon } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (products?.length) {
      const found = products.find((item) => item._id === productId);
      if (found) {
        setProductData(found);
        setImage(found.images?.[0] || ""); // pick first image
      }
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-50 text-center">Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* products data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal">
            {productData.images?.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={productData.name}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={productData.name} />
          </div>
        </div>

        {/* info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <StarIcon className="w-5 text-orange-500" />
            <StarIcon className="w-5 text-orange-500" />
            <StarIcon className="w-5 text-orange-500" />
            <StarIcon className="w-5 text-orange-500" />
            <StarHalfIcon className="w-2 text-orange-500" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Sizes (render only if available) */}
          {productData.sizes?.length > 0 && (
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    className={`border px-2 bg-gray-100 py-2 
                    ${item === size ? "border-orange-500 " : ""}`}
                    key={index}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Cash return policy is within 7 days</p>
          </div>
        </div>
      </div>

      {/* review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 px-2 text-sm text-gray-500">
          <p>No review is available here.</p>
          <p>
            An ecommerce website is an online platform that displays products or
            services for sale.
          </p>
        </div>
      </div>

      {/* related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
}

export default Product;
