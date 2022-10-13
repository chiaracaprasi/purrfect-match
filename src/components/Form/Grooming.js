import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Grooming({ formData, setFormData }) {
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
                  src={require("./radio-icons/grooming-1.png")}
                  alt="indoor"
                  className="icon"
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
                  src={require("./radio-icons/grooming-2.png")}
                  alt="indoor"
                  className="icon"
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
                  src={require("./radio-icons/grooming-3.png")}
                  alt="indoor"
                  className="icon"
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
