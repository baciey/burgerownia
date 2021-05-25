import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

const Header = (props) => {
  const { width } = props;
  const [menuToggle, setMenuToggle] = useState("");

  const handleHamburgerClick = () => {
    if (menuToggle === "" || menuToggle === false) {
      setMenuToggle(true);
    } else {
      setMenuToggle(false);
    }
  };
  const handleMenuListClick = () => {
    if (window.innerWidth < 1024) {
      if (menuToggle) {
        setMenuToggle(!menuToggle);
      }
    }
  };

  let classes;
  if (menuToggle === true) classes = "active";
  if (menuToggle === "") classes = "";
  if (menuToggle === false) classes = "inactive";
  return (
    <>
      <div className={"nav " + classes}>
        {width >= 1024 ? null : (
          <div className="top-bar">
            <div onClick={handleHamburgerClick} className="menu-icon">
              <div className={"line " + classes}></div>
              <div className={"line " + classes}></div>
              <div className={"line " + classes}></div>
            </div>
            <NavLink
              className="menu-home"
              onClick={handleMenuListClick}
              to="/"
              exact
            >
              <p>Burgerownia</p>
              <p>
                <span>grill</span>
                <span>piwo</span>
                <span>pizza</span>
              </p>
            </NavLink>
          </div>
        )}

        <div className="slide-menu">
          <ul className={classes}>
            {width >= 1024 ? (
              <li>
                <img src={Logo} alt="" />
              </li>
            ) : null}
            <li>
              <NavLink onClick={handleMenuListClick} to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenuListClick} to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenuListClick} to="/o-nas">
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenuListClick} to="/kontakt">
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenuListClick} to="/organizacja-imprez">
                Organizacja imprez
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleMenuListClick} to="/aktualnosci">
                Aktualności
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {width >= 1024 ? null : <div className="nav-background"></div>}
    </>
  );
};

export default Header;
