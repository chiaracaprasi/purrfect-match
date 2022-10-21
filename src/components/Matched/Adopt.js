import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Adopt = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="secondary" className="m-1" onClick={() => setShow(true)}>
        Adopt Me
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
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex-container">
            <div>
              <img src={props.photo} alt="" className="small" />{" "}
            </div>
            <div>
              Please call us on 03 9595 9595 to arrange a time to meet your
              purrfect match <b>{props.name}</b>!{" "}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 bg-transparent">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Adopt;
