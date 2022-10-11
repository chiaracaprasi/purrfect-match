import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Indoor({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>What is your home like?</Card.Header>
      <Card.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="1"
                checked={formData.indoor === "1"}
                onChange={(e) => {
                  setFormData({ ...formData, indoor: e.target.value });
                }}
              />
              No outdoor space, or on a busy street
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="0"
                checked={formData.indoor === "0"}
                onChange={(e) => {
                  setFormData({ ...formData, indoor: e.target.value });
                }}
              />
              Lots of outdoor space and/or on a quiet street
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Indoor;
