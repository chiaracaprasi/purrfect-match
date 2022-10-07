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

  // const renderTestCard = (data) => {
  //   return (
  //     <p>
  //       <Card style={{ width: "18rem" }}>
  //         <Card.Img variant="top" src={cat.image} />
  //         <Card.Body>
  //           <Card.Title>{cat.name}</Card.Title>
  //           <Card.Text>
  //             <ul>
  //               <li>Age: {cat.age}</li>
  //               <li>Gender: {cat.gender}</li>
  //               <li>About: {cat.bio}</li>
  //             </ul>
  //           </Card.Text>
  //           <Button variant="secondary">Match</Button>
  //         </Card.Body>
  //       </Card>
  //     </p>
  //   );
  // };

  // const listItems = dummy_data.map((cat) => renderCatCard(cat));

  return (
    <>
      <h1 class="p-4">Cat facts</h1>
      <p class="p-4">{catFact}</p>
      <Button variant="secondary" onClick={fetchCatFact}>
        Random Cat Fact
      </Button>

      {/* <div class="d-flex justify-content-between flex-wrap p-5">{listItems}</div> */}
    </>
  );
};

export default RandomCatFact;
