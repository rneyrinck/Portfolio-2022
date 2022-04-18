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
      <div className="about-bio-and-picture">
        <img src={picture} className="pic-o-bob" />
        <div className="about-bio">
          <h5>Robert Neyrinck</h5>

          <p>
            Full-stack developer with a knack for intuitive problem solving and
            high-level teamwork. I bring good humor and a relentless drive to
            bring projects to completion no matter the size or complexity. I
            work efficiently and effectively under pressure with a passion to
            overcome difficult obstacles and learn new languages.
          </p>
          <div className="bio-button-group">
            <Button
              href="https://www.linkedin.com/in/robert-neyrinck/"
              target="_blank"
              id="about-button-group-linkedIn-button"
              className="bio-button linkedIn"
            >
              <AiFillLinkedin id="contact-dropdown-social-logos" />
              <h6>LinkedIn</h6>
              <BsArrowRight id="about-button-dropdown-arrows" />
            </Button>
            <Button
              href="https://github.com/rneyrinck"
              target="_blank"
              id="about-button-group-buttons"
              className="bio-button"
            >
              <AiFillGithub id="contact-dropdown-social-logos" />{" "}
              <h6>GitHub profile</h6>
              <BsArrowRight id="about-button-dropdown-arrows" />
            </Button>
            <Button
              href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
              id="about-button-group-buttons"
              className="bio-button"
            >
              <AiOutlineMail id="contact-dropdown-social-logos" />
              <h6>Email</h6>
              <BsArrowRight id="about-button-dropdown-arrows" />
            </Button>
          </div>
        </div>
      </div>
      <div className="about-skills-and-languages">
        <div className="about-skills-and-languages-content">
          <div className="languages">
            <h6 className="languages-h6">Languages</h6>
            <ul className="languages-ul">
              <li> HTML</li>

              <li> CSS</li>

              <li> Javascript</li>

              <li> Python</li>

              <li> JSX</li>

              <li> jQuery</li>
            </ul>
          </div>
          <div className="tools">
            <h6 className="tools-h6">Tools</h6>
            <ul className="tools-ul">
              <li>Bash</li>

              <li>Git and Github</li>

              <li>CSS Grid & Flexbox</li>

              <li>Responsive Web Design</li>

              <li>Express.js</li>

              <li>Node.js</li>

              <li>Vue.js</li>

              <li>Mongoose</li>

              <li>MongoDB</li>
              <li>Object Oriented Programming</li>
            </ul>
            <ul  className="tools-ul2">

              <li>DOM manipulation</li>

              <li>AJAX</li>

              <li>React</li>

              <li>React Native</li>

              <li>React Bootstrap</li>

              <li>Bootstrap</li>

              <li>React Components</li>

              <li>React Hooks</li>

              <li>PostgresQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-button-group" id="about-button-grou-sm-breakpoint">
        <Button
          href="https://www.linkedin.com/in/robert-neyrinck/"
          target="_blank"
          id="about-button-group-linkedIn-button"
        >
          <AiFillLinkedin id="contact-dropdown-social-logos" />
          <h6>LinkedIn</h6>
          <BsArrowRight id="about-button-dropdown-arrows" />
        </Button>
        <Button
          href="https://github.com/rneyrinck"
          target="_blank"
          id="about-button-group-buttons"
        >
          <AiFillGithub id="contact-dropdown-social-logos" />{" "}
          <h6>GitHub profile</h6>
          <BsArrowRight id="about-button-dropdown-arrows" />
        </Button>
        <Button
          href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
          id="about-button-group-buttons"
        >
          <AiOutlineMail id="contact-dropdown-social-logos" />
          <h6>Email</h6>
          <BsArrowRight id="about-button-dropdown-arrows" />
        </Button>
      </div>
    </section>
  );
}
