import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const SERVICE_ID = process.env.SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        { SERVICE_ID },
        "template_chfaezj",
        form.current,
        "5df6uhFv4n0SbjGBS"
      )
      .then(
        (result) => {
          //message sent handling
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
            <h2>Get In Touch</h2>
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
