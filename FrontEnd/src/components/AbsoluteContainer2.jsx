import { LocationOnOutlined } from "@mui/icons-material";

function AbsoluteContainer2() {
  return (
    <div
      className="absolute top-5 h-[65%] flex flex-col items-center justify-center rounded-[80px]"
      style={{
        aspectRatio: "200/99",
        backgroundImage: `linear-gradient(
          90deg, 
          rgba(12, 12, 12, .7), 
          rgba(12, 12, 12, .7)
        ), url(https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/box-bg.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "100px 100px 60px",
        width: "100%",
        top: "50px",
      }}
    >
      <h2 className="text-center text-white text-[40px] leading-[56px] font-bold">
        Nearby Pear-Watch Stores
      </h2>
      <p className="text-center text-[#aaa] text-base leading-8 w-[70%] m-auto">
        <span>
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use.
        </span>
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white hover:!bg-[#0088FF] text-black px-4 py-2 rounded-full text-base leading-8 transition-all duration-300 group">
          <span className="group-hover:text-white">Purchase Now</span>
        </button>
        <button className="text-white border border-white font-medium rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white transition-all duration-300 group">
          <LocationOnOutlined className="group-hover:text-black" />
          <span className="group-hover:text-black">Find Nearby Stores</span>
        </button>
      </div>
    </div>
  );
}

export default AbsoluteContainer2;
