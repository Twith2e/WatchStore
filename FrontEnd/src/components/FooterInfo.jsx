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
      hoverEffect2: "hover:bg-[#0088FF]",
    },
    {
      icon: faPinterest,
      hoverEffect1: "group-hover:text-white",
      hoverEffect2: "hover:bg-[#cb2027]",
    },
  ];
  return (
    <div>
      <img
        src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/logo-watch-shop.png"
        alt="logo"
        width="150"
        height="150"
      />
      <p>
        A smartwatch is a wearable computer in the form of a watch; modern
        smartwatches provide a local touchscreen interface for daily use.
      </p>
      <div className="flex gap-2">
        {Social.map((item, index) => (
          <SocialLink
            key={index}
            icon={item.icon}
            hoverEffect1={item.hoverEffect1}
            hoverEffect2={item.hoverEffect2}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterInfo;
