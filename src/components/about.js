import React from "react";
import Nav from "./navbar";
import { Container, Jumbotron } from "react-bootstrap";

export default function about() {
  return (
    <div>
      <Nav />
      <Container>
        <Jumbotron fluid className="about-form">
          <Container>
            <h2 className="text">About</h2>
            <p>
              Changed
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}
