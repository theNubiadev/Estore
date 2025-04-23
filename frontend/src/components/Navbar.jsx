import  { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import {
  SearchIcon,
  UserIcon,
  MenuIcon,
  ShoppingCartIcon,
  XIcon,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="  flex items-center justify-between py-5  font-medium font-poppins ">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-36 -my-10" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm font-poppins text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/store" className="flex flex-col items-center gap-1">
          <p>Store</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchIcon
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <Link to="/login">
            <UserIcon className="w-5 cursor-pointer" />
          </Link>

          <div className="group-hover:block hidden absolute  dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2   w-36 py-3 text-center bg-slate-600 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>

        
        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="w-5 min-w-5" />
          <p className="absolute right-[5px] bottom-[-5px]  w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <div>
          <MenuIcon
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>

        {/* menu  */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-96" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 ">
            <div
              onClick={() => setVisible(false)}
              className="flex cursor-pointer items-center gap-4 p-3"
            >
              <XIcon className="h-6 mt-2 rotate-180" />
              {/* <p>Back</p> */}
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/store"
            >
              Store
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
