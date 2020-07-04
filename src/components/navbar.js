import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/noun_virus_3082702.png";

export default function navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="text">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
            /> 
            COVID-19
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="text mr-4 link-hover" to="/about">About</Link>
              <Link className="text link-hover" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
