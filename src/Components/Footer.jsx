import { VscSend } from "react-icons/vsc";
import Qrcode from "../assets/Qrcode.png";
import PlayStore from "../assets/playsore.png";
const Footer = () => {
  return (
    <div className="">
      <div className=" bg-black text-text flex justify-between p-4 mt-6 font-light text-sm gap-3 md:flex-row md:gap-0 flex-col">
        <div className=" text-center md:text-left">
          <h2 className=" text-2xl">Exclusive Store</h2>
          <span className="text-lg">Subscribe</span>
          <br />
          <span className="text-sm">Get 10% off your first order</span>
          <div className=" flex justify-center m-2 md:justify-start">
            <div className=" flex gap-2  border-text border p-1 px-2 rounded-md w-1/3 md:w-full justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className=" bg-text2 placeholder:text-text placeholder:font-extralight"
              />
              <VscSend className=" h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="p-1 text-center md:text-left">
          <h2 className="text-xl font-medium">Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusivestore@gmail.com</p>
          <span>+123 456 7890</span>
        </div>
        <div className="p-1 text-center md:text-left">
          <h2 className="text-xl font-medium">Account</h2>
          <ul>
            <li>My Account</li>
            <li>Register/Login</li>
            <li>Cart</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className=" p-1 text-center md:text-left">
          <h2 className="text-xl font-medium">Quick Link</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" text-center md:text-left">
          <h2 className="text-xl font-medium">Download App</h2>
          <span>Save $3 with app New user only</span>
          <div className=" flex p-2 gap-3 justify-center m-2 md:justify-start">
            <img src={Qrcode} alt="" />
            <img src={PlayStore} alt="" />
          </div>
        </div>
      </div>
      <hr className="  border-t border-t-text1 " />
      <div className="text-center bg-text2 text-text1">
        &copy; {new Date().getFullYear()} All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
