import React, { useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min=h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[490px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY   "} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="First name"
            id=""
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="Last name"
            id=""
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="email"
          name=""
          id=""
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="text"
          name=""
          id=""
          placeholder="Address"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="City"
            id=""
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="State"
            id=""
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="Zipcode"
            id=""
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            name=""
            placeholder="Country"
            id=""
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="number"
          name=""
          placeholder="Phone "
          id=""
        />
      </div>
      {/*  */}
      <div className="mt-8 min-w-80">
        <CartTotal />
      </div>

      <div className="mt-12">
        <Title text1={"Payment"} text2={"Method"} />
        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="flex items-center gap-3 border px-2 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/order")}
              className="bg-black text-white px-16 py-3 text-sm "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
