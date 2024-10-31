import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div id="navBar" className="navBar">
      <Navbar variant="dark">
        <Container className="bg_navBar">
          <Navbar.Brand href="/">MOISUSHI</Navbar.Brand>
          <Nav>
            <Nav.Link href=""> Best Seller </Nav.Link>
            <Nav.Link href="#ourMenu"> Our Menu </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
