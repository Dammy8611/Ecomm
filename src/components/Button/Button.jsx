// import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ link, children, onClick, style, className }) => {
  if (link) {
    return (
      <Link to={link}>
        <button onClick={onClick} className={style + " " + className}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={style + " " + className}>
        {children}
      </button>
    );
  }
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
