import PlayStation from "../assets/PlayStation.png";
import Speaker from "../assets/Speaker.png";
import women from "../assets/women.png";

const PictureGrid = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="flex h-[5%] md:flex-row flex-col md:gap-4 gap2 ">
        <div className="flex-shrink-0 basis-1/2 p-4">
          <img src={PlayStation} alt="PlayStation" className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-center md:gap-7 gap-3  basis-1/2 ml-4 p-4">
          <div className="mb-4 w-full">
            <img src={women} alt="Woman" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={Speaker} alt="Speaker" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureGrid;
