import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import ModalSlideShow from "./modalSlideShow";

const ScreenShotModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Screen Shots <BsArrowRight id="navbar-dropdown-arrows" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scanberry Screen Shots</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: "flex", justifyContent:"center"}}>

        <ModalSlideShow />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ScreenShotModal