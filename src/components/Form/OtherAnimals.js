import React from "react";
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
          src={require("./radio-icons/other-cat.png")}
          alt="indoor"
          className="icon"
        />
      );
    } else if (index === 1) {
      return (
        <img
          src={require("./radio-icons/other-dog.png")}
          alt="indoor"
          className="icon"
        />
      );
    } else {
      return (
        <img
          src={require("./radio-icons/other-small.png")}
          alt="indoor"
          className="icon"
        />
      );
    }
  };

  return (
    <Card>
      <Card.Header>
        Do you have any other animals, or do they frequently visit your home?
      </Card.Header>
      <Card.Body>
        <CardGroup>
          {animalOptions.map((animal, index) => (
            <div key={index}>
              <Card>
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
