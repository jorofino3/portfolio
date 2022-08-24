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
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          //message sent handling
          console.log(result.text);
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
            <form onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    //gets the input from the first name and sets it to the formDetails.firstName and so on for the other inputs
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='Email'
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                {/* subject to change */}
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone Number'
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) => onFormUpdate("message", e.target.value)}
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
