import React from "react";
import { Button } from "react-bootstrap";
import picture from "./../picOBob.png";
import "./about.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
export default function About() {
  return (
    <section className="about-main">
      <div className="about-wrapper">
        <h5>ABOUT</h5>
      </div>
      <img src={picture} className="pic-o-bob" />
      <div className="about-bio">
      <h5>Robert Neyrinck</h5>
      <p>
        Full-stack developer with a knack for intuitive problem solving and
        high-level teamwork. I bring good humor and a relentless drive to bring
        projects to completion no matter the size or complexity. I work
        efficiently and effectively under pressure with a passion to overcome
        difficult obstacles and learn new languages.
      </p>
      </div>
      <div className="about-skills">
      <h6>Tools</h6>
      <p>
        Bash<br/>
        Git and Github<br/>
        CSS Grid & Flexbox <br/>
        Responsive Web Design<br/>
        Express.js<br/>
        Node.js<br/>
        Vue.js<br/>
        Mongoose<br/>
        MongoDB<br/>
        Object Oriented Programming<br/>
        DOM manipulation<br/>
        AJAX<br/>
        React<br/>
        React Native<br/>
        React Bootstrap<br/>
        Bootstrap<br/>
        React Components, Props, and State<br/>
        React Hooks<br/>
        PostgresQL<br/>
      </p>
      <h6>Languages</h6>
      <p>
        HTML<br/>
        CSS<br/>
        Javascript<br/>
        Python<br/>
        JSX<br/>
        jQuery<br/>
      </p>
      </div>
      <div className="about-button-group">
      <Button href="https://www.linkedin.com/in/robert-neyrinck/" id="about-button-group-linkedIn-button" >
        <AiFillLinkedin id="contact-dropdown-social-logos" />
        <h5>LinkedIn</h5>
        <BsArrowRight id="navbar-dropdown-arrows" />
      </Button>
      <Button href="https://github.com/rneyrinck" target="_blank" id="about-button-group-buttons" >
        <AiFillGithub id="contact-dropdown-social-logos" />{" "}
        <h5>GitHub profile</h5>
        <BsArrowRight id="navbar-dropdown-arrows" />
      </Button>
      <Button href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio" id="about-button-group-buttons" >
        <AiOutlineMail id="contact-dropdown-social-logos" />
        <h5>Email</h5>
        <BsArrowRight id="navbar-dropdown-arrows" />
      </Button>
      </div>
    </section>
  );
}
