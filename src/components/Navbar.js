import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavMenu() {
  return (
    <Navbar variant="dark" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">🐱 Purrfect Match</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cat-facts">Cat Facts</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="about/team">The Team</NavDropdown.Item>
              <NavDropdown.Item href="about/something">
                The Project
              </NavDropdown.Item>
              <NavDropdown.Item href="about/somethingelse">
                Something else
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                target="blank"
                href="https://github.com/chiaracaprasi/purrfect-match"
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
