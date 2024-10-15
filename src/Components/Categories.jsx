const Categories = () => {
  return (
    <div className="p-8 flex flex-col gap-8 mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary2 text-xl border-l-[20px] rounded-md border-l-secondary2 p-1">
            Categories
          </h1>
          <span className="text-4xl font-semibold text-text2">
            {" "}
            Browse By Category
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
