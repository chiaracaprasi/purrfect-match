import React from "react";

function Indoor({ formData, setFormData }) {

  return (
    <div className="indoor-container">
      <h4>What is your home like?</h4>
      <label>No outdoor space, or on a busy street
        <input 
            type="radio"
            value="y"
            checked={formData.indoor === "y"}
            onChange={(e) => {
                setFormData({ ...formData, indoor: e.target.value });
              }}      
        /> 
      </label>
              <p></p>
      <label>Lots of outdoor space and/or on a quiet street
        <input 
            type="radio"
            value="n"
            checked={formData.indoor === "n"}
            onChange={(e) => {
                setFormData({ ...formData, indoor: e.target.value });
              }}
        /> 
      </label> 
    </div>
  );
}


export default Indoor;
