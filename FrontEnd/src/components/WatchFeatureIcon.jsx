function WatchFeatureIcon({ text, image, alt }) {
  return (
    <>
      <div
        className="bg-white d-flex justify-content-center align-items-center"
        style={{
          borderRadius: "50%",
          height: "6rem",
          width: "6rem",
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            maxWidth: "60%",
            height: "auto",
          }}
        />
      </div>
      <div>
        <p className="text-center text-white">{text}</p>
      </div>
    </>
  );
}

export default WatchFeatureIcon;
