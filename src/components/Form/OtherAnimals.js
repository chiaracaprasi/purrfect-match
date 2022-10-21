import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function OtherAnimals({ formData, setFormData }) {
  const animalOptions = ["Cat", "Dog", "Small Animals"];

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

  const showAnimal = (index) => {
    if (index === 0) {
      return (
        <img
          src={require("../icons/other-cat.png")}
          alt="cat"
          className="icon"
        />
      );
    } else if (index === 1) {
      return (
        <img
          src={require("../icons/other-dog.png")}
          alt="dog"
          className="icon"
        />
      );
    } else {
      return (
        <img
          src={require("../icons/other-small.png")}
          alt="indoor"
          className="icon"
        />
      );
    }
  };

  const [radioStatus, setRadioStatus] = useState(0);
  const radioHandler = (status) => {
    setRadioStatus(status);

    if (status === 0) {
      setFormData({ ...formData, otherAnimals: [] });
    }
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
                  alt="no-animals"
                  className="icon"
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
