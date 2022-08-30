import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rxr3g3t",
        "email_template",
        form.current,
        "5df6uhFv4n0SbjGBS"
      )
      .then(
        (result) => {
          //message sent handling
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          //error handling
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Me' />
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                //can insert animation here
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInLeft"
                      : ""
                  }
                >
                  <h2>Get In Touch</h2>
                </div>
              )}
            </TrackVisibility>
            <form onSubmit={sendEmail} ref={form}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input type='text' name='name' placeholder='Name' required />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </Col>
                <Col sm={6} md={12} className='px-1'>
                  <input type='text' name='subject' placeholder='Subject' />
                </Col>
                <Col sm={6} md={12} className='px-1'>
                  <textarea
                    rows='6'
                    name='message'
                    placeholder='Message'
                    required
                  ></textarea>
                  <button type='submit'>
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
