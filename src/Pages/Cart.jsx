import Path from "../Components/Path";

const Cart = () => {
  return (
    <div>
      <Path>Cart</Path>
      <div className=" w-3/4 flex flex-col justify-center items-center mx-auto">
        <div className=" text-lg p-2 flex justify-around  border border-text1/10 shadow rounded md:w-3/4 w-full">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
        </div>
        <div className="">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
