import React, { useContext } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";
import UseIsProductInWhishlist from "../Hooks/UseIsProductInWhishlist";
import UseWishlistproduct from "../Hooks/UseWishlistproduct";
import WishlistIcon from "../Icons/WhishlistIcon";


const ProductCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { title, price, discountPercentage, rating, brand, thumbnail, id } = data;
  
const {isProductInWishlist,handleWishlist}=UseWishlistproduct(data);
  const light =
    "w-[20rem] h-[70vh] bg-gray-100 relative rounded-xl flex items-center flex-col justify-start overflow-hidden p-2";

  const dark =
    "w-[20rem] h-[70vh] bg-gray-400 relative rounded-xl flex items-center flex-col justify-start overflow-hidden p-2";

  return (
    <Link to={`/products/${id}`} className={theme === "light" ? light : dark}>
      
        <div onClick={(e) => {
          // e.stopPropagation();
          e.preventDefault()
          handleWishlist();
        }}
        className="absolute right-3 top-3">
        <WishlistIcon fill={isProductInWishlist ? "red" : "#E5E4E2"} />
      </div>
        <img
          className={
            theme === "light"
              ? "h-[70%] w-full rounded-xl"
              : "h-[70%] bg-gray-300 w-full rounded-xl"
          }
          src={thumbnail}
          alt={title}
        />
          <div className="w-full">
        <p
          className={
            theme === "light"
              ? "text-xs pt-2 text-gray-400 min-h-6"
              : "text-xs pt-2 text-white min-h-6"
          }
        >
          {brand}
        </p>

        <p className="text-[15px] text-black font-bold text-center px-2">
          {title}
        </p>

        <div className="flex justify-start gap-3">
          <p className={
            theme === "light" ? "text-green-600 text-[13px]" : "text-green-200 text-[13px]"
          }>{price}$</p>

          <p className="text-red-600 line-through text-[13px]">
            {discountPercentage}%
          </p>
        </div>

        <div className="flex items-center mt-1">
          <div className={
            theme === "light" ? "bg-green-600 text-white text-xs px-2 py-[2px] rounded-md font-semibold"
            : "bg-green-400 text-black text-xs px-2 py-[2px] rounded-md font-semibold"
          }>{rating} ⭐</div>
        </div>

        <button className="w-full bg-blue-600 rounded-2xl h-8 text-center text-white mt-2">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;