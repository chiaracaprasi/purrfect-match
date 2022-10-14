import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import CatList from "./CatList";
import Form from "./Form/Form";

function Match() {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/cat_matches";

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const result = await axios.post(
        "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/cat_matches",
        formData
      );
      let allCats = [];
      for (let [key, value] of Object.entries(result.data)) {
        allCats.push(value[0]);
      }
      setCats(allCats);

      console.log(allCats);
    } catch (exceptionError) {
      console.log(exceptionError);
    } finally {
      setLoading(false);
    }
  };

  if (loading === true) {
    return (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  }

  if (cats === null) {
    return <Form callbackSubmit={handleSubmit} />;
  } else {
    return <CatList cats={cats} />;
  }
}

export default Match;
