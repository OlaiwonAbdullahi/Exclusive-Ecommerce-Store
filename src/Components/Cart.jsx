import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState(null); // State for storing fetched cart data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Step 2: Fetch cart data when the component mounts
  useEffect(() => {
    // Define the API endpoint
    const fetchCartData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/1"); // Example URL
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json(); // Parse the JSON response
        setCartData(data); // Set the fetched cart data to state
        setLoading(false); // Turn off loading
      } catch (error) {
        setError(error.message); // Handle errors
        setLoading(false); // Turn off loading
      }
    };

    fetchCartData();
  }, []);

  // Step 3: Display loading or error states
  if (loading) {
    return <div>Loading cart data...</div>;
  }

  ` if (error) {
    return <div>Error: {error}</div>;
  }`;

  // Step 4: Display cart data once it's fetched
  return (
    <div>
      <h1>Cart Details</h1>
      {cartData && (
        <div>
          <p>Cart ID: {cartData.id}</p>
          <p>User ID: {cartData.userId}</p>
          <h2>Products:</h2>
          <ul>
            {cartData.products.map((product) => (
              <li key={product.id}>
                <p>Product Name: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
