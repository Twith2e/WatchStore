import {
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialLink from "./SocialLink";

function FooterInfo() {
  const Social = [
    {
      icon: faTwitter,
      hoverEffect1: "group-hover:text-white",
      hoverEffect2: "hover:bg-[#1da1f2]",
    },
    {
      icon: faInstagram,
      hoverEffect1: "group-hover:text-white",
      hoverEffect2:
        "hover:bg-gradient-to-tr from-[#feda75] via-[#E1306C] to-[#833ab4]",
    },
    {
      icon: faPinterest,
      hoverEffect1: "group-hover:text-white",
      hoverEffect2: "hover:bg-[#cb2027]",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px] w-[45%]">
      <img
        src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/logo-watch-shop.png"
        alt="logo"
        width="150"
        height="150"
      />
      <p className="text-[#00000080] text-base leading-8 font-normal text-wrap">
        A smartwatch is a wearable computer in the form of a watch; modern
        smartwatches provide a local touchscreen interface for daily use.
      </p>
      <div className="flex gap-2">
        {Social.map((item, index) => (
          <div key={index} className="group">
            <SocialLink
              icon={item.icon}
              hoverEffect1={item.hoverEffect1}
              hoverEffect2={item.hoverEffect2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterInfo;
