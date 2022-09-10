import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";
import { useMediaQuery } from "react-responsive";

export const Newsletter = () => {
  const form = useRef();
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });
  let mobileStyle = "newsletter-bx wow slideInUp";
  if (isMobile) {
    mobileStyle = "newsletter-mobile";
  }
  const sendEmail = (e) => {
    e.preventDefault();
    // const input = document.getElementById("input");
    // input.value = "";
    emailjs
      .sendForm(
        "service_rxr3g3t",
        "sub_template",
        form.current,
        "5df6uhFv4n0SbjGBS"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Thank you for subscribing to my Newsletter!");
        },
        (error) => {
          //error handling
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "animate__animated animate__pulse" : ""}>
          <Col lg={12}>
            <div className={mobileStyle}>
              <Row>
                <Col lg={12} md={6} xl={5}>
                  <h3>
                    Subscribe to my Newsletter<br></br> & Never miss my latest
                    updates!
                  </h3>
                </Col>
                <Col md={6} xl={7} sm={4}>
                  <form onSubmit={sendEmail} ref={form}>
                    <div className='new-email-bx'>
                      <input
                        type='text'
                        id='input'
                        name='email'
                        placeholder='Email'
                        required
                      />
                      <button type='submit'>Submit</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </div>
      )}
    </TrackVisibility>
  );
};
