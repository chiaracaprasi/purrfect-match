import React from "react";

function Social({ formData, setFormData }) {
  return (
    <div className="social-container">
      <h4>How often is someone at home during the day?</h4>
      <label>More often away than at home - 1-2 days a week
        <input 
            type="radio"
            value="1"
            checked={formData.social === "1"}
            onChange={(e) => {
                setFormData({ ...formData, social: e.target.value });
              }}
        /> 
      </label>
             <p></p>
      <label>A lot of the time - 3-4 days a week
        <input 
            type="radio"
            value="2"
            checked={formData.social === "2"}
            onChange={(e) => {
                setFormData({ ...formData, social: e.target.value });
              }}
        /> 
      </label>
              <p></p>
              <label>Most of the time - 5+ days a week
        <input 
            type="radio"
            value="3"
            checked={formData.social === "3"}
            onChange={(e) => {
                setFormData({ ...formData, social: e.target.value });
              }}      
        /> 
      </label>
      
    </div>
  );
}

export default Social;
