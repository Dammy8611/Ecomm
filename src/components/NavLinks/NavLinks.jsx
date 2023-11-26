import { Link } from "react-router-dom";
import "./navLinks.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const NavLinks = ({ children = "" }) => {
  const split = children.split("/");
  const location = useLocation();
  const currentUrl = location.pathname.toLowerCase();

  return (
    <li>
      <Link
        to={"/" + split[0].toLowerCase()}
        className={currentUrl.includes(split[0].toLowerCase()) ? "active" : ""}
      >
        {split[0]}
      </Link>
      {split[1] ? (
        <>
          <span>/</span>
          <Link
            to={"/" + split[1].toLowerCase()}
            className={
              currentUrl.includes(split[1].toLowerCase()) ? "active" : ""
            }
          >
            {split[1]}
          </Link>
        </>
      ) : (
        ""
      )}
    </li>
  );
};

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLinks;
