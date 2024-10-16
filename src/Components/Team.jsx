import tom from "../assets/tom.svg";
import emma from "../assets/emma.svg";
import will from "../assets/will.svg";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
const Team = () => {
  return (
    <div className=" flex justify-around mx-auto p-4">
      <div className=" w-full flex flex-col gap-1">
        <img src={tom} alt="" className=" w-2/3 " />
        <h2 className=" text-2xl font-semibold ">Tom Cruise</h2>
        <span className=" text-sm">Founder & Chairman</span>
        <div className=" flex gap-2">
          <CiTwitter className=" h-6 w-6" />
          <CiInstagram className=" h-6 w-6" />
          <CiLinkedin className=" h-6 w-6" />
        </div>
      </div>

      <div className=" w-full flex flex-col gap-1">
        <img src={emma} alt="" className=" w-2/3 " />
        <h2 className=" text-2xl font-semibold ">Emma Watson</h2>
        <span className=" text-sm"> Managing Director</span>
        <div className=" flex gap-2">
          <CiTwitter className=" h-6 w-6" />
          <CiInstagram className=" h-6 w-6" />
          <CiLinkedin className=" h-6 w-6" />
        </div>
      </div>

      <div className=" w-full flex flex-col gap-1">
        <img src={will} alt="" className=" w-2/3 " />
        <h2 className=" text-2xl font-semibold "> Will Smith</h2>
        <span className=" text-sm"> Product Designer</span>
        <div className=" flex gap-2">
          <CiTwitter className=" h-6 w-6" />
          <CiInstagram className=" h-6 w-6" />
          <CiLinkedin className=" h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Team;
