import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import NavMenu from './components/Navbar';
import Card from "react-bootstrap/Card";


function App() {
  const [ title, setTitle ] = useState(undefined);
  const [ cardSelected, setCardSelected ] = useState(undefined);

  const handleClick = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      const responseJson = await response.json();
      setTitle(responseJson.title);
    } catch(error) {
      console.error(error);
    }
  }

  const handleCardClick = (cardNumber) => {
    setCardSelected(cardNumber);
  } 

  return (
    <>
      <div className="App">
        <NavMenu></NavMenu>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Connecting humans to their purrfect owners</p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleClick}
            style={{ backgroundColor: "#E99D2E" }}
            // style={{ borderColor: "#D9A15C" }}
          >
            Find Your Purrfect Match
          </Button>

          <Card
            style={{ width: "18rem" }}
            as={Button}
            bg={cardSelected === 1 ? "primary" : "secondary"}
            onClick={() => handleCardClick(1)}
          >
            {/* <Card.Img variant="top" src="" /> */}
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
            {/* <Card.Img variant="top" src="" /> */}
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </header>
        {title && <div>This is a title: {title} </div>}
        {/* {title !== undefined ? <div>This is a title: {title} </div> : ""} */}
      </div>
    </>
  );
}

export default App;
