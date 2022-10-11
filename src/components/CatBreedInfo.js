import { Button, Spinner, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import { dummy_data } from "../DummyData";
import Axios from "axios";

// put all states at the beginning
const CatBreedInfo = () => {
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
  //   Axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
  //     let storedBreeds = res.data;
  //     for (let i = 0; i < 10; i++){
  //       let breed = storedBreeds[i];
  //       return(breed.name);
  //       // console.log(breed.temperament);

  //     }

  //   });
  // };

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
          <CatList breeds={breedsInfo} />
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
