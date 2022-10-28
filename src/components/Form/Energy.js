import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Energy({ formData, setFormData }) {
  const [pulseanimation, setPulseanimation] = useState(0);
  const [pulseanimation2, setPulseanimation2] = useState(0);
  const [pulseanimation3, setPulseanimation3] = useState(0);

  return (
    <Card>
      <Card.Header>
        How much time do you have to spend playing with your cat?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={formData.energy === "1"}
                  onChange={(e) => {
                    setFormData({ ...formData, energy: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/energy-1.png")}
                  alt="low energy"
                  className="icon"
                  onClick={() => setPulseanimation(1)}
                  onAnimationEnd={() => setPulseanimation(0)}
                  pulseanimation={pulseanimation}
                />
                <p>Not much time - less than 15 min a day</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={formData.energy === "2"}
                  onChange={(e) => {
                    setFormData({ ...formData, energy: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/energy-2.png")}
                  alt="medium energy"
                  className="icon"
                  onClick={() => setPulseanimation2(1)}
                  onAnimationEnd={() => setPulseanimation2(0)}
                  pulseanimation={pulseanimation2}
                />
                <p>Some time - 15 to 45 min a day</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={formData.energy === "3"}
                  onChange={(e) => {
                    setFormData({ ...formData, energy: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/energy-3.png")}
                  alt="high energy"
                  className="icon"
                  onClick={() => setPulseanimation3(1)}
                  onAnimationEnd={() => setPulseanimation3(0)}
                  pulseanimation={pulseanimation3}
                />
                <p>Lots of time! - more than 45 min a day</p>
              </label>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Energy;
