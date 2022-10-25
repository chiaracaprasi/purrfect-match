import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Matched/MatchedCats.css";
import Adopt from "./Matched/Adopt";
import Personality from "./Matched/Personality";
import shuffle from "lodash/shuffle";
import { Link } from "react-router-dom";

const DisplayAllCats = ({ cats = [] }) => {
  cats = shuffle(cats);
  let catObjects = [];
  for (const v of Object.values(cats)) {
    catObjects.push(v);
  }

  const renderCatCard = (cat) => {
    const shortBlurb = cat[0].blurb.substring(0, 70);

    return (
      <Card
        style={{ width: "16rem", border: "0.1rem solid #81b1b3" }}
        key={cat[0].id}
        className="m-2 mx-auto"
      >
        <Card.Img
          className="img-thumbnail mx-auto"
          variant="top"
          src={cat[0].photo}
        />
        <Card.Body>
          <Card.Title className="mt-0">{cat[0].name}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted text-left">
            {cat[0].sex} - {cat[0].age}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted text-left"></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted text-left">
            {cat[0].breed}
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
      <div className="d-flex justify-content-between flex-wrap p-5">
        {catCard}
      </div>
      <div>
        <Link to="/match">
          <Button variant="secondary" className="mb-5" size="lg">
            Find Your Purrfect Match
          </Button>
        </Link>
      </div>
    </>
  );
};

export default DisplayAllCats;
