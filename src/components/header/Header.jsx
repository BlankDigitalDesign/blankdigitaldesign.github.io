import React, { useState } from "react";
import "./header.css";
import { nav } from "../../constants";
import { Link } from "react-router-dom";

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
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              <li onClick={handleModalStatus}>Contact Us</li>
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
