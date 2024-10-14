import { useEffect, useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import Button from "./Button";
import StarRating from "./StarRating";
import { CiSliderHorizontal } from "react-icons/ci";

const AllProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        const products = data.carts.flatMap((cart) => cart.products);
        setAllProducts(products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAllProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!allProducts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 flex flex-col gap-8 mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary2 text-xl border-l-[20px] rounded-md border-l-secondary2 p-1">
            Our Products
          </h1>
          <span className="text-2xl md:text-4xl whitespace-nowrap font-semibold text-text2">
            Explore Our Products
          </span>
        </div>
        <div className=" flex md:gap-4 gap-2">
          <button className=" pb-10">
            <CiSliderHorizontal className=" md:h-10 md:w-10 h-5 w-5  text-text2" />
          </button>
          <Button width={80}>Go to Cart </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

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
        </span>{" "}
        <span className="text-text1 line-through">
          ${product.discountedTotal}
        </span>
      </div>
      <StarRating />
    </div>
  );
}
