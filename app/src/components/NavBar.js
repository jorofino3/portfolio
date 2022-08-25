import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import { FiGithub } from "react-icons/fi";
// import { IconContext } from "react-icons";

import "../App.css";
// import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const logo = "{() => joey}";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // <Router>
    <Navbar expand='md' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='#home' className='logo'>
          <div> {logo} </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/joeyorofino/'>
                <img src={navIcon1} alt='LinkedIn' title='LinkedIn' />
              </a>
              <a href='https://github.com/jorofino3'>
                <img src={navIcon2} alt='GitHub' />
              </a>
              <a href='https://www.instagram.com/joeyorofino/'>
                <img src={navIcon3} alt='Instagram' />
              </a>
            </div>
            <button className='vvd'>
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
