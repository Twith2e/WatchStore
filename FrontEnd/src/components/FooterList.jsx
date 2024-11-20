import { Link } from "react-router-dom";

function FooterList({ list }) {
  return (
    <div className="w-[18%]">
      <ul>
        <li className="mb-[40px]">
          <h2 className="text-xl leading-5 font-bold">{list.header}</h2>
        </li>
        {list.links.map((item) => (
          <li>
            <Link
              className="no-underline text-[#00000080] text-base leading-8 hover:text-[#0088ff]"
              to={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
