import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CatList.css";
import axios from "axios";

const CatList = ({ cats = [] }) => {
  const renderCatCard = (cat) => {
    console.log(cat);

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img-thumbnail" variant="top" src={cat.photo} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Age: {cat.dob} Gender: {cat.sex}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Breed: {cat.breed}
          </Card.Subtitle>
          <Card.Text>About: {cat.blurb}</Card.Text>
          <Button variant="secondary">Match</Button>
        </Card.Body>
      </Card>
    );
  };

  const listItems = cats.map((cat) => renderCatCard(cat));

  return (
    <>
      <h1>Your Purrfect Matches</h1>
      <div class="d-flex justify-content-between flex-wrap p-5">
        {listItems}
      </div>
    </>
  );
};

export default CatList;
