import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
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
      <div className="portfolio-projects-section">
        <Card id="youtubeclone">
          <Card.Body>
            <Card.Title>Youtube Clone</Card.Title>
            <Card.Text>
              React application built following a JS Mastery tutorial. Replicates Youtube functionality utilizing RapidAPIs Youtube v3 API for content and user ability to search for videos. Application is built with Material UI for styling and structure. 
            </Card.Text>
            <div className="card-button-group">
              <a href="https://rneyrinck.github.io/youtubeclone/" target="_blank">
                <Button variant="primary">
                  Deployed Link <BsArrowRight id="navbar-dropdown-arrows" />
                </Button>
              </a>
              <a href="https://github.com/rneyrinck/youtubeclone" target="_blank">
                <Button variant="secondary">
                  Repo <BsArrowRight id="navbar-dropdown-arrows" />
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card id="scanberry">
          <Card.Body>
            <Card.Title>Scanberry</Card.Title>
            <Card.Text>
              React Native mobile application with barcode scanner and a
              third-party API, Barcode Lookup, to scan items and manage
              in-person shopping cart. App allows users to change item
              quanities, set budgets, and view cart to budget ratio in live
              visualization. Built in 5 days after collaborative handoff with UX
              Designer.
            </Card.Text>
            <div className="card-button-group">
              <ScreenShotModal />
              <a href="https://github.com/rneyrinck/Scanberry" target="_blank">
                <Button variant="secondary">
                  Repo <BsArrowRight id="navbar-dropdown-arrows" />
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card id="galaxy-trading-cards">
          <Card.Body>
            <Card.Title>Galaxy Cards</Card.Title>
            <Card.Text>
              Multi-page react app using React Bootstrap, HashRouter, and an API
              by NASA displaying images, videos and descriptive content. Created
              custom Javascript algorithm to make a selection randomly from
              returned array with 18 pages and 1,774 objects that users can save
              to separate page.
            </Card.Text>
            <div className="card-button-group">
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
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title id="hey-neighbor">Hey, Neighbor</Card.Title>
            <Card.Text>
              MERN stack application built collaboratively in 4-day sprint.
              Rotated project management role, resolved merge conflicts and
              utilized GitHubs kanban to set and manage assignments. App allows
              users to create marketplace listings and communicate with
              comments.{" "}
            </Card.Text>
            <div className="card-button-group">
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
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title id="cook-booker">Cook Booker</Card.Title>
            <Card.Text>
              Full stack application built in 2-day sprint with a backend
              composed of MongoDB, express, and deployed on Heroku. On the
              frontend users can add their favorite cookbooks and authors to a
              public forum on frontend React.Js platform styled using minimal
              components from React Bootstrap.{" "}
            </Card.Text>
            <div className="card-button-group">
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
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
