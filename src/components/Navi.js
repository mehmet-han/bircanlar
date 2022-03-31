import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navi = () => {
  return (
    <>
      <Navbar className="bg-warning text-dark">
        <Container className="d-flex justify-content text-dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav.Link href="/login" className="d-flex justify-content-end text-dark">
Login</Nav.Link>
          
        </Container>
      </Navbar>
    </>
  );
};

export default Navi;
