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
            <label>
              No outdoor space, or on a busy street
              <input
                type="radio"
                value="y"
                checked={formData.indoor === "y"}
                onChange={(e) => {
                  setFormData({ ...formData, indoor: e.target.value });
                }}
              />
            </label>
          </Card>
          <Card>
            <label>
              Lots of outdoor space and/or on a quiet street
              <input
                type="radio"
                value="n"
                checked={formData.indoor === "n"}
                onChange={(e) => {
                  setFormData({ ...formData, indoor: e.target.value });
                }}
              />
            </label>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Indoor;
