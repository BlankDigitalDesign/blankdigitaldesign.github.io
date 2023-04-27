import React, { useState } from "react";
import "./header.css";
import { nav } from "../../constants";
import { Link } from "react-router-dom";
import logo from "../../images/image.png";

const Header = ({ handleModalStatus }) => {
  const [navList, setNavList] = useState(false);

  const handleToggleClick = () => {
    setNavList(!navList);
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="Williamson Pest Solutions logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link className="header-link" to={list.path}>
                    {list.text}
                  </Link>
                </li>
              ))}
              <Link className="header-link" onClick={handleModalStatus}>
                Contact Us
              </Link>
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
