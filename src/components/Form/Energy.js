import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Energy({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>
        How much time do you have to spend playing with your cat?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="1"
                checked={formData.energy === "1"}
                onChange={(e) => {
                  setFormData({ ...formData, energy: e.target.value });
                }}
              />
              Not much time - less than 15 min a day
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="2"
                checked={formData.energy === "2"}
                onChange={(e) => {
                  setFormData({ ...formData, energy: e.target.value });
                }}
              />
              Some time - 15 to 45 min a day
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="3"
                checked={formData.energy === "3"}
                onChange={(e) => {
                  setFormData({ ...formData, energy: e.target.value });
                }}
              />
              Lots of time! - more than 45 min a day
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Energy;
