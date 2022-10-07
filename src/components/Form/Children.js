import React from "react";

function Children({ formData, setFormData }) {
  return (
    <div className="children-container">
      <h4>Do you have children under 8, or do they frequently visit your home?</h4>
      <label>Yes
        <input 
            type="radio"
            value="y"
            checked={formData.children === "y"}
            onChange={(e) => {
                setFormData({ ...formData, children: e.target.value });
              }}      
        /> 
      </label>
              <p></p>
      <label>No
        <input 
            type="radio"
            value="n"
            checked={formData.children === "n"}
            onChange={(e) => {
                setFormData({ ...formData, children: e.target.value });
              }}
        /> 
      </label>
    </div>
  );
}

export default Children;
