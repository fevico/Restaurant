import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import '../../asset/css/Main.css';
import { Link } from "react-router-dom";
import Logo from "../../asset/images/logo.png";

const Navigation = () => {
    return(
<div>
<Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand> <Link to="/"> <img src={Logo}></img> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" className="mainmenu" > Home </Link> </Nav.Link>
            <Nav.Link> <Link to="/menu" className="mainmenu" > Menu </Link> </Nav.Link>
            <Nav.Link> <Link to="/about" className="mainmenu" > About </Link> </Nav.Link>
            <Nav.Link> <Link to="/contact" className="mainmenu" > Contact </Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    )
}

export default Navigation;