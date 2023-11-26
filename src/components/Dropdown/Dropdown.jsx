// import React from 'react'
import { ArrowDropDown } from "@mui/icons-material";
import PropTypes from "prop-types";
import "./dropdown.scss";
import Button from "../Button/Button";

const Dropdown = ({ text }) => {
  return (
    <div className="dropdown">
      <Button style={"trans"} className={"drop-btn"}>
        {text} <ArrowDropDown />
      </Button>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};

export default Dropdown;
