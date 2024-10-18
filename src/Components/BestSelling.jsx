import { useEffect, useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import Button from "./Button";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const [thisMonth, setThisMonth] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchThisMonthProduct = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=4&skip=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setThisMonth(data.products); // This now holds the array of products
      } catch (error) {
        setError(error.message);
      }
    };

    fetchThisMonthProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!thisMonth || thisMonth.length === 0) {
    return (
      <div className=" h-screen items-center justify-center flex">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary2 text-xl border-l-[20px] rounded-md border-l-secondary2 p-1">
            This Month
          </h1>
          <span className="text-2xl md:text-4xl whitespace-nowrap font-semibold text-text2">
            Best Selling Products
          </span>
        </div>
        <div>
          <Button width={100}>View All</Button>
        </div>
      </div>

      {/* Render products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {thisMonth.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

function Product({ product }) {
  return (
    <Link to={`/product/${product?.id}`}>
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

          {/* Shopping Cart Icon */}
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
            {(
              (product.price * (100 + product.discountPercentage)) /
              100
            ).toFixed(2)}
          </span>
        </div>
        <StarRating />
      </div>
    </Link>
  );
}
