import React from "react";
import Nav from "./navbar";
import Footer from "./footer";
import { Container, Jumbotron, Button } from "react-bootstrap";

export default function about() {
  return (
    <div>
      <Nav />
      <Container>
        <Jumbotron fluid className="about-form round ">
          <Container>
            <h2 className="text mb-3">About</h2>
            <p className="text2">
              CovidWorldata was created to provide you with the
              most up to date Covid-19 statistics from around the globe. Our
              website uses <a className="link" href="https://covid19api.com/" target="_blank" rel="noopener noreferrer">covid19api.com</a> as our API provider, which uses the Johns Hopkins
              CSSE as its data source.
            </p>
            <Button variant="danger" href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest" target="_blank" rel="noopener noreferrer">API info</Button>
          </Container>
        </Jumbotron>
      </Container>
      <Footer footer="fixed-bottom"/>
    </div>
  );
}
