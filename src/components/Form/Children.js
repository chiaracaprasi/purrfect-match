import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Form.css";

function Children({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>
        Do you have children under 8, or do they frequently visit your home?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  className="card-input-element"
                  value="1"
                  checked={formData.children === "1"}
                  onChange={(e) => {
                    setFormData({ ...formData, children: e.target.value });
                  }}
                />
                <img
                  src={require("./radio-icons/children.png")}
                  alt="children"
                  className="icon"
                />
                <p>Yes</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  className="card-input-element"
                  value="0"
                  checked={formData.children === "0"}
                  onChange={(e) => {
                    setFormData({ ...formData, children: e.target.value });
                  }}
                />
                <img
                  src={require("./radio-icons/no-children.png")}
                  alt="no children"
                  className="icon"
                />
              </label>
              <p>No</p>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Children;
