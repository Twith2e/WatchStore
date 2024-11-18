import Hero from "./Hero";
import WatchInfo from "./WatchInfo";
import RelativeContainer from "./RelativeContainer";
import AbsoluteContainer from "./AbsoluteContainer";
import ProductPreview from "./ProductPreview";
import MoreBtn from "./MoreBtn";
import CarouselComponent from "./Carousel";
import ManWatch from "./ManWatch";
import { Link } from "react-router-dom";
import GrayBg from "./GrayBg";
import GrayBg2 from "./Gray.Bg2";
import AbsoluteContainer2 from "./AbsoluteContainer2";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Hero />
      <div>
        <WatchInfo />
      </div>
      <div className="px-[50px]">
        <RelativeContainer>
          <GrayBg />
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
      <div className="px-[50px] mt-[200px]">
        <RelativeContainer>
          <GrayBg2 />
          <AbsoluteContainer2 />
        </RelativeContainer>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
