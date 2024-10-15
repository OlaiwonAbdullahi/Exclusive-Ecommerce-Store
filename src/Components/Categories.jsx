import { IoPhonePortraitOutline } from "react-icons/io5";
const Categories = () => {
  return (
    <div className="p-2 flex flex-col gap-8 mt-2">
      <div className="flex justify-between">
        <div className=" border p-3 items-center flex flex-col">
          <IoPhonePortraitOutline className=" h-16 w-16" />
          <span>Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
