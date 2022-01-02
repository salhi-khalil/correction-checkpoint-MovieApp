import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
function navbar() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">SERIES</Nav.Link>
      <Nav.Link href="#pricing">ANIM/Cartoon</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default navbar
