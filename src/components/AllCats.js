import { Button, Spinner, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import Axios from "axios";
import axios from "axios";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

// put all states at the beginning
const AllCats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/all_cats"
    );
    // console.log(data);
    let allCats = [];
    for (let [key, value] of Object.entries(data)) {
      allCats.push(value[0]);

      // let nameList = value[0].name;
      // let sex = value[0].sex;
      // let breed = value[0].breed;
      // let blurb = value[0].blurb;
    }
    setCats(allCats);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <h1 class="p-4">Cats</h1>
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
      {/* <div> {cats.map(cat => (
        <div> key={cat.id} </div>


      ))} 
      </div> */}
    </>

    //   {/* <Button variant="secondary" onClick={fetchCats}>
    //     Random Cat Fact
    //   </Button>
    //  */}
  );
};

export default AllCats;
