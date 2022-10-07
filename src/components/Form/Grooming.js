import React from "react";

function Grooming({ formData, setFormData }) {
  return (
    <div className="grooming-container">
      <h4>How much time can you spend on grooming your cat?</h4>
      <label>Not much time - less than 30 min a week
        <input 
            type="radio"
            value="1"
            checked={formData.grooming === "1"}
            onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}      
        /> 
      </label>
              <p></p>
      <label>Some time - up to 1 hr a week
        <input 
            type="radio"
            value="2"
            checked={formData.grooming === "2"}
            onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}
        /> 
      </label>
              <p></p>
      <label>Lots of time! - more than 1 hr a week
        <input 
            type="radio"
            value="3"
            checked={formData.grooming === "3"}
            onChange={(e) => {
                setFormData({ ...formData, grooming: e.target.value });
              }}
        /> 
      </label>
    </div>
  );
}

export default Grooming;
