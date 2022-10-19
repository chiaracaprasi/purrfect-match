import React, { useState } from "react";
import axios from "axios";
import MatchedCats from "./Matched/MatchedCats";
import Form from "./Form/Form";
import "./Matched/MatchedCats.css";

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
      setCats(result.data);
    } catch (exceptionError) {
      console.log(exceptionError);
    } finally {
      setLoading(false);
    }
  };

  if (loading === true) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  if (cats === null) {
    return <Form callbackSubmit={handleSubmit} />;
  } else {
    return <MatchedCats cats={cats} />;
  }
}

export default Match;
