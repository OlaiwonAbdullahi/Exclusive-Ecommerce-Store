import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className=" flex w-48 gap-3 p-2 rounded-sm bg-secondary text-text2">
      <input
        type="text"
        placeholder=" What are you looking for?"
        className=" w-36 bg-secondary text-text2 placeholder:text-text2 text-sm focus:outline-none placeholder:font-light"
      />
      <CiSearch className=" h-5 w-5 hover:text-secondary2 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
