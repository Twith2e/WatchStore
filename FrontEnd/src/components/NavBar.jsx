import { KeyboardArrowDown, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "../src/index.css";

function NavBar() {
  return (
    <nav
      className="d-flex align-items-center justify-content-between"
      style={{ padding: "20px 30px" }}
    >
      <div>
        <img
          src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/logo-watch-shop.png"
          data-src=""
          alt="Smart Watch WordPress Theme"
          width="184"
          height="34"
          style={{ width: "184px" }}
          className="lazyDone"
        />
      </div>
      <div className="d-flex">
        <li className="px-3 list-unstyled">
          <NavLink
            className={({ isActive }) =>
              `d-flex align-items-center py-3 text-decoration-none link ${
                isActive ? "active" : ""
              }`
            }
            to="/"
          >
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>Home</span>
          </NavLink>
        </li>
        <li className="px-3 list-unstyled">
          <NavLink
            className={({ isActive }) =>
              `d-flex align-items-center py-3 text-decoration-none link ${
                isActive ? "active" : ""
              }`
            }
            to={"/collections"}
          >
            <span
              className="text-decoration-none"
              style={{ fontSize: "1rem", fontWeight: "500" }}
            >
              Collections
            </span>
            <KeyboardArrowDown sx={{ color: "#b9b9b9" }} />
          </NavLink>
        </li>
        <li className="px-3 list-unstyled">
          <NavLink
            className={({ isActive }) =>
              `d-flex align-items-center py-3 text-decoration-none link ${
                isActive ? "active" : ""
              }`
            }
            to="/watches"
          >
            <span className="" style={{ fontSize: "1rem", fontWeight: "500" }}>
              Watches
            </span>
          </NavLink>
        </li>
        <li className="px-3 list-unstyled">
          <NavLink
            className={({ isActive }) =>
              `d-flex align-items-center py-3 text-decoration-none link ${
                isActive ? "active" : ""
              }`
            }
            to={"/quick-find"}
          >
            <span className="" style={{ fontSize: "1rem", fontWeight: "500" }}>
              Quick find
            </span>
            <KeyboardArrowDown sx={{ color: "#b9b9b9" }} />
          </NavLink>
        </li>
        <li className="px-3 list-unstyled">
          <NavLink
            className={({ isActive }) =>
              `d-flex align-items-center py-3 text-decoration-none link ${
                isActive ? "active" : ""
              }`
            }
            to="/pages"
          >
            <span className="" style={{ fontSize: "1rem", fontWeight: "500" }}>
              Pages
            </span>
            <KeyboardArrowDown sx={{ color: "#b9b9b9" }} />
          </NavLink>
        </li>
      </div>
      <div className="d-flex gap-3">
        <button
          className="btn rounded-pill py-3 "
          style={{ padding: "12px 40px", background: "#0c0c0c" }}
        >
          <span
            className="text-white"
            style={{ fontSize: "14px", fontWeight: "700" }}
          >
            Contact Us
          </span>
        </button>
        <div className="" style={{ position: "relative" }}>
          <button
            className="btn rounded-circle p-3"
            style={{ borderColor: "#ededed" }}
          >
            <ShoppingCart />
          </button>
          <span
            className="badge rounded-pill p-1"
            style={{
              position: "absolute",
              bottom: "5px",
              right: "-10px",
              background: "#ff006f",
              color: "fff",
              fontSize: "12px",
              fontWeight: "400",
              zIndex: "100",
            }}
          >
            20
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
