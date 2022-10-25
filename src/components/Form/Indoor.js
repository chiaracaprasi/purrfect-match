import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Indoor({ formData, setFormData }) {
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [pulseAnimation2, setPulseAnimation2] = useState(0);

  return (
    <Card>
      <Card.Header>Which best describes your home and preference?</Card.Header>
      <Card.Body>
        <CardGroup>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={formData.indoor === "1"}
                  onChange={(e) => {
                    setFormData({ ...formData, indoor: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/indoor.png")}
                  alt="indoor"
                  className="icon"
                  onClick={() => setPulseAnimation(1)}
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulseAnimation={pulseAnimation}
                />
                <p>I would prefer an indoor cat, or I live in a busy area</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="0"
                  checked={formData.indoor === "0"}
                  onChange={(e) => {
                    setFormData({ ...formData, indoor: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/outdoor.png")}
                  alt="outdoor"
                  className="icon"
                  onClick={() => setPulseAnimation2(1)}
                  onAnimationEnd={() => setPulseAnimation2(0)}
                  pulseAnimation={pulseAnimation2}
                />
                <p>
                  I can manage a cat that enjoys some time outdoors, and I live
                  in quiet area
                </p>
              </label>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Indoor;
