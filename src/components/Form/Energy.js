import React from "react";

function Energy({ formData, setFormData }) {
  return (
    <div className="energy-container">
      <h4>How much time do you have to spend playing with your cat?</h4>
      <label>Not much time - less than 15 min a day
        <input 
            type="radio"
            value="1"
            checked={formData.energy === "1"}
            onChange={(e) => {
                setFormData({ ...formData, energy: e.target.value });
              }}      
        /> 
      </label>
              <p></p>
      <label>Some time - 15 to 45 min a day
        <input 
            type="radio"
            value="2"
            checked={formData.energy === "2"}
            onChange={(e) => {
                setFormData({ ...formData, energy: e.target.value });
              }}
        /> 
      </label>
              <p></p>
      <label>Lots of time! - more than 45 min a day
        <input 
            type="radio"
            value="3"
            checked={formData.energy === "3"}
            onChange={(e) => {
                setFormData({ ...formData, energy: e.target.value });
              }}
        /> 
      </label>
    </div>
  );
}

export default Energy;
