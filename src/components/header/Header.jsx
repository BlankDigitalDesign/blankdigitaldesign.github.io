import React, { useState } from "react";
import "./header.css";
import { nav } from "../../constants";
import { Link } from "react-router-dom";
import logo from "../../images/image.png";
import ContactModal from "../ContactModal";
import PhoneIcon from "@mui/icons-material/Phone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleX } from "@fortawesome/fontawesome-svg-core";
import { FaBars } from "react-icons/fa";
const Header = ({ handleModalStatus }) => {
  const [navList, setNavList] = useState(false);

  const handleToggleClick = () => {
    setNavList(!navList);
  };

  return (
    <>
      <header>
        <div className="flex">
          <div className="call-button">
            <a href="tel: 936-314-7037">
              <PhoneIcon />
            </a>
          </div>
          <div className="logo">
            <img src={logo} alt="Williamson Pest Solutions logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <a className="header-link" href={list.path}>
                    {list.text}
                  </a>
                </li>
              ))}
              <a className="header-link" onClick={() => handleModalStatus("")}>
                Contact Us
              </a>
            </ul>
          </div>
          <div className="button flex"> </div>

          <div className="toggle">
            <button onClick={handleToggleClick}>
              {navList ? (
                <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
              ) : (
                <FontAwesomeIcon icon={FaBars} />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
