import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Form.css";
import Indoor from "./Indoor";
import Children from "./Children";
import OtherAnimals from "./OtherAnimals";
import Grooming from "./Grooming";
import Energy from "./Energy";
import Social from "./Social";

function Form({ callbackSubmit }) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    indoor: "1",
    children: "1",
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

  const now =
    page === 0 ? 0 : page === 1 ? 25 : page === 2 ? 50 : page === 3 ? 75 : 100;

  return (
    <Card style={{ width: "70%" }} className="mx-auto m-5 p-1">
      <Card.Body>
        <div className="progressBar">
          <ProgressBar now={now} label={`${now}%`} />
        </div>
        <div className="header p-2 mt-3">
          <h1>{questions[page]}</h1>
        </div>

        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button
            className="m-2 mt-3"
            variant="outline-primary"
            disabled={page === 0}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Prev
          </Button>{" "}
          <Button
            className="m-2 mt-3"
            variant="outline-primary"
            onClick={() => {
              if (page === questions.length - 1) {
                callbackSubmit(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === questions.length - 1 ? "Match Me!" : "Next"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Form;
