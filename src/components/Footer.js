import Card from "react-bootstrap/Card";
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="fixed-bottom border-0">
        <Card>
          <Card.Body className="pb-3 bg-footer">
            Made with ❤️
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Footer;
