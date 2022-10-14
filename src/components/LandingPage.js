import Button from "react-bootstrap/Button";

const LandingPage = () => {
  return (
    <div>
      <header className="App-header">
        <p>Connecting humans to their purrfect owners</p>
        <Button href="/match" variant="secondary" size="lg">
          Find Your Purrfect Match
        </Button>
      </header>
    </div>
  );
};

export default LandingPage;
