import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GalleryHorizontalEndIcon } from 'lucide-react';
import axios from 'axios';


export const ShopContext = createContext();

function ShopContextProvider(props) {
  const currency = "#";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error(<GalleryHorizontalEndIcon />);
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/v1/product/list')
      console.log(response.data);
      
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message)
      //  stopped at 9:28:58
    }
  }
  useEffect(() => {
    getProductData()
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
