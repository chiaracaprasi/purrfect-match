import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Social({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>How often is someone at home during the day?</Card.Header>
      <Card.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="1"
                checked={formData.social === "1"}
                onChange={(e) => {
                  setFormData({ ...formData, social: e.target.value });
                }}
              />
              More often away than at home - 1-2 days a week
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="2"
                checked={formData.social === "2"}
                onChange={(e) => {
                  setFormData({ ...formData, social: e.target.value });
                }}
              />
              A lot of the time - 3-4 days a week
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="3"
                checked={formData.social === "3"}
                onChange={(e) => {
                  setFormData({ ...formData, social: e.target.value });
                }}
              />
              Most of the time - 5+ days a week
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Social;
