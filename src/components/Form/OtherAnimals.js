import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function OtherAnimals({ formData, setFormData }) {
  const animalOptions = ["Cat", "Dog", "Small Animals"];
  const [pulseAnimation, setPulseAnimation] = useState(0);
  const [pulseAnimation2, setPulseAnimation2] = useState(0);
  const [pulseAnimation3, setPulseAnimation3] = useState(0);
  const [pulseAnimation4, setPulseAnimation4] = useState(0);
  const [pulseAnimation5, setPulseAnimation5] = useState(0);

  const handleCheck = (index) => {
    const currentAnimals = formData.otherAnimals;
    const currentChoiceIndex = currentAnimals.indexOf(index);

    if (currentChoiceIndex === -1) {
      currentAnimals.push(index);
    } else {
      currentAnimals.splice(currentChoiceIndex, 1);
    }
    setFormData({ ...formData, otherAnimals: currentAnimals });
  };

  const [radioStatus, setRadioStatus] = useState(0);
  const radioHandler = (status) => {
    setRadioStatus(status);

    if (status === 0) {
      setFormData({ ...formData, otherAnimals: [] });
    }
  };

  const showAnimal = (index) => {
    return index === 0 ? (
      <img
        src={require("../icons/other-cat.png")}
        alt="cat"
        className="icon"
        onClick={() => setPulseAnimation3(1)}
        onAnimationEnd={() => setPulseAnimation3(0)}
        pulseAnimation={pulseAnimation3}
      />
    ) : index === 1 ? (
      <img
        src={require("../icons/other-dog.png")}
        alt="dog"
        className="icon"
        onClick={() => setPulseAnimation4(1)}
        onAnimationEnd={() => setPulseAnimation4(0)}
        pulseAnimation={pulseAnimation4}
      />
    ) : (
      <img
        src={require("../icons/other-small.png")}
        alt="other small animals"
        className="icon"
        onClick={() => setPulseAnimation5(1)}
        onAnimationEnd={() => setPulseAnimation5(0)}
        pulseAnimation={pulseAnimation5}
      />
    );
  };

  return (
    <Card>
      <Card.Header>
        Do you have any other animals, or do they frequently visit your home?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          <div className="mx-auto">
            <Card className="choice-card">
              <label>
                <input
                  type="radio"
                  name="release"
                  value="0"
                  checked={radioStatus === 0}
                  onChange={() => radioHandler(0)}
                />
                <img
                  src={require("../icons/no-animals.png")}
                  alt="no-animals"
                  className="icon"
                  onClick={() => setPulseAnimation(1)}
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulseAnimation={pulseAnimation}
                />
                <p>No</p>
              </label>
            </Card>
          </div>

          <div className="mx-auto">
            <Card className="choice-card">
              <label>
                <input
                  type="radio"
                  name="release"
                  value="1"
                  checked={radioStatus === 1}
                  onChange={() => radioHandler(1)}
                />
                <img
                  src={require("../icons/yes-animals.png")}
                  alt="yes-animals"
                  className="icon"
                  onClick={() => setPulseAnimation2(1)}
                  onAnimationEnd={() => setPulseAnimation2(0)}
                  pulseAnimation={pulseAnimation2}
                />
                <p>Yes</p>
              </label>
            </Card>
          </div>

          <div className="container"></div>
          {animalOptions.map((animal, index) => (
            <div
              key={index}
              className="mx-auto"
              style={{ display: radioStatus === 1 ? "block" : "none" }}
            >
              <Card className="choice-card">
                <Card.Body>
                  <label>
                    <input
                      value={index}
                      type="checkbox"
                      checked={
                        formData.otherAnimals.indexOf(index) === -1
                          ? false
                          : true
                      }
                      onChange={() => handleCheck(index)}
                    />
                    {showAnimal(index)}
                    <p>{animal}</p>
                  </label>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </Card.Body>
    </Card>
  );
}

export default OtherAnimals;
