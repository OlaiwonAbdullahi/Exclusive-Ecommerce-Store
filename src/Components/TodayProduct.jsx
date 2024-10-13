import { useEffect, useState } from "react";
import FlashSales from "./FlashSales";
import { PiShoppingCartThin } from "react-icons/pi";

const TodayProduct = () => {
  const [todayProduct, setTodayProduct] = useState(null); // State to hold cart data
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchTodayProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/2");
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        setTodayProduct(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTodayProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!todayProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-secondary2 text-xl border-l-[20px] rounded-sm border-l-secondary2 p-1">
        Today&apos;s
      </h1>
      <FlashSales />
      <div key={todayProduct.id} className="flex justify-around">
        {todayProduct.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TodayProduct;

function Product({ product }) {
  return (
    <div className="relative product bg-white rounded-lg  p-4 flex flex-col">
      <div className="relative bg-secondary rounded-md">
        <img
          src={product.thumbnail || "placeholder-image-url.jpg"} // Show thumbnail or placeholder if not available
          alt={product.title}
          className="w-40 h-auto"
        />

        <div className="absolute top-2 left-2 bg-secondary2 text-text text-xs w-10 rounded-sm flex items-center justify-center">
          -{product.discountPercentage}%
        </div>
        <div className="absolute top-2 right-2 bg-text rounded-full">
          <PiShoppingCartThin className=" h-6 w-6" />
        </div>
      </div>

      <p className="font-medium mt-2">{product.title}</p>
      <div className="flex gap-3 mt-1">
        <span className="text-secondary2 font-semibold">
          ${product.price.toLocaleString()}
        </span>{" "}
        <span className="text-text1 line-through">
          ${product.discountedTotal}
        </span>
      </div>
    </div>
  );
}
