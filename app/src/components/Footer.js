import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { AiFillHeart } from "react-icons/ai";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Newsletter />
          <Col sm={6}>
            <img src={logo} alt='logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/joeyorofino/'>
                <img src={navIcon1} alt='LinkedIn' />
              </a>
              <a href='https://github.com/jorofino3'>
                <img src={navIcon2} alt='GitHub' />
              </a>
              <a href='https://www.instagram.com/joeyorofino/'>
                <img src={navIcon3} alt='Instagram' />
              </a>
            </div>
            <p className='copyright'>
              All Rights Reserved &copy; {new Date().getFullYear()}
              <br />
              Made with <AiFillHeart /> by Joey Orofino
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
