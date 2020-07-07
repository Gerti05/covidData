import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = (props) => {
    let date = new Date().getFullYear();
    return (
      <div>
        <Navbar bg="dark" className={props.footer}>
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
      </div>
    );
  }

export default Footer;
