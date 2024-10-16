import tom from "../assets/tom.svg";
import emma from "../assets/emma.svg";
import will from "../assets/will.svg";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const teamMembers = [
  {
    imgSrc: tom,
    name: "Tom Cruise",
    role: "Founder & Chairman",
  },
  {
    imgSrc: emma,
    name: "Emma Watson",
    role: "Managing Director",
  },
  {
    imgSrc: will,
    name: "Will Smith",
    role: "Product Designer",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-start my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-2/3 mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold text-left">{member.name}</h2>
            <span className="text-sm text-gray-600 text-left">
              {member.role}
            </span>
            <div className="flex gap-4 mt-2 ">
              <CiTwitter className="h-6 w-6  cursor-pointer" />
              <CiInstagram className="h-6 w-6  cursor-pointer" />
              <CiLinkedin className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
