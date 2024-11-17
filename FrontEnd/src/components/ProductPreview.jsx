import WatchDisplayBanner from "./WatchDisplayBanner";

function ProductPreview() {
  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="flex justify-center">
        <h3 className="pp-header text-[2.75rem] leading-[61.6px] font-bold">
          <span className="text-[#0088ff]">Pear-Watch</span> Products
        </h3>
      </div>
      <span className="text-center leading-8 text-[1rem] text-[#666]">
        A smartwatch is a wearable computer in the form of a watch; modern
        smartwatches
      </span>
      <span className="text-center leading-8 text-[1rem] text-[#666]">
        provide a local touchscreen interface for daily use.
      </span>
      <WatchDisplayBanner />
    </div>
  );
}

export default ProductPreview;
