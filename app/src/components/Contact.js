import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (catagory, value) => {
    //only updates the form details that we have specified in the arguments (...)
    setFormDetails({ ...formDetails, [catagory]: value });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm(
        "service_rxr3g3t",
        "template_q85awpe",
        form.current,
        "5df6uhFv4n0SbjGBS"
      )
      .then(
        (result) => {
          //message sent handling
          alert("Email sent :)");
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
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    required
                    //gets the input from the first name and sets it to the formDetails.firstName and so on for the other inputs
                    // onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Email'
                    // onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} md={12} className='px-1'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Subject'
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} md={12} className='px-1'>
                  <textarea
                    rows='6'
                    name='message'
                    placeholder='Message'
                    // onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        //changes styles bases on if the message sends or not
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
