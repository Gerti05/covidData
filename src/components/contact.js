import React from "react";
import Nav from "./navbar";
import { Container, Col, Form, Button } from "react-bootstrap";

export default function contact() {
  return (
    <div>
      <Nav />
      <Container>
        <Form
          className="contact-form text-center"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Label className="text"><h3>Contact</h3></Form.Label>
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
          <Button variant="success" className="float-center" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
