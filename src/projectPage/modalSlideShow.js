import React from "react";
import { Carousel } from "react-bootstrap";
import "./modalSlideShow.css";
import Tutorial1 from "./../ScreenShots/Tutorial1.jpg";
import Tutorial2 from "./../ScreenShots/Tutorial2.jpg";
import Tutorial3 from "./../ScreenShots/Tutorial3.jpg";
import Tutorial4 from "./../ScreenShots/Tutorial4.jpg";
import Tutorial5 from "./../ScreenShots/Tutorial5.jpg";
import SpendingGoalPage from "./../ScreenShots/SpendingGoalPage.jpg";
import PreSelectSpendingGoal from "./../ScreenShots/PreSelectSpendingGoal.jpg";
import CustomSpendingGoal from "./../ScreenShots/CustomSpendingGoal.jpg";
import ScanningItem from "./../ScreenShots/ScanningItem.jpg";
import ShoppingCart from "./../ScreenShots/ShoppingCart.jpg";
export default function ModalSlideShow() {
  return (
    <Carousel id="carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={Tutorial1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tutorial2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tutorial3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tutorial4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tutorial5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SpendingGoalPage}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PreSelectSpendingGoal}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CustomSpendingGoal}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ScanningItem} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ShoppingCart} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}
