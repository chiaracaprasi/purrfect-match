import Button from "react-bootstrap/Button";
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="Landing-page d-flex flex-column justify-content-center align-items-center"> 
      <p className="fs-2 text">Connecting humans to their purrfect owners</p>
      <Button href="/match" variant="secondary" size="lg" className="fs-4 text">
        Find Your Purrfect Match
      </Button>
    </div>
  );
};

export default LandingPage;
