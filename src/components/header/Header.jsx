import React, { useState } from "react";
import "./header.css";
import { nav } from "../../constants";
import logo from "../../images/image.png";
import PhoneIcon from "@mui/icons-material/Phone";

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
                CONTACT US
              </a>
            </ul>
          </div>
          <div className="button flex"> </div>

          <div className="toggle">
            <button onClick={handleToggleClick}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
