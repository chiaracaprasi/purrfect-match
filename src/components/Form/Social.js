import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Social({ formData, setFormData }) {
  const [pulseanimation, setPulseanimation] = useState(0);
  const [pulseanimation2, setPulseanimation2] = useState(0);
  const [pulseanimation3, setPulseanimation3] = useState(0);

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
                  onClick={() => setPulseanimation(1)}
                  onAnimationEnd={() => setPulseanimation(0)}
                  pulseanimation={pulseanimation}
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
                  onClick={() => setPulseanimation2(1)}
                  onAnimationEnd={() => setPulseanimation2(0)}
                  pulseanimation={pulseanimation2}
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
                  onClick={() => setPulseanimation3(1)}
                  onAnimationEnd={() => setPulseanimation3(0)}
                  pulseanimation={pulseanimation3}
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
