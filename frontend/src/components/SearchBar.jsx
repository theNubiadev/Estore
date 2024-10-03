import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { SearchIcon, XIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-stretch justify-center border border-gray-400 px-5 py-2 mx-5 rounded-full w-3/4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="w-4 " />
      </div>
      <XIcon
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}

export default SearchBar;
