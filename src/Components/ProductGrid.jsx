import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ThemeContext } from "../Store/ThemeProvider";
import UseProducts from "../Hooks/UseProducts";

const ProductGrid = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { productData, error, loading } = UseProducts(currentPage);

  if (loading) {
    return <ProductCardSkeleton />;
  }

  if (error) {
    return <p>...api failing</p>;
  }

  const checkedBtn = "join-item btn btn-square bg-blue-700 text-white";
  const uncheckedBtn = "join-item btn btn-square";

  const light =
    "flex justify-center items-center w-screen flex- z-10 flex-col text-white";

  const dark =
    "flex bg-gray-500 justify-center items-center w-full flex-col min-h-screen";

  return (
    <div className={theme === "light" ? light : dark}>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-6 mt-10">
        {productData.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>

      <div className="join mt-10 mb-10">
        <input
          onClick={() => setCurrentPage(1)}
          className={currentPage == 1 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="1"
        />
        <input
          onClick={() => setCurrentPage(2)}
          className={currentPage == 2 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          onClick={() => setCurrentPage(3)}
          className={currentPage == 3 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          onClick={() => setCurrentPage(4)}
          className={currentPage == 4 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>

    </div>
  );
};

export default ProductGrid;