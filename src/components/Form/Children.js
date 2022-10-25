import React, { useState} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Form.css";

function Children({ formData, setFormData }) {
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [pulseAnimation2, setPulseAnimation2] = useState(0);

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
                  src={require("../icons/children.png")}
                  alt="children"
                  className="icon"
                  onClick={() => setPulseAnimation(1)}
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulseAnimation={pulseAnimation}
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
                  src={require("../icons/no-children.png")}
                  alt="no children"
                  className="icon"
                  onClick={() => setPulseAnimation2(1)}
                  onAnimationEnd={() => setPulseAnimation2(0)}
                  pulseAnimation={pulseAnimation2}
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
