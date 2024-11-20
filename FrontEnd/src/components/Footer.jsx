import FooterInfo from "./FooterInfo";
import FooterList from "./FooterList";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const list = [
    {
      header: "Menu",
      links: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Books",
          link: "/books",
        },
        {
          text: "Collections",
          link: "/collections",
        },
        {
          text: "Categories",
          link: "/categories",
        },
      ],
    },
    {
      header: "Support",
      links: [
        {
          text: "FAQs",
          link: "/faq",
        },
        {
          text: "Terms & Conditions",
          link: "/t-c",
        },
        {
          text: "Privacy Policy",
          link: "/privacypolicy",
        },
        {
          text: "Report",
          link: "/report",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-14 p-[50px] bg-[#f1f2f6] rounded-t-[80px]">
      <div className="flex justify-between ">
        <FooterInfo />
        {list.map((item) => (
          <FooterList list={item} />
        ))}
        <Newsletter />
      </div>
      <div className="flex justify-between w-full">
        <span className="text-[#919191] text-sm">
          XTRA Shop &copy; 2024 All Rights Reserved
        </span>
        <Link
          className="text-[#919191] text-sm no-underline hover:text-[#0088ff] flex gap-2 items-center"
          to="/"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Track your orders
        </Link>
      </div>
    </div>
  );
}

export default Footer;
