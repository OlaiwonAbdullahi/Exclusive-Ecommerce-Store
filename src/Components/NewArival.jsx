import PictureGrid from "./PictureGrid";

const NewArival = () => {
  return (
    <div className="p-8 flex flex-col gap-8 mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary2 text-xl border-l-[20px] rounded-md border-l-secondary2 p-1">
            Featured
          </h1>
          <span className="text-4xl font-semibold text-text2">New Arrival</span>
        </div>
      </div>
      <PictureGrid />
    </div>
  );
};

export default NewArival;
