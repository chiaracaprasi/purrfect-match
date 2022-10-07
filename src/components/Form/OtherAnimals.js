import React from "react";

function OtherAnimals({ formData, setFormData }) {
  return (
    <div className="otheranimals-container">
      <h4>Do you have any other animals, or do they frequently visit your home?</h4>


      <label>Small animals e.g. guinea pigs, birds
        <input 
            type="checkbox"
            value="small"
            onChange={(e) => {
              setFormData({ ...formData, otheranimals: e.target.value });
            }}      
        /> 
      </label>
              <p></p>
      <label>Cat 
        <input 
            type="checkbox"
            value="cat"
            onChange={(e) => {
              setFormData({ ...formData, otheranimals: e.target.value });
            }}
        /> 
      </label>
            <p></p>
      <label>Dog 
        <input 
            type="checkbox"
            value="dog"
            onChange={(e) => {
              setFormData({ ...formData, otheranimals: e.target.value });
            }}
        /> 
            </label>
    </div>
  );
}

export default OtherAnimals;
