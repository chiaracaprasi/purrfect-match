import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Indoor({ formData, setFormData }) {
  const [pulseRing, setPulseRing] = useState(0);
  const [pulseRing2, setPulseRing2] = useState(0);

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
                  onClick={() => setPulseRing(1)}
                  onAnimationEnd={() => setPulseRing(0)}
                  pulseRing={pulseRing}
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
                  onClick={() => setPulseRing2(1)}
                  onAnimationEnd={() => setPulseRing2(0)}
                  pulseRing={pulseRing2}
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
