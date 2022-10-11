import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ProgressBar } from "react-bootstrap";
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
    otherAnimals: [],
    grooming: "1",
    energy: "1",
    social: "1",
  });

  const questions = [
    "Your Home",
    "Your Family",
    "Grooming",
    "Energy",
    "Social",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Indoor formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <>
          <Children formData={formData} setFormData={setFormData} />
          <OtherAnimals formData={formData} setFormData={setFormData} />
        </>
      );
    } else if (page === 2) {
      return <Grooming formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Energy formData={formData} setFormData={setFormData} />;
    } else {
      return <Social formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = () => {
    alert(`Submitted`);
    console.log(formData);
  };

  const now =
    page === 0 ? 20 : page === 1 ? 40 : page === 2 ? 60 : page === 3 ? 80 : 100;

  return (
    <Card style={{ width: "40%" }} className="mx-auto">
      <Card.Body>
        <div className="progressBar">
          <ProgressBar animated now={now} label={`${now}%`} />
        </div>
        <div className="header">
          <h1>{questions[page]}</h1>
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
              if (page === questions.length - 1) {
                handleSubmit();
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === questions.length - 1 ? "Match Me!" : "Next"}
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Form;
