import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./MatchedCats.css";

const Personality = (props) => {
  const [show, setShow] = useState(false);

  const highMedLow = (rating) => {
    return rating === "3" ? "high" : rating === "2" ? "medium" : "low";
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
            src={require("../Form/radio-icons/other-dog.png")}
            alt="indoor"
            className="small-icon"
          />
          <img
            src={require("../Form/radio-icons/other-cat.png")}
            alt="indoor"
            className="small-icon"
          />
          <img
            src={require("../Form/radio-icons/other-small.png")}
            alt="indoor"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("dog") && other.includes("cat")) {
      return (
        <>
          <img
            src={require("../Form/radio-icons/other-dog.png")}
            alt="indoor"
            className="small-icon"
          />
          <img
            src={require("../Form/radio-icons/other-cat.png")}
            alt="indoor"
            className="small-icon"
          />
        </>
      );
    } else if (other.includes("dog") && other.includes("small")) {
      return (
        <>
          <img
            src={require("../Form/radio-icons/other-dog.png")}
            alt="indoor"
            className="small-icon"
          />
          <img
            src={require("../Form/radio-icons/other-small.png")}
            alt="indoor"
            className="icon"
          />
        </>
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
          <img src={props.cat[0].photo} className="large" />
          <p>{props.cat[0].blurb}</p>
          <p>
            <b>I can live with:</b> <br></br>
            {showAnimal(props.cat[1].other_animals)}
          </p>
          <p>
            I am <b>{highMedLow(props.cat[1].energy)}</b> energy and have{" "}
            <b>{highMedLow(props.cat[1].social)}</b> social needs.{" "}
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
