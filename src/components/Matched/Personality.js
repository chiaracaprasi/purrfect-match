import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./MatchedCats.css";

const Personality = (props) => {
  const [show, setShow] = useState(false);

  const highMedLow = (rating) => {
    return rating === "3" ? "high" : rating === "2" ? "medium" : "low";
  };

  const showChildren = (children) => {
    return children === true ? (
      <img
        src={require("../icons/children.png")}
        alt="dogs"
        className="small-icon"
      />
    ) : null;
  };

  const indoor = (indoor) => {
    return indoor === true
      ? "am an indoor only cat."
      : "am happy inside but will also need some time outdoors.";
  };

  const showAnimal = (other) => {
    if (
      other.includes("dog") &&
      other.includes("cat") &&
      other.includes("small")
    ) {
      return (
        <>
          <img
            src={require("../icons/other-dog.png")}
            alt="dogs"
            className="small-icon"
          />
          <img
            src={require("../icons/other-cat.png")}
            alt="cats"
            className="small-icon"
          />
          <img
            src={require("../icons/other-small.png")}
            alt="small animals"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("dog") && other.includes("cat")) {
      return (
        <>
          <img
            src={require("../icons/other-dog.png")}
            alt="dogs"
            className="small-icon"
          />
          <img
            src={require("../icons/other-cat.png")}
            alt="cats"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("dog") && other.includes("small")) {
      return (
        <>
          <img
            src={require("../icons/other-dog.png")}
            alt="dogs"
            className="small-icon"
          />
          <img
            src={require("../icons/other-small.png")}
            alt="small animals"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("cat") && other.includes("small")) {
      return (
        <>
          <img
            src={require("../icons/other-cat.png")}
            alt="cats"
            className="small-icon"
          />
          <img
            src={require("../icons/other-small.png")}
            alt="small animals"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("cat")) {
      return (
        <img
          src={require("../icons/other-cat.png")}
          alt="cats"
          className="small-icon"
        />
      );
    } else if (other.includes("dog")) {
      return (
        <img
          src={require("../icons/other-dog.png")}
          alt="dogs"
          className="small-icon"
        />
      );
    } else if (other.includes("small")) {
      return (
        <img
          src={require("../icons/other-small.png")}
          alt="small animals"
          className="small-icon"
        />
      );
    } else {
      return (
        <img
          src={require("../icons/no-animals.png")}
          alt="no other animals"
          className="small-icon"
        />
      );
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setShow(true)}>
        More
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        {...props}
        size="medium"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.cat[0].name} - {props.cat[0].dob}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.cat[0].photo} alt="" className="large" />
          <p>{props.cat[0].blurb}</p>

          <p>
            <b>I can live with:</b> <br></br>
            {showChildren(props.cat[1].children)}
            {showAnimal(props.cat[1].other_animals)}
          </p>
          <p>
            I {indoor(props.cat[1].indoor)} I am{" "}
            <b>{highMedLow(props.cat[1].energy)}</b> energy and have{" "}
            <b>{highMedLow(props.cat[1].social)}</b> social needs. I will
            require a <b>{highMedLow(props.cat[1].grooming)}</b> amount of
            grooming to keep me looking my best.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Personality;
