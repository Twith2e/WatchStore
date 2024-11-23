import { Link, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();
  console.log(location);
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div>{crumbs}</div>;
}

export default BreadCrumbs;
