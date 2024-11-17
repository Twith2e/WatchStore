import "bootstrap/dist/css/bootstrap.css";

function Info({ image, title, description }) {
  return (
    <>
      <img src={image} alt={title} className="mb-3" />
      <h3
        style={{
          color: "#0C0C0C",
          fontSize: "1.125rem",
          fontWeight: "700",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "400",
        }}
      >
        {description}
      </p>
    </>
  );
}

export default Info;
