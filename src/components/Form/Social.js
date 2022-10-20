import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Social({ formData, setFormData }) {
  return (
    <Card>
      <Card.Header>How often is someone at home during the day?</Card.Header>
      <Card.Body>
        <CardGroup>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={formData.social === "1"}
                  onChange={(e) => {
                    setFormData({ ...formData, social: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/social-1.png")}
                  alt="low social"
                  className="icon"
                />
                <p>More often away than at home - 1-2 days a week</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={formData.social === "2"}
                  onChange={(e) => {
                    setFormData({ ...formData, social: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/social-2.png")}
                  alt="medium social"
                  className="icon"
                />
                <p>A lot of the time - 3-4 days a week</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={formData.social === "3"}
                  onChange={(e) => {
                    setFormData({ ...formData, social: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/social-3.png")}
                  alt="high social"
                  className="icon"
                />
                <p>Most of the time - 5+ days a week</p>
              </label>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Social;
