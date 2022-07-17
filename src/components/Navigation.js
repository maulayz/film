import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Film</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#daftar-genre">Daftar Film</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
