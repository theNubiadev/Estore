import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { X } from "lucide-react";


function List({ token }) {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl
        + "/api/v1/product/list");
      // console.log(response.data);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl
        + '/api/v1/product/remove',
        { id },
        { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div>
      <p className="mb-2">All Products List</p>

      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        { /*  Product List */}
        {
          list.map((product, index) => (
            <div key={index}  className=" grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center products-center bg-gray-100 gap-2 py-1 px-2 border text-sm">
              <picture>
                <img src={`${product.images[0]}`} alt={product.name} />
              </picture>
              <p>{product.name}</p>
              <p className="-mr-12">{product.category}</p>
              <p>{currency}{product.price}</p>
              <X onClick={() => removeProduct(product._id)}
                className="text-right md:text-center cursor-pointer hover:text-red-500 text-lg" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List;
