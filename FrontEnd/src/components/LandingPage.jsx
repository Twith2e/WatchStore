import Hero from "./Hero";
import WatchInfo from "./WatchInfo";
import RelativeContainer from "./RelativeContainer";
import AbsoluteContainer from "./AbsoluteContainer";
import ProductPreview from "./ProductPreview";
import MoreBtn from "./MoreBtn";
import CarouselComponent from "./Carousel";
import ManWatch from "./ManWatch";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Hero />
      <div>
        <WatchInfo />
      </div>
      <div className="px-[50px]">
        <RelativeContainer>
          <div className="absolute top-0 rounded-5 h-[100%] w-[80%] m-auto left-[50%] translate-x-[-50%] bg-[#f5f5f5]"></div>
          <AbsoluteContainer />
        </RelativeContainer>
      </div>
      <div className="mt-[80px] bg-[#f5f5f5] flex flex-col gap-5">
        <ProductPreview />
        <Link to="/products" className="no-underline">
          <MoreBtn />
        </Link>
      </div>
      <div className="flex justify-between px-[50px]">
        <div className="w-[60%]">
          <CarouselComponent />
        </div>
        <div className="w-[40%]">
          <ManWatch />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
