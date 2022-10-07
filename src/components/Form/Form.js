import React, { useState } from "react";
import Indoor from "./Indoor";
import Children from "./Children";
import OtherAnimals from "./OtherAnimals";
import Grooming from "./Grooming";
import Energy from "./Energy";
import Social from "./Social";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        indoor: "y",
        children: "y",
        otheranimals: "none",
        grooming: "1",
        energy:"1",
        social: "1",
    })
 

const FormTitles = ["Your home", "Your Family", "Other Animals", "Grooming", "Playtime", "Social"];

const PageDisplay = () => {
    if (page === 0) {
      return <Indoor formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Children formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
        return <OtherAnimals formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
        return <Grooming formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
        return <Energy formData={formData} setFormData={setFormData} />;
    } else {
      return <Social formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Match Me!" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;