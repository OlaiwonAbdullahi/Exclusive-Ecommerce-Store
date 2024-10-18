import { useEffect, useState } from "react";
import Path from "../Components/Path";

const Cart = () => {
  const [todayProduct, setTodayProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodayProduct = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones?limit=4&skip=2"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        setTodayProduct(data.products);
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

  return (
    <div>
      <Path>Cart</Path>
      <div className="w-3/4 flex flex-col justify-center items-center mx-auto">
        <div className="text-lg p-2 flex justify-around border border-text1/10 shadow rounded md:w-3/4 w-full">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>

        <div className="w-full flex flex-col justify-center items-center mx-auto gap-3 my-3">
          {todayProduct.length > 0 ? (
            todayProduct.map((product) => (
              <div
                key={product.id}
                className="flex justify-around items-center p-2 border border-text1/10 shadow rounded md:w-3/4 w-full"
              >
                <span>{product.title}</span>
                <span>${product.price}</span>
                <span>1</span> {/* Quantity hardcoded for now */}
                <span>${product.price}</span> {/* SubTotal hardcoded for now */}
              </div>
            ))
          ) : (
            <p className="text-center p-4">No products in cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
