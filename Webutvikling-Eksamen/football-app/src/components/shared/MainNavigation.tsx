import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Row className="align-items-center justify-content-start">
          <Col xs={3} sm={2}>
            <img
              src={require("../../assets/images/premier-league-5.png").default}
              alt="Premier League Logo"
              width="55px"
              height="70px"
              className="me-5"
            />
          </Col>
          <Col xs={9} sm={4} className="mt-xs-10">
            <Navbar.Brand className="pl-100" as={Link} to="/">
              Premier League
            </Navbar.Brand>
          </Col>
          <Col xs={12} sm={6}>
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
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
