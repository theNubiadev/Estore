import { UploadCloudIcon } from "lucide-react";
import { useState } from "react";
import axios from'axios'
import { backendUrl } from '../App'
import { toast } from "react-toastify";

function Add({token}) {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Full");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
// console.log("Token being sent:", token);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("images", image1);
      image2 && formData.append("images", image2);
      image3 && formData.append("images", image3);
      image4 && formData.append("images", image4);

      
      // console.log("Token being sent:", token);

      const response = await axios.post(
        backendUrl + "/api/v1/product/add",
        formData,
        {
          headers: {token}
            // Authorization: `Bearer ${token}`,   // ✅ correct header format
            // "Content-Type": "multipart/form-data",
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
        console.log(response.data.message);
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form  onSubmit={onSubmitHandler}
    className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            {/* <UploadCloudIcon className="W-20 " /> */}
            {!image1 ? (
              <UploadCloudIcon className="w-20 " />
            ) : (
              URL.createObjectURL(image1)
            )}
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              name=""
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            {!image2 ? (
              <UploadCloudIcon className="w-20" />
            ) : (
              URL.createObjectURL(image2)
            )}
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              name=""
              id="imgee2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            {!image3 ? (
              <UploadCloudIcon className="w-20" />
            ) : (
              URL.createObjectURL(image3)
            )}
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              name=""
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            {!image4 ? (
              <UploadCloudIcon className="w-20" />
            ) : (
              URL.createObjectURL(image4)
            )}
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              name=""
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write the product description"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className=" ">
          <p>Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
            name=""
            id=""
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="">
          <p>Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2"
            name=""
            id=""
          >
            <option value="Full">Full Regalia</option>
            <option value="Causual">Causaul</option>
          </select>
        </div>

        <div className="">
          <p className="mb-2 "> Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p>Product Sizes</p>
        <div className="flex gap-3 ">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={` ${
                sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={` ${
                sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={` ${
                sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2 ">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white ">
        Add
      </button>
    </form>
  );
}

export default Add;
