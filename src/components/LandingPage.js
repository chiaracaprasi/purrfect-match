
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NavMenu from "./Navbar";
import Card from "react-bootstrap/Card";
import { Route } from "react-router-dom";
import About from "./About";

const LandingPage = () => {

const [title, setTitle] = useState(undefined);

const handleClick = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const responseJson = await response.json();
    setTitle(responseJson.title);
  } catch (error) {
    console.error(error);
  }
};

return (
  <div>
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>Connecting humans to their purrfect owners</p>
      <Button
        href="/survey"
        variant="secondary"
        size="lg"
        onClick={handleClick}
        // style={{ borderColor: "#D9A15C" }}
      >
        Find Your Purrfect Match
      </Button>
    </header>
  </div>
);
}

export default LandingPage;