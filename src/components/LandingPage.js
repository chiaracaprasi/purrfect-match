import Button from "react-bootstrap/Button";

const LandingPage = () => {
  return (
    <div>
      <header className="App-header">
        <p className="fs-2 text">Connecting humans to their purrfect owners</p>
        <Button
          href="/match"
          variant="secondary"
          size="lg"
          className="fs-4 text"
        >
          Find Your Purrfect Match
        </Button>
      </header>
    </div>
  );
};

export default LandingPage;
