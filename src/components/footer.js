import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function navbar() {
  let date = new Date().getFullYear();
  return (
    <Navbar className="sticky-bottom" bg="dark">
      <Container>
        <Container>
          <div className="copyright">
            <strong>
              <a
                className="linkFM"
                href="https://fiivemedia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiive Media
              </a>
            </strong>{" "}
            &copy; {date}
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}
