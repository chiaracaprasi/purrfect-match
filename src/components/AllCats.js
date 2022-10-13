import { Button, Spinner, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import Axios from "axios";
import axios from "axios";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

// put all states at the beginning
const AllCats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState({});

  const fetchCats = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "http://68d0752c1ac8.1e732e4d.hbtn-cod.io:5000/app/all_cats"
    );
    // console.log(data);
    for (let [key, value] of Object.entries(data)) {
      setCats(value[0]);
      let nameList = value[0].name;
      let sex = value[0].sex;
      let breed = value[0].breed;
      let blurb = value[0].blurb;
      

   
 
    }
    // for (let [key, value] of data)
    // {
    //   console.log(value);
    // }
    
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
          <p>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={cats.photo} />
              <Card.Body>
                <Card.Title>{cats.name}</Card.Title>
                <Card.Text>
                  <ul>

                    <li>Age: {cats.dob} </li>
                    <li>Gender: {cats.sex}</li>
                    <li>Breed: {cats.breed}</li>
                    <li>About: {cats.blurb}</li>
                  </ul>
                </Card.Text>
                <Button variant="secondary">Match</Button>
              </Card.Body>
            </Card>
          </p>
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
