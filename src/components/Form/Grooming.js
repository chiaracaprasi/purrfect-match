import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Grooming({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>
        How much time can you spend on grooming your cat?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card>
            <input
              type="radio"
              value="1"
              checked={formData.grooming === "1"}
              onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}
            />
            Not much time - less than 30 min a week
          </Card>
          <p></p>
          <Card>
            <input
              type="radio"
              value="2"
              checked={formData.grooming === "2"}
              onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}
            />
            Some time - up to 1 hr a week
          </Card>
          <p></p>
          <Card>
            <input
              type="radio"
              value="3"
              checked={formData.grooming === "3"}
              onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}
            />
            Lots of time! - more than 1 hr a week
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Grooming;
