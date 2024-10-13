import { useEffect, useState } from "react";

const TodayProduct = () => {
  const [todayProduct, setTodayProduct] = useState(null); // State to hold cart data
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchTodayProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/1");
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
    <div>
      <h1>Today's Products</h1>
      <div key={todayProduct.id}>
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
    <div className="product">
      <div className=" bg-secondary">
        <img
          src={product.thumbnail || "placeholder-image-url.jpg"} // Show thumbnail or placeholder if not available
          alt={product.title}
          className="w-40 h-auto"
        />
      </div>
      <p>
        {product.title} - ${product.price}
      </p>
    </div>
  );
}
