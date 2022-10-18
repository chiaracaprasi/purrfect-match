import { Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import axios from "axios";

const AllCats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/all_cats"
    );
    let allCats = [];
    for (let [key, value] of Object.entries(data)) {
      allCats.push(value[0]);
    }
    setCats(allCats);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <h1 className="p-4 fs-2 text">All Cats</h1>
      <div className="min-vh-50">
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <CatList cats={cats} />
        )}
      </div>
    </>
  );
};

export default AllCats;
