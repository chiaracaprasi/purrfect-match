import React from "react";
import { Card } from "react-bootstrap";
import "./MatchedCats.css";
import Adopt from "./Adopt";
import Personality from "./Personality";

const MatchedCats = ({ cats = [] }) => {
  let catObjects = [];
  for (let [key, value] of Object.entries(cats)) {
    catObjects.push(value);
  }

  const renderCatCard = (cat) => {
    const shortBlurb = cat[0].blurb.substring(0, 40);

    return (
      <Card style={{ width: "16rem" }} key={cat[0].id}>
        <Card.Img className="img-thumbnail" variant="top" src={cat[0].photo} />
        <Card.Body>
          <Card.Title>{cat[0].name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Age: {cat[0].age} <br></br> Gender: {cat[0].sex}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Breed: {cat[0].breed}
          </Card.Subtitle>
          <Card.Text>{shortBlurb}...</Card.Text>
          <Card.Footer>
            <Personality cat={cat} />
            <Adopt name={cat[0].name} photo={cat[0].photo} />
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  const catCard = catObjects.map((cat) => renderCatCard(cat));

  return (
    <>
      <h1>You have {catObjects.length} matches!</h1>
      <div className="d-flex justify-content-between flex-wrap p-5">
        {catCard}
      </div>
    </>
  );
};

export default MatchedCats;
