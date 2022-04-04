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
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Robert Neyrinck</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* portfoolio dropdown */}
              <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1" id="contact-dropdown-items">
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
              <Nav.Link ><h5 style={{fontSize:"20", fontWeight: "350"}}>About</h5></Nav.Link>
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
                  href="#action/3.2"
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
    </header>
  );
}
