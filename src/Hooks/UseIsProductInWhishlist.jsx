import { useSelector } from "react-redux";
import React from "react";

const UseIsProductInWishlist = (id) => {
  const wishlistData = useSelector((store) => store.product.wishlistData);
  return wishlistData[id] ? true : false;
};

export default UseIsProductInWishlist;