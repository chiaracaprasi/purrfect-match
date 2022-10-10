import React from "react";

function OtherAnimals({ formData, setFormData }) {
  const animalOptions = ["Cat", "Dog", "Small Animals e.g. guinea pig, bird"];

  const handleCheck = (chosenAnimalIndex) => {
    const currentAnimals = formData.otherAnimals;
    const currentChoiceIndex = currentAnimals.indexOf(chosenAnimalIndex);

    if (currentChoiceIndex === -1) {
      currentAnimals.push(chosenAnimalIndex);
    } else {
      currentAnimals.splice(currentChoiceIndex, 1);
    }
    setFormData({ ...formData, otherAnimals: currentAnimals });
  };

  return (
    <div className="otheranimals-container">
      <h4>
        Do you have any other animals, or do they frequently visit your home?
      </h4>
      <div className="list-container">
        {animalOptions.map((animal, index) => (
          <div key={index}>
            <input
              value={index}
              type="checkbox"
              checked={
                formData.otherAnimals.indexOf(index) === -1 ? false : true
              }
              onChange={() => handleCheck(index)}
            />
            <span>{animal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherAnimals;
