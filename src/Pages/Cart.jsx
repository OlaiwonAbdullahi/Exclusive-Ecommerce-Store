import Path from "../Components/Path";

const Cart = () => {
  return (
    <div>
      <Path>Cart</Path>
      <div className="">
        <div className="">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
