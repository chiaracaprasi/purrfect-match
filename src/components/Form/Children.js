import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Children({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>
        Do you have children under 8, or do they frequently visit your home?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="y"
                checked={formData.children === "y"}
                onChange={(e) => {
                  setFormData({ ...formData, children: e.target.value });
                }}
              />
              Yes
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <input
                type="radio"
                value="n"
                checked={formData.children === "n"}
                onChange={(e) => {
                  setFormData({ ...formData, children: e.target.value });
                }}
              />
              No
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Children;
