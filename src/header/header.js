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
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import "./header.css";
export default function Header() {
  return (
    // <header>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" >
        <Container>
          <Navbar.Brand href="#/">Robert Neyrinck</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
            <Nav className="me-auto">
                {/* portfoolio dropdown */}
              <NavDropdown title="PORTFOLIO" id="responsive-nav-dropdown" >
                <NavDropdown.Item href="/" id="contact-dropdown-items">
                 <h5>Scanberry</h5> 
                  <BsArrowRight id="navbar-dropdown-arrows"/>

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="contact-dropdown-items">
                 <h5>Galaxy trading cards</h5> 
                  <BsArrowRight id="navbar-dropdown-arrows"/>

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="contact-dropdown-items">
                 <h5>Hey Neighbor</h5> 
                  <BsArrowRight id="navbar-dropdown-arrows"/>

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" id="contact-dropdown-items">
                 <h5>CookBooker</h5> 
                  <BsArrowRight id="navbar-dropdown-arrows"/>

                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#/about"><h5 style={{fontSize: 16, fontWeight: "420", marginTop: 5}}>ABOUT</h5></Nav.Link>
              {/* contact dropdown */}
              <NavDropdown title="CONTACT" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  id="contact-dropdown-items"
                >
                  <AiOutlineMail id="contact-dropdown-social-logos"/>
                  <h5>Email</h5>
                  <BsArrowRight id="navbar-dropdown-arrows"/>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.linkedin.com/in/robert-neyrinck-5933a0104/"
                  target="_blank"
                  id="contact-dropdown-items"
                >
                  <AiFillLinkedin id="contact-dropdown-social-logos" />
                  <h5>LinkedIn</h5>
                  <BsArrowRight id="navbar-dropdown-arrows"/>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  id="contact-dropdown-items"
                >
                  <AiFillGithub id="contact-dropdown-social-logos" /> <h5>GitHub profile</h5>
                  <BsArrowRight id="navbar-dropdown-arrows"/>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </header>
  );
}
