import { Button, Spinner, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MatchedCats from "./MatchedCats";
import { dummy_data } from "../DummyData";
import Axios from "axios";

// put all states at the beginning
const CatBreedInfo = () => {
  // initial state - function returned by usestate to update state //
  const [isLoading, setIsLoading] = useState(false);
  const [breedsInfo, setBreedsInfo] = useState([]);

  const fetchBreedsInfo = () => {
    setIsLoading(true);
    Axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
      let storedBreeds = res.data;
      // let breed = [];
      let breeds = [];
      storedBreeds.forEach((storedBreed) => {
        // breed = storedBreed.name;
        breeds.push(storedBreed.name);
      });
      setBreedsInfo(breeds);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchBreedsInfo();
  }, []);

  return (
    <div className="min-vh-100 bg-info">
      <h1 className="p-4">Cat Breed Info</h1>
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
          <MatchedCats breeds={breedsInfo} />
        )}
      </div>
      <Button
        variant="secondary"
        onClick={fetchBreedsInfo}
        disabled={isLoading}
      >
        Breed Info
      </Button>
      {/* <div class="d-flex justify-content-between flex-wrap p-5">{listItems}</div> */}
    </div>
  );
};

export default CatBreedInfo;
