import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { dummy_data } from "../DummyData";
import "./CatList.css";

const CatList = () => {
  const listItems = dummy_data.map((cat) => (
    <p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Text>
            <ul>
              <li>Age: {cat.age}</li>
              <li>Gender: {cat.gender}</li>
              <li>About: {cat.bio}</li>
            </ul>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </p>
  ));
  return (
    <div>
      <h1>Your Purrfect Matches</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default CatList;
