import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../app/ProductSlice";

const UseCartProduct = (productData) => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.product.cartData);

  const id = productData?.id;

  const isProductInCart = id ? cartData[id] : false;

  function handleCartProduct() {
    if (!id) return;

    if (isProductInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart(productData));
    }
  }

  return { handleCartProduct, isProductInCart };
};

export default UseCartProduct;