// import logo from './logo.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NavMenu from "./components/Navbar";
import Card from "react-bootstrap/Card";
import { Route } from "react-router-dom";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import SurveyForm from "./components/SurveyForm/SurveyForm"

function App() {
  // const [title, setTitle] = useState(undefined);
  // const [cardSelected, setCardSelected] = useState(undefined);

  // const handleClick = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/2"
  //     );
  //     const responseJson = await response.json();
  //     setTitle(responseJson.title);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleCardClick = (cardNumber) => {
  //   setCardSelected(cardNumber);
  // };

  return (
    <>
      <div className="App">
        <NavMenu></NavMenu>
        <Route path="/">
          <LandingPage />
        </Route>

        {/* <header className="App-header">
          <p>Connecting humans to their purrfect owners</p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleClick}
            // style={{ borderColor: "#D9A15C" }}
          >
            Find Your Purrfect Match
          </Button>

          <Card
            style={{ width: "18rem" }}
            as={Button}
            bg={cardSelected === 1 ? "selected" : "light"}
            onClick={() => handleCardClick(1)}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            as={Button}
            bg={cardSelected === 2 ? "primary" : "secondary"}
            onClick={() => handleCardClick(2)}
          >
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </header> */}
        {/* {title && <div>This is a title: {title} </div>} */}
        {/* {title !== undefined ? <div>This is a title: {title} </div> : ""} */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/survey">
          <SurveyForm />
        </Route>
      </div>
    </>
  );
}

export default App;
