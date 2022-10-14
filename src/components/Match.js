import React, { useState } from "react";
import Form from "./Form/Form";
import { Spinner } from "react-bootstrap";
import axios from "axios";

function Match() {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const result = await axios({
        method: "post",
        url: "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/cat_matches",
        data: { ...formData },
      });
      console.log(result.data);
    } catch (exceptionError) {
      console.log(exceptionError);
    } finally {
      setLoading(false);
    }
    alert(`Submitted`);
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
    return <CatList />;
  }
}

export default Match;
