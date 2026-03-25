import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";

const Navbar = ({ hideSearchBar = false }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const light =
    "h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around";

  const dark =
    "h-12 w-screen border-2 border-black bg-black flex items-center justify-around";

  return (
    <div className={theme === "light" ? light : dark}>
      <Link to="/" className="text-2xl text-white font-extrabold">
        Shopsy
      </Link>

      {!hideSearchBar && <SearchBar />}

      <div className="flex justify-between items-center w-40">
        <div
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          <input
            type="checkbox"
            checked={theme === "light"}
            readOnly
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
        </div>

        <Link to={`/wishlist`} className="text-xl text-white ">
          Wishlist
        </Link>
        
        <Link to={`/cart`} className="text-xl text-white">
        Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;