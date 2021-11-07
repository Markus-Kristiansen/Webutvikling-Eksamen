import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img
          src={require("../../assets/images/premier-league-5.png").default}
          alt="Premier League Logo"
          width="55px"
          height="70px"
          className="me-5"
        />
        <Navbar.Brand className="pl-100" as={Link} to="/">
          Premier League
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/players">
            Players
          </Nav.Link>
          <Nav.Link as={Link} to="/teams">
            Teams
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
