import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  React.useEffect(() => {
    const menuOption = document.querySelector(".menuOption");
    const menuButton = document.querySelector(".menuButton");

    const closedMenuIcon = document.querySelector(".closedMenuIcon");
    const menuIcon = document.querySelector(".menuIcon");

    menuButton.addEventListener("click", () => {
      const visibility = menuOption.getAttribute("data-visible");
      if (visibility === "false") {
        menuOption.setAttribute("data-visible", true);
        menuIcon.setAttribute("aria-hidden", true);
        closedMenuIcon.setAttribute("aria-hidden", false);
      } else {
        menuOption.setAttribute("data-visible", false);
        menuIcon.setAttribute("aria-hidden", false);
        closedMenuIcon.setAttribute("aria-hidden", true);
      }
    });
  });

  return (
    <div>
      <div className="container">
        <div className="logoContainer">
          <h2 className="logo">TripWith</h2>
        </div>
        <div className="menu">
          <div className="menuButton" id="nav-menu-button" aria-expanded="true">
            <FontAwesomeIcon
              icon={faWindowClose}
              size="lg"
              color="white"
              className="closedMenuIcon "
              aria-hidden="true"
            />
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="menuIcon"
              aria-hidden="false"
            />
          </div>
          <div
            className="menuOption hidden"
            id="sm-option-menu"
            data-visible="false"
          >
            <ul>
              <li> Home </li>
              <li> About </li>
              <li> Login </li>
              <li> Signup </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
