import Watch from "./Watch";
import Info from "./Info";
import "bootstrap/dist/css/bootstrap.min.css";

function WatchInfo() {
  const infoArray = [
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/dashboard.png",
      title: "Extraordinary Performance",
      middle: false,
    },
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/calendar.png",
      title: "Shows time & date",
      middle: false,
    },
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/batteryv.png",
      title: "Excellent battery life",
      middle: true,
    },
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/price-tag.png",
      title: "Affordable price",
      middle: true,
    },
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/link.png",
      title: "Connectable to android/iOS",
      middle: false,
    },
    {
      description: "A smartwatch is a wearable computer in the form of a watch",
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/smartwatch-app.png",
      title: "Best Quality and design",
      middle: false,
    },
  ];

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column gap-4">
        {infoArray
          .filter((_, index) => index % 2 === 0) // Filter even indices
          .map((item, index) => (
            <div
              className="text-end d-flex flex-column align-items-end"
              style={
                item.middle
                  ? { paddingRight: "50px", marginTop: "-5px" }
                  : { marginTop: "-2px" }
              }
            >
              <Info
                key={index}
                title={item.title}
                image={item.img}
                description={item.description}
              />
            </div>
          ))}
      </div>
      <Watch />
      <div className="d-flex flex-column align-items-start">
        {infoArray
          .filter((_, index) => index % 2 !== 0) // Filter even indices
          .map((item, index) => (
            <div
              style={
                item.middle
                  ? { paddingLeft: "50px", marginTop: "-5px" }
                  : { marginTop: "-2px" }
              }
            >
              <Info
                key={index}
                title={item.title}
                image={item.img}
                description={item.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default WatchInfo;
