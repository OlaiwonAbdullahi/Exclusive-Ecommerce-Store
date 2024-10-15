const Button = ({ children, width, color, background, border }) => {
  return (
    <button
      className=" bg-secondary2 h-10 text-text rounded hover:bg-hoverBtn1 "
      style={{
        width: width,

        background: background,
        border: border,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
