import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import MatchedCats from "./MatchedCats";
import Form from "./Form/Form";

function Match() {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const result = await axios.post(
        "http://b3549e1f1849.244fe182.hbtn-cod.io:5000/app/cat_matches",
        formData
      );
      let matchedCats = [];
      for (let [key, value] of Object.entries(result.data)) {
        matchedCats.push(value[0]);
      }
      setCats(matchedCats);
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
    return <MatchedCats cats={cats} />;
  }
}

export default Match;
