import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Indoor({ formData, setFormData }) {
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
                  src={require("./radio-icons/indoor.png")}
                  alt="indoor"
                  className="icon"
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
                  src={require("./radio-icons/outdoor.png")}
                  alt="indoor/outdoor"
                  className="icon"
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
