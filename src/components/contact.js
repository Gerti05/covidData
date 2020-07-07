import React from "react";
import Nav from "./navbar";
import Footer from "./footer";
import { Container, Col, Form, Button, Jumbotron } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Jumbotron fluid className="contact-form pl-5 pr-5 round">
          <Form className="text-center" name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <Form.Label className="text">
              <h3>Contact</h3>
            </Form.Label>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Full Name" type="text" name="name" />
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                name="message"
                as="textarea"
                rows="8"
                placeholder="Your Message"
              />
            </Form.Group>
            <Button
              block
              variant="danger"
              className="float-center"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
      <Footer footer="fixed-bottom"/>
    </div>
  );
};

export default Contact;
