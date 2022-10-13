import React, { useState } from "react";
import axios from "axios";
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

function Form() {
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

  const handleSubmit = (e) => {
    console.log(formData);
    axios({
      method: "post",
      url: "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/cat_matches",
      data: { ...formData },
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert(`Submitted`);
  };

  const now =
    page === 0 ? 20 : page === 1 ? 40 : page === 2 ? 60 : page === 3 ? 80 : 100;

  return (
    <Card style={{ width: "40%" }} className="mx-auto">
      <Card.Body>
        <div className="progressBar">
          <ProgressBar now={now} label={`${now}%`} />
        </div>
        <div className="header">
          <h1>{questions[page]}</h1>
        </div>

        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button
            variant="primary"
            disabled={page === 0}
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Prev
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => {
              if (page === questions.length - 1) {
                handleSubmit();
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
