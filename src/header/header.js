import React, { useState } from "react";
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
// import { useNavigate } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Icon } from '@iconify/react';
import "./header.css";
export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
// usestate for holding header background color between white (#f0f2f4) and dark gray (#2D2D2D)
const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#f0f2f4')
// usestate for holding icon type to change between "ellipse" for open and "x" for close
const [headerNavIcon, setHeaderNavIcon] = useState('carbon:overflow-menu-vertical')
// if/else function for changing background color when icon state is open -> called on menu icon click
const handleMenuIconClick = () => {
  handleVisible()
  // open dropdown -> change background to gray and icon to close "X"
  if(isVisible===true){
    setHeaderBackgroundColor('#2D2D2D')
    setHeaderNavIcon('carbon:close')
  }
  // close dropdown -> change background to white and icon to vertical ellipse
  if(isVisible===false){
    setHeaderBackgroundColor('#f0f2f4')
    setHeaderNavIcon('carbon:overflow-menu-vertical')
  }
}
   return (
    <header className="header-main" style={{backgroundColor: headerBackgroundColor}}>
      
      <h1 className="title">Robert Neyrinck</h1>
      <button style={{border: "none", backgroundColor: "transparent"}}>
      <Icon icon={headerNavIcon} className="menu-vertical" onClick={()=>handleMenuIconClick()}/>
     </button>
     {/* displayed as none while i work on refactoring */}
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#2D2D2D", display: "none"}}
    >
      <Container>
        <Navbar.Brand href="/" style={{}}>
          Robert Neyrinck
        </Navbar.Brand>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        // style={{backgroundColor:"white"}}
      >
        <Tab eventKey="home" title="PORTFOLIO" >
        <NavDropdown.Item href="/#scanberry" id="contact-dropdown-items">
                <h5>Scanberry</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#galaxy-trading-cards"
                id="contact-dropdown-items"
              >
                <h5>Galaxy trading cards</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#hey-neighbor"
                id="contact-dropdown-items"
              >
                <h5>Hey Neighbor</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#cook-booker"
                id="contact-dropdown-items"
              >
                <h5>CookBooker</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
        </Tab>
        
        {/* <Tab eventKey="about" title={<Link to="/about" style={{textDecoration: "none", linkStyle: "none", color: "#6c757d"}}>ABOUT</Link>}  onSelect={()=>aboutNavigate()}> */}
       
        {/* </Tab> */}
        <Tab eventKey="contact" title="CONTACT" >
        <NavDropdown.Item
                href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
                id="contact-dropdown-items"
              >
                <AiOutlineMail id="contact-dropdown-social-logos" />
                <h5>Email</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/robert-neyrinck-5933a0104/"
                target="_blank"
                id="contact-dropdown-items"
              >
                <AiFillLinkedin id="contact-dropdown-social-logos" />
                <h5>LinkedIn</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/rneyrinck"
                target="_blank"
                id="contact-dropdown-items"
              >
                <AiFillGithub id="contact-dropdown-social-logos" />{" "}
                <h5>GitHub profile</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
        </Tab>
      </Tabs>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="nav-hamburger"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          style={{ alignItems: "left" }}
        >
          <Nav className="justify-content-end">
            {/* portfoolio dropdown */}
            <NavDropdown
              title="PORTFOLIO"
              align="end"
              id="dropdown-menu-align-end"
              autoClose="inside"
            >
              <NavDropdown.Item href="/#scanberry" id="contact-dropdown-items">
                <h5>Scanberry</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#galaxy-trading-cards"
                id="contact-dropdown-items"
              >
                <h5>Galaxy trading cards</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#hey-neighbor"
                id="contact-dropdown-items"
              >
                <h5>Hey Neighbor</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#cook-booker"
                id="contact-dropdown-items"
              >
                <h5>CookBooker</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
            </NavDropdown>
            {/* about page link */}
            <Nav.Link href="/about">
              <h5 style={{ fontSize: 16, fontWeight: "420", marginTop: 5 }}>
                ABOUT
              </h5>
            </Nav.Link>
            {/* contact dropdown */}
            <NavDropdown
              title="CONTACT"
              align="end"
              id="dropdown-menu-align-end"
              autoClose="inside"
            >
              <NavDropdown.Item
                href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
                id="contact-dropdown-items"
              >
                <AiOutlineMail id="contact-dropdown-social-logos" />
                <h5>Email</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/robert-neyrinck-5933a0104/"
                target="_blank"
                id="contact-dropdown-items"
              >
                <AiFillLinkedin id="contact-dropdown-social-logos" />
                <h5>LinkedIn</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/rneyrinck"
                target="_blank"
                id="contact-dropdown-items"
              >
                <AiFillGithub id="contact-dropdown-social-logos" />{" "}
                <h5>GitHub profile</h5>
                <BsArrowRight id="navbar-dropdown-arrows" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
