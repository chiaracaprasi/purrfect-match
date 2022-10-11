import React from "react";

function OtherAnimals({ formData, setFormData }) {
  const animalOptions = ["Cat", "Dog", "Small Animals e.g. guinea pig, bird"];

  const handleCheck = (index) => {
    const currentAnimals = formData.otherAnimals;
    const currentChoiceIndex = currentAnimals.indexOf(index);

    if (currentChoiceIndex === -1) {
      currentAnimals.push(index);
    } else {
      currentAnimals.splice(currentChoiceIndex, 1);
    }
    console.log(currentAnimals);
    if (currentAnimals.includes(0)) {
      currentAnimals.push("cat");
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
