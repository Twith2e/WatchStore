const RelativeContainer = ({ children }) => {
  return (
    <div
      className="position-relative min-vh-100 m-auto rounded-5"
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};

export default RelativeContainer;
