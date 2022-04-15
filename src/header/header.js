import React, { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useHref, useNavigate } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import "./header.css";
export default function Header() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  // usestate containing all functionality changes made to header  -> changed using index i.e (headerFunctionality[0]='changed')
  const [headerFunctionality, setHeaderFunctionality] = useState({
    "background-color": "#f0f2f4",
    "icon-style": "carbon:overflow-menu-vertical",
    "text-color": "#000000",
    "dropdown-display": "none",
  });
  // usesstates for visibility of embedded dropdown menus 'PORTFOLIO' & 'CONTACT'
  // if/else function for changing background color when icon state is open -> called on menu icon click
  const handleMenuIconClick = () => {
    handleVisible();
    // open dropdown -> change background to gray and icon to close "X"
    if (isVisible === true) {
      setHeaderFunctionality({
        "background-color": "#2D2D2D",
        "icon-style": "carbon:close",
        "text-color": "#EEEEEE",
        "dropdown-display": "initial",
      });
    }
    // close dropdown -> change background to white and icon to vertical ellipse
    if (isVisible === false) {
      setHeaderFunctionality({
        "background-color": "#f0f2f4",
        "icon-style": "carbon:overflow-menu-vertical",
        "text-color": "#000000",
        "dropdown-display": "none",
      });
    }
    return;
  };

  const [isPortfolioDropdownVisible, setIsPortfolioDropdownVisible] =
    useState(false);
  const [isContactDropdownVisible, setIsContactDropdownVisible] =
    useState(false);
  // handlers for embedded dropdown visibility
  const handlePortfolioDropdownVisible = () => {
    setIsPortfolioDropdownVisible(!isPortfolioDropdownVisible);
  };
  const handleContactDropdownVisible = () => {
    setIsContactDropdownVisible(!isContactDropdownVisible);
  };
  // usestate for functionality of embedded dropdowns
  const [portfolioDropdownFunctionality, setPortfolioDropdownFunctionality] =
    useState({
      "portfolio-display": "none",
      "portfolio-icon-style": "carbon:chevron-up",
    });
  const [contactDropdownFunctionality, setContactDropdownFunctionality] =
    useState({
      "contact-display": "none",
      "contact-icon-style": "carbon:chevron-up",
    });

  // handler for opening or closing embedded dropdowns
  const handlePortfolioDropdownClick = () => {
    // set display state as opposite of what it currently is(default false)
    handlePortfolioDropdownVisible();

    // if/else for changing visibility of specific dropdown
    // open dropdown -> change background to gray and icon to close "X"
    if (isPortfolioDropdownVisible === true) {
      setPortfolioDropdownFunctionality({
        "portfolio-display": "initial",
        "portfolio-icon-style": "carbon:chevron-down",
      });
    }
    // close dropdown -> change background to white and icon to vertical ellipse
    if (isPortfolioDropdownVisible === false) {
      setPortfolioDropdownFunctionality({
        "portfolio-display": "none",
        "portfolio-icon-style": "carbon:chevron-up",
      });
    }
    return;
  };
  const handleContactDropdownClick = () => {
    // set display state as opposite of what it currently is(default false)
    handleContactDropdownVisible();

    // if/else for changing visibility of specific dropdown
    // open dropdown -> change background to gray and icon to close "X"
    if (isContactDropdownVisible === true) {
      setContactDropdownFunctionality({
        "contact-display": "initial",
        "contact-icon-style": "carbon:chevron-down",
      });
    }
    // close dropdown -> change background to white and icon to vertical ellipse
    if (isContactDropdownVisible === false) {
      setContactDropdownFunctionality({
        "contact-display": "none",
        "contact-icon-style": "carbon:chevron-up",
      });
    }
    return;
  };
  // useeffect to ensure single click render
  useEffect(() => {
    handleContactDropdownClick();
    handlePortfolioDropdownClick();
    handleMenuIconClick();
  }, []);
  return (
    <header
      className="header-main"
      style={{ backgroundColor: headerFunctionality["background-color"] }}
    >
      <h1
        className="title"
        style={{ color: headerFunctionality["text-color"] }}
        onClick={() => navigate("/")}
      >
        Robert Neyrinck
      </h1>
      <button style={{ border: "none", backgroundColor: "transparent" }}>
        <Icon
          icon={headerFunctionality["icon-style"]}
          style={{ color: headerFunctionality["text-color"] }}
          className="menu-vertical"
          onClick={handleMenuIconClick}
        />
      </button>
      {/* dropdown section default display: none */}
      <div
        className="header-dropdown-sections"
        style={{
          display: headerFunctionality["dropdown-display"],
          background: "#000000",
          height: "68px",
          position: "absolute",
          left: 0,
          top: "68px",
          width: "100%",
          zIndex: 1020,
        }}
      >
        {/* portfolio dropdown */}
        <div
          className="header-dropdown-label"
          onClick={handlePortfolioDropdownClick}
        >
          <h2 className="header-dropdown-title">PORTFOLIO</h2>
          <Icon
            icon={portfolioDropdownFunctionality["portfolio-icon-style"]}
            style={{ width: "26px", height: "26px", margin: "0px 10px" }}
          />
        </div>
        {/* wrapper div for portfolio dropdown display */}
        <div
          style={{
            display: portfolioDropdownFunctionality["portfolio-display"],
          }}
        >
          <a
            href="/#scanberry"
            onClick={handleMenuIconClick}
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <h3 className="header-dropdown-portfolio-items-h3">Scanberry</h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  textDecoration: "none",
                  color: "#000000",
                }}
              />
            </div>
          </a>
          <a
            href="/#galaxy-trading-cards"
            onClick={handleMenuIconClick}
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <h3 className="header-dropdown-portfolio-items-h3">
                Galaxy trading cards
              </h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  textDecoration: "none",
                  color: "#000000",
                }}
              />
            </div>
          </a>
          <a
            href="/#hey-neighbor"
            onClick={handleMenuIconClick}
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <h3 className="header-dropdown-portfolio-items-h3">
                Hey Neighbor
              </h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  textDecoration: "none",
                  color: "#000000",
                }}
              />
            </div>
          </a>
          <a
            href="/#cook-booker"
            onClick={handleMenuIconClick}
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <h3 className="header-dropdown-portfolio-items-h3">CookBooker</h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  textDecoration: "none",
                  color: "#000000",
                }}
              />
            </div>
          </a>
        </div>
        {/* about page link */}
        <a
          href="/about"
          onClick={handleMenuIconClick}
          style={{ textDecoration: "none", color: "#00000" }}
        >
          <div className="header-dropdown-label">
            <h2 className="header-dropdown-title">ABOUT</h2>
            <Icon
              icon="carbon:arrow-right"
              style={{ width: "26px", height: "26px", margin: "0px 10px" }}
            />
          </div>
        </a>
        {/* wrapper div for contact dropdown display */}
        <div
          className="header-dropdown-label"
          onClick={handleContactDropdownClick}
        >
          <h2 className="header-dropdown-title">CONTACT</h2>
          <Icon
            icon={contactDropdownFunctionality["contact-icon-style"]}
            style={{ width: "26px", height: "26px", margin: "0px 10px" }}
          />
        </div>
        <div
          style={{
            display: contactDropdownFunctionality["contact-display"],
          }}
        >
          <a
            href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
            target="_blank"
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <Icon
                icon="carbon:email"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  color: "#000000",
                }}
              />
              <h3 className="header-dropdown-portfolio-items-h3">Email</h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px",
                  color: "#000000",
                }}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/robert-neyrinck-5933a0104/"
            target="_blank"
            style={{ textDecoration: "none", color: "#00000" }}
          >
            <div className="header-dropdown-portfolio-items">
              <Icon
                icon="carbon:logo-linkedin"
                style={{ width: "26px", height: "26px", margin: "0px 10px", color: "#000000" }}
              />
              <h3 className="header-dropdown-portfolio-items-h3">LinkedIn</h3>{" "}
              <Icon
                icon="carbon:arrow-right"
                style={{ width: "26px", height: "26px", margin: "0px 10px", color: "#000000" }}
              />
            </div>
          </a>
          <a
            href="https://github.com/rneyrinck"
            target="_blank"
            style={{ textDecoration: "none", color: "#00000" }}
          >
          <div className="header-dropdown-portfolio-items">
            <Icon
              icon="carbon:logo-github"
              style={{ width: "26px", height: "26px", margin: "0px 10px", color: "#000000" }}
            />
            <h3 className="header-dropdown-portfolio-items-h3">
              GitHub profile
            </h3>{" "}
            <Icon
              icon="carbon:arrow-right"
              style={{ width: "26px", height: "26px", margin: "0px 10px", color: "#000000" }}
            />
          </div>
          </a>
        </div>
      </div>
      {/* displayed as none while i work on refactoring */}
    
    </header>
  );
}
