import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import Testimony from "./Testimony";
import { useRef } from "react";

function CarouselComponent() {
  const carouselRef = useRef(null);

  const testimonialData = [
    {
      header: "This Watch is amazing! Affordable price ",
      text: "I don't always clop, but when I do, it's because of pear watch. Pear watch has really helped me. I STRONGLY recommend pear watch to EVERYONE interested in fashion & tech! This is simply unbelievable!",
      image:
        "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/09/testimonial-3.jpg",
      alt: "John Carter",
      name: "John Carter",
      position: "UX Designer",
    },
    {
      header: "This Watch is amazing! Affordable price ",
      text: "I don't always clop, but when I do, it's because of pear watch. Pear watch has really helped me. I STRONGLY recommend pear watch to EVERYONE interested in fashion & tech! This is simply unbelievable!",
      image:
        "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/09/testimonial-4.jpg",
      alt: "Rose Carson",
      name: "Rose Carson",
      position: "Teacher",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto overflow-hidden">
      <h2 className="text-base leading-8 text-[#0088FF]">Testimonials</h2>
      <div className="relative w-full">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={30000}
          showDots={true}
          arrows={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-20-px"
          transitionDuration={800}
          swipeable={true}
          ssr={true}
          customTransition="transform 800ms ease-in-out"
        >
          {testimonialData.map((item, index) => (
            <div key={index} className="">
              <Testimony
                Info={item}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
