import React from "react";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <Button
        href={'https://docs.google.com/document/d/e/2PACX-1vRBuLyNWGQICCWL3bFy38xvM_w3LCVIqhXQN8AUHtApB7rAgW8fSAIa6wz-kY3lvZrO67DPuAZnharF/pub'}
        target="_blank"
        download
        id="resume-button"
      >
        Check out my Resume <BsArrowRight style={{marginLeft: 5}}/>
      </Button>
    </footer>
  );
}
