import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Grooming({ formData, setFormData }) {
  const [pulseanimation, setPulseanimation] = useState(0);
  const [pulseanimation2, setPulseanimation2] = useState(0);
  const [pulseanimation3, setPulseanimation3] = useState(0);

  return (
    <Card>
      <Card.Header>
        How much time can you spend on grooming your cat?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={formData.grooming === "1"}
                  onChange={(e) => {
                    setFormData({ ...formData, grooming: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/grooming-1.png")}
                  alt="low grooming"
                  className="icon"
                  onClick={() => setPulseanimation(1)}
                  onAnimationEnd={() => setPulseanimation(0)}
                  pulseanimation={pulseanimation}
                />
                <p>Not much time - less than 30 min a week</p>
              </label>
            </Card.Body>
          </Card>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={formData.grooming === "2"}
                  onChange={(e) => {
                    setFormData({ ...formData, grooming: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/grooming-2.png")}
                  alt="medium grooming"
                  className="icon"
                  onClick={() => setPulseanimation2(1)}
                  onAnimationEnd={() => setPulseanimation2(0)}
                  pulseanimation={pulseanimation2}
                />
                <p>Some time - up to 1 hr a week</p>
              </label>
            </Card.Body>
          </Card>
          <p></p>
          <Card className="choice-card">
            <Card.Body>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={formData.grooming === "3"}
                  onChange={(e) => {
                    setFormData({ ...formData, grooming: e.target.value });
                  }}
                />
                <img
                  src={require("../icons/grooming-3.png")}
                  alt="high grooming"
                  className="icon"
                  onClick={() => setPulseanimation3(1)}
                  onAnimationEnd={() => setPulseanimation3(0)}
                  pulseanimation={pulseanimation3}
                />
                <p>Lots of time! - more than 1 hr a week</p>
              </label>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default Grooming;
