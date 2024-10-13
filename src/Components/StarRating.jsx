import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";
import { FaStarHalfStroke } from "react-icons/fa6";

const StarRating = () => {
  return (
    <div className=" flex flex-row text-yellow-400">
      <TbStarFilled />
      <TbStarFilled />
      <TbStarFilled />
      <FaStarHalfStroke />
      <CiStar />
    </div>
  );
};

export default StarRating;
