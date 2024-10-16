import { useEffect, useState } from "react";
import Path from "../Components/Path";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from "../Components/Button";

const Cart = () => {
  const [todayProduct, setTodayProduct] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({}); // Holds quantity for each product

  // Handle quantity increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  // Handle quantity decrement
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) - 1),
    }));
  };

  // Calculate cart total
  const calculateTotal = () => {
    return todayProduct.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + product.price * quantity;
    }, 0);
  };

  useEffect(() => {
    const fetchTodayProduct = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/beauty?limit=4&skip=2"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        setTodayProduct(data.products);

        // Set initial quantity for each product to 1
        const initialQuantities = {};
        data.products.forEach((product) => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTodayProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const total = calculateTotal();

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
                className="flex justify-around items-center p-3 border border-text1/10 shadow rounded md:w-3/4 w-full"
              >
                <span className="flex gap-3 items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-10 h-10 rounded-md"
                  />
                  {product.title}
                </span>
                <span>${product.price}</span>

                <div className="flex flex-row border border-text2 h-11 rounded">
                  <input
                    type="number"
                    value={quantities[product.id]}
                    readOnly
                    className="bg-white placeholder:text-text2 text-2xl h-10 border-r border-r-text2 focus:outline-none p-1 w-16 text-center"
                  />
                  <div className="h-10 flex flex-col">
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 items-center flex justify-center text-xl rounded-t-sm"
                    >
                      <MdKeyboardArrowUp />
                    </button>
                    <button
                      onClick={() => handleDecrement(product.id)}
                      className="bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 items-center flex justify-center text-xl rounded-b-sm"
                    >
                      <MdKeyboardArrowDown />
                    </button>
                  </div>
                </div>

                {/* Calculate Subtotal */}
                <span>
                  ${(product.price * quantities[product.id]).toFixed(2)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center p-4">No products in cart</p>
          )}
        </div>
      </div>

      {/* Only show the cart totals if there are products */}
      {todayProduct.length > 0 && (
        <>
          <div className="flex justify-center">
            <div className="w-6/12 justify-between flex">
              <button className="border border-text2 rounded bg-white text-sm p-2 font-medium px-4">
                Return to Shop
              </button>
              <button className="border border-text2 rounded bg-white text-sm p-2 font-medium px-4">
                Update Cart
              </button>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-around">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  className="border border-text2 rounded bg-white text-sm p-2 font-medium px-4 placeholder:text-text2"
                  placeholder="Coupon Code"
                />
                <Button width={120}>Apply Coupon</Button>
              </div>

              <div className="border border-text2 rounded bg-white p-3 flex flex-col gap-2">
                <div className="">Cart Total</div>
                <div className="flex justify-between border-b border-b-text1">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-b border-b-text1">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button width={200}>Process to checkout</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
