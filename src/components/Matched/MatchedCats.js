import React from "react";
import { Card } from "react-bootstrap";
import "./MatchedCats.css";
import Adopt from "./Adopt";
import Personality from "./Personality";
import shuffle from "lodash/shuffle";

const MatchedCats = ({ cats = [] }) => {
  cats = shuffle(cats);
  let catObjects = [];
  for (let [key, value] of Object.entries(cats)) {
    catObjects.push(value);
  }

  const renderCatCard = (cat) => {
    const shortBlurb = cat[0].blurb.substring(0, 70);

    return (
      <Card style={{ width: "16rem" }} key={cat[0].id} className="mx-auto m-2">
        <Card.Img className="img-thumbnail" variant="top" src={cat[0].photo} />
        <Card.Body>
          <Card.Title>{cat[0].name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-left">
            Age: {cat[0].dob}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted text-left">
            Sex: {cat[0].sex}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted text-left">
            Breed: {cat[0].breed}
          </Card.Subtitle>
          <Card.Text className="text-left">{shortBlurb}...</Card.Text>
          <Card.Footer className="border-0 bg-transparent">
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
      <h1 className="mt-5">You have {catObjects.length} matches!</h1>
      <div className="d-flex justify-content-between flex-wrap p-5">
        {catCard}
      </div>
    </>
  );
};

export default MatchedCats;
