import React from "react";
import Home from "./Screens/Home";
import Pdp from "./Screens/Pdp";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./Store/ThemeProvider";
import ProductCategory from "./Screens/ProductCategory";
import Wishlist from "./Screens/Whishlist";
import Cart from "./Screens/Cart";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Pdp />} />
        <Route path="/category/:url" element={<ProductCategory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/wishlist"
          element={
            <React.Suspense fallback={<div>Loading the wishlist</div>}>
              <Wishlist />
            </React.Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;