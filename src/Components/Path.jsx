const Path = ({ children }) => {
  return (
    <div
      className="text-sm flex whitespace-nowrap"
      role="navigation"
      aria-label="Breadcrumb"
    >
      <span className="text-text1">Home/</span>
      <span className="text-text2">{children}</span>
    </div>
  );
};

export default Path;
