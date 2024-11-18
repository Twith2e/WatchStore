import WatchFeatureIcon from "./WatchFeatureIcon";
import AOS from "aos";
import "aos/dist/aos.css";

function AbsoluteContainer() {
  const watchFeatures = [
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/drop.png",
      alt: "Water drop icon",
      text: "Water proof",
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/battery.png",
      alt: "Battery icon",
      text: "Battery life",
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/alarm.png",
      alt: "Alarm icon",
      text: "Alarm",
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/cloudy.png",
      alt: "Weather icon",
      text: "Weather",
    },
  ];
  return (
    <div
      className="absolute top-5 h-100 d-flex flex-column justify-content-evenly gap-3 w-100"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(12, 12, 12, .7), rgba(12, 12, 12, .7)), url(https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/box-bg-1.jpg)",
        width: "100%",
        top: "50px",
        borderRadius: "100px",
        padding: "10px 100px",
      }}
    >
      <div className="text-center">
        <h3
          className="text-white"
          style={{ fontSize: "2.5rem", fontWeight: "700", lineHeight: "56px" }}
        >
          Gadget XTRA WordPress Theme
        </h3>
      </div>
      <div>
        <p className="text-white" style={{ lineHeight: "32px" }}>
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use,
          while an associated smartphone app provides for management and
          telemetry (such as long-term biomonitoring)
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-between w-100">
          <div></div>
          {watchFeatures.map((feature) => (
            <div className="d-flex flex-column gap-4">
              <WatchFeatureIcon
                key={feature.text}
                image={feature.img}
                alt={feature.alt}
                text={feature.text}
              />
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AbsoluteContainer;
