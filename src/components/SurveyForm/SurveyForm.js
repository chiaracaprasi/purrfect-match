import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const MasterForm = () => {
  const [cardSelected, setCardSelected] = useState(undefined);

  const handleCardClick = (cardNumber) => {
    setCardSelected(cardNumber);
  };

  return (
    <div>
      <h1>Survey Form</h1>;
      <Card
        style={{ width: "18rem" }}
        as={Button}
        bg={cardSelected === 1 ? "primary" : "secondary"}
        onClick={() => handleCardClick(1)}
      >
        {/* <Card.Img variant="top" src="" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        as={Button}
        bg={cardSelected === 2 ? "primary" : "secondary"}
        onClick={() => handleCardClick(2)}
      >
        {/* <Card.Img variant="top" src="" /> */}
        <Card.Body>
          <Card.Title>Card Title 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MasterForm;
