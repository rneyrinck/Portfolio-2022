import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import "./projectPage.css";
import ScreenShotModal from "./screenShotModal";
export default function ProjectPage() {
  return (
    <section>
      <div className="bio-wrapper">
        <p className="bio">
          Robert is a full stack engineer with a background in b2b technology
          sales.
        </p>
      </div>
      {/* wrapper */}
      <div className="portfolio-wrapper">
        <h5>PORTFOLIO</h5>
      </div>
      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <Card style={{ border: "none", width: "375px" }}>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "flex-start",
              textAlign: "left",
              flexDirection: "column",
              margin: "16px",
            }}
          >
            <Card.Title>Scanberry</Card.Title>
            <Card.Text>
              React Native mobile application with barcode scanner and a
              third-party API, Barcode Lookup, to scan items and manage
              in-person shopping cart. App allows users to change item
              quanities, set budgets, and view cart to budget ratio in live
              visualization. Built in 5 days after collaborative handoff with UX
              Designer.
            </Card.Text>
            <ScreenShotModal/>
            
            <a href="https://github.com/rneyrinck/Scanberry" target="_blank">
              <Button variant="secondary">
                Repo <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ border: "none", width: "375px" }}>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              margin: "16px",
              textAlign: "left",
            }}
          >
            <Card.Title>Galaxy trading cards</Card.Title>
            <Card.Text>
              Multi-page react app using React Bootstrap, HashRouter, and an API
              by NASA displaying images, videos and descriptive content. Created
              custom Javascript algorithm to make a selection randomly from
              returned array with 18 pages and 1,774 objects that users can save
              to separate page.
            </Card.Text>
            <a href="https://rneyrinck.github.io/Project-2/" target="_blank">
              <Button variant="primary">
                Deployed Link <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
            <a href="https://github.com/rneyrinck/Project-2" target="_blank">
              <Button variant="secondary">
                Repo <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ border: "none", width: "375px" }}>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              margin: "16px",
              textAlign: "left",
            }}
          >
            <Card.Title>CookBooker</Card.Title>
            <Card.Text>
              Full stack application built in 2-day sprint using MongoDB,
              express, and deployed on Heroku. Users can add their favorite
              cookbooks and authors to a public forum on frontend React.Js
              platform.{" "}
            </Card.Text>
            <a
              href="https://pages.git.generalassemb.ly/rob-neyrinck/Cookbook-client/#/cookbooks"
              target="_blank"
            >
              <Button variant="primary">
                Deployed Link <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
            <a
              href="https://github.com/rneyrinck/CookbookerClient"
              target="_blank"
            >
              <Button variant="secondary" id="repo-button-cookbooker">
                Repo Frontend
                <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
            <a
              href="https://github.com/rneyrinck/CookBookerAPI"
              target="_blank"
            >
              <Button variant="secondary" id="repo-button-cookbooker">
                Repo Backend
                <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ border: "none", width: "375px" }}>
          <Card.Body
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              margin: "16px",
              textAlign: "left",
            }}
          >
            <Card.Title>Hey, Neighbor</Card.Title>
            <Card.Text>
              MERN stack application built collaboratively in 4-day sprint.
              Rotated project management role, resolved merge conflicts and
              utilized GitHubs kanban to set and manage assignments. App allows
              users to create marketplace listings and communicate with
              comments.{" "}
            </Card.Text>
            <a
              href="https://sabr-ga.github.io/hey-neighbor-client/#/"
              target="_blank"
            >
              <Button variant="primary">
                Deployed Link <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
            <a href="https://github.com/SABR-GA" target="_blank">
              <Button variant="secondary">
                Repo <BsArrowRight id="navbar-dropdown-arrows" />
              </Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
