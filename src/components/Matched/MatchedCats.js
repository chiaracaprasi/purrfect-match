import React from "react";
import { Card } from "react-bootstrap";
import "./MatchedCats.css";
import Adopt from "./Adopt";
import Personality from "./Personality";

const MatchedCats = ({ cats = [] }) => {
  console.log(cats);
  const renderCatCard = (cat) => {
    return (
      <Card style={{ width: "16rem" }} key={cat.id}>
        <Card.Img className="img-thumbnail" variant="top" src={cat.photo} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Age: {cat.dob} <br></br> Gender: {cat.sex}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Breed: {cat.breed}
          </Card.Subtitle>
          <Card.Text>{cat.blurb}</Card.Text>
          <Card.Footer>
            <Personality />
            <Adopt name={cat.name} photo={cat.photo} />
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const listItems = cats.map((cat) => renderCatCard(cat));

  return (
    <>
      <h1>You have {cats.length} matches</h1>
      <div className="d-flex justify-content-between flex-wrap p-5">
        {listItems}
      </div>
    </>
  );
};

export default MatchedCats;
