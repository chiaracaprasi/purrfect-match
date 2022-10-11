import React, { useState } from "react";
import Indoor from "./Indoor";
import Children from "./Children";
import OtherAnimals from "./OtherAnimals";
import Grooming from "./Grooming";
import Energy from "./Energy";
import Social from "./Social";
import { ProgressBar } from "react-bootstrap";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    indoor: "y",
    children: "y",
    otherAnimals: [],
    grooming: "1",
    energy: "1",
    social: "1",
  });

  const formTitles = [
    "Your home",
    "Your Family",
    "Other Animals",
    "Grooming",
    "Playtime",
    "Social",
  ];
  // const pages = ["Indoor", "Children", "OtherAnimals", "Grooming", "Energy", "Social"]

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

  let percentage =
    page === 0
      ? 16
      : page === 1
      ? 32
      : page === 2
      ? 48
      : page === 3
      ? 64
      : page === 4
      ? 81
      : 100;

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="progressBar">
          <ProgressBar now={percentage} />
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === formTitles.length - 1) {
                alert("submitted");
                console.log(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Match Me!" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
