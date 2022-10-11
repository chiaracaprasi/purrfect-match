import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { dummy_data } from "../DummyData";
import "./CatList.css";

const CatList = ({ breeds = ["Tuxedo", "Russian Blue", "Bombay"] }) => {
  const renderCatCard = (cat) => {
    return (
      <p>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cat.image} />
          <Card.Body>
            <Card.Title>{cat.name}</Card.Title>
            <Card.Text>
              <ul>
                <li>Age: {cat.age}</li>
                <li>Gender: {cat.gender}</li>
                <li>About: {cat.bio}</li>
                <li>
                  Breed: {breeds[Math.floor(Math.random() * breeds.length)]}
                </li>
              </ul>
            </Card.Text>
            <Button variant="secondary">Match</Button>
          </Card.Body>
        </Card>
      </p>
    );
  };

  const listItems = dummy_data.map((cat) => renderCatCard(cat));

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
