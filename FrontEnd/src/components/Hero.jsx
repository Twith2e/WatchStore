import { PlayCircleOutline } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.css";

function Hero() {
  return (
    <div className="d-flex align-items-center px-[50px]">
      <div className="w-50" data-aos="fade-zoom-in">
        <p className="p-0 m-0" style={{ fontSize: "24px" }}>
          Skip the Impossible
        </p>
        <p className="p-0 m-0" style={{ fontSize: "60px", fontWeight: "300" }}>
          Extraordinary
        </p>
        <p
          className="p-0 m-0"
          style={{ fontSize: "80px", fontWeight: "700", padding: "0px" }}
        >
          Performance
        </p>
        <div className="d-flex gap-4 m-0">
          <button
            className="rounded-pill buy-btn"
            style={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "15px 35px",
              background: "#0088ff",
            }}
          >
            <span>Purchase Now</span>
          </button>
          <button
            className="rounded-pill d-flex gap-2 align-items-center watch-btn"
            style={{
              color: "#000",
              border: "1px solid #000",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "13px 35px",
            }}
          >
            <PlayCircleOutline
              sx={{
                fontSize: "16px",
              }}
            />
            <span>Watch Video</span>
          </button>
        </div>
      </div>
      <div className="w-50">
        <img
          src="//xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/section01-img02.png"
          alt=""
          className="tp-rs-img rs-lazyload"
          width={760}
          height={669}
          data-lazyload="//xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/section01-img02.png"
          data-no-retina=""
          data-src-rs-ref="//xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/section01-img02.png"
          style={{ position: "relative", height: "669px", width: "760px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
