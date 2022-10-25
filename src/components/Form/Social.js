import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Social({ formData, setFormData }) {
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [pulseAnimation2, setPulseAnimation2] = useState(0);
  const [pulseAnimation3, setPulseAnimation3] = useState(0);

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
                  onClick={() => setPulseAnimation(1)}
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulseAnimation={pulseAnimation}
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
                  onClick={() => setPulseAnimation2(1)}
                  onAnimationEnd={() => setPulseAnimation2(0)}
                  pulseAnimation={pulseAnimation2}
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
                  onClick={() => setPulseAnimation3(1)}
                  onAnimationEnd={() => setPulseAnimation3(0)}
                  pulseAnimation={pulseAnimation3}
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
