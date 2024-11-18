import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ icon, hoverEffect1, hoverEffect2 }) {
  return (
    <Link
      className={`w-12 h-12 rounded-full flex items-center border-1 border-gray-400 justify-center ${hoverEffect2} group`}
      to=""
    >
      <FontAwesomeIcon className={`text-black ${hoverEffect1}`} icon={icon} />
    </Link>
  );
}

export default SocialLink;
