import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { dummy_data } from "../DummyData";
import Axios from "axios";

const RandomCatFact = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
     Axios.get("https://catfact.ninja/fact").then((res) => {
       setCatFact(res.data.fact);
     });
  }

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <>
      <h1 class="p-4">Cat facts</h1>
      <p class="p-4">{catFact}</p>
      <Button variant="secondary" onClick={fetchCatFact}>
        Random Cat Fact
      </Button>
    </>
  );
};

export default RandomCatFact;
