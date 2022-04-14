import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <Button
        href={
          "https://docs.google.com/document/d/1r8O-41z6ebSCY_gdW1YZiiCYwEaq9TCJdkMmYDD7JWc/edit?usp=sharing"
        }
        target="_blank"
        id="resume-button"
      >
        Check out my Resume <BsArrowRight style={{marginLeft: 5}}/>
      </Button>
    </footer>
  );
}
