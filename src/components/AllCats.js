import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayAllCats from "./DisplayAllCats";

const AllCats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        "http://b3549e1f1849.244fe182.hbtn-cod.io:5000/api/cats/all"
      );
      setCats(result.data);
    } catch (exceptionError) {
      console.log(exceptionError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="min-vh-50"></div>
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </>
      ) : (
        <>
          <h1 className="pt-4 fs-2 text">All Cats</h1>
          <DisplayAllCats cats={cats} />
        </>
      )}
    </>
  );
};

export default AllCats;
