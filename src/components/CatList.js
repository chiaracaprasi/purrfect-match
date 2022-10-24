import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CatList.css";

const CatList = ({ cats = [] }) => {
  const renderCatCard = (cat) => {
    return (
      <Card style={{ width: "16rem" }} key={cat.id} className="mb-4">
        <Card.Img className="img-thumbnail" variant="top" src={cat.photo} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {cat.dob} <br></br> {cat.sex}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
          {cat.breed}
          </Card.Subtitle>
          <Card.Text>{cat.blurb}</Card.Text>
          <Button variant="secondary">Match</Button>
        </Card.Body>
      </Card>
    );
  };

  const listItems = cats.map((cat) => renderCatCard(cat));

  return (
    <>
      <h1 className="fs-6 text">You have {cats.length} matches</h1>
      <div className="d-flex justify-content-between flex-wrap p-5">
        {listItems}
      </div>
    </>
  );
};

export default CatList;
