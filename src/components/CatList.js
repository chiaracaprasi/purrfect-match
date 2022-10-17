import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CatList.css";

const CatList = ({ cats = [] }) => {
  console.log(cats);
  const renderCatCard = (cat) => {
    return (
      <Card style={{ width: "16rem" }} key={cat.id}>
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
      <h1>You have {cats.length} matches</h1>
      <div className="d-flex justify-content-between flex-wrap p-5">
        {listItems}
      </div>
    </>
  );
};

export default CatList;
