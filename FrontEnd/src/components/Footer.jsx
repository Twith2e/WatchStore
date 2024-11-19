import FooterInfo from "./FooterInfo";
import FooterList from "./FooterList";

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
    <div className="flex justify-between bg-[#f5f5f5] p-[50px] rounded-t-[80px]">
      <FooterInfo />
      {list.map((item) => (
        <FooterList list={item} />
      ))}
    </div>
  );
}

export default Footer;
