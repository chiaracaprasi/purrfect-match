import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Grooming({ formData, setFormData }) {
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [pulseAnimation2, setPulseAnimation2] = useState(0);
  const [pulseAnimation3, setPulseAnimation3] = useState(0);

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
                  onClick={() => setPulseAnimation(1)}
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulseAnimation={pulseAnimation}
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
                  onClick={() => setPulseAnimation2(1)}
                  onAnimationEnd={() => setPulseAnimation2(0)}
                  pulseAnimation={pulseAnimation2}
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
                  onClick={() => setPulseAnimation3(1)}
                  onAnimationEnd={() => setPulseAnimation3(0)}
                  pulseAnimation={pulseAnimation3}
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
