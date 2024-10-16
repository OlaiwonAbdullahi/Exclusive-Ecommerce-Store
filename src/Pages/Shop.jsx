import { useEffect, useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiShop, CiSliderHorizontal } from "react-icons/ci";

import Button from "../Components/Button";
import StarRating from "../Components/StarRating";
import Categories from "../Components/Categories";

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products${
            categories ? `/category/${categories}` : ""
          }`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setShop(data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAllProducts();
  }, [categories]); // Fetch products whenever the categories change

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!shop.length) {
    return (
      <div className=" h-screen items-center justify-center flex">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-8 mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary2 text-xl border-l-[20px] rounded-md border-l-secondary2 p-1 flex items-center">
            <CiShop /> Shop
          </h1>
          <span className="text-2xl md:text-4xl whitespace-nowrap font-semibold text-text2">
            Explore Our Products
          </span>
        </div>

        <div className="flex md:gap-4 gap-2">
          <button className="pb-10">
            <CiSliderHorizontal className="md:h-10 md:w-10 h-5 w-5 text-text2" />
          </button>
          <Button width={80}>Go to Cart</Button>
        </div>
      </div>

      <div className="flex justify-center">
        <Categories setCategories={setCategories} categories={categories} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {shop.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

function Product({ product }) {
  return (
    <div className="relative product bg-white rounded-lg shadow-md p-4 flex flex-col w-full max-w-[250px] mx-auto">
      <div className="relative bg-secondary rounded-md">
        <img
          src={product.thumbnail || "placeholder-image-url.jpg"}
          alt={product.title}
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-2 left-2 bg-secondary2 text-text text-xs w-10 rounded-sm flex items-center justify-center">
          -{Math.round(product.discountPercentage)}%
        </div>

        <div className="absolute top-2 right-2 bg-text rounded-full p-1">
          <PiShoppingCartThin className="h-6 w-6 text-secondary2" />
        </div>
      </div>

      <p className="font-medium mt-2">{product.title}</p>
      <div className="flex gap-3 mt-1">
        <span className="text-secondary2 font-semibold">
          ${product.price.toLocaleString()}
        </span>
        <span className="text-text1 line-through">
          $
          {((product.price * (100 + product.discountPercentage)) / 100).toFixed(
            2
          )}
        </span>
      </div>
      <StarRating />
    </div>
  );
}
