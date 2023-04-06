import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resume from "../assets/img/JoeyOrofinoResume.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Technical Lead",
    "Teaching Assistant",
    "Proud cat dad",
  ];
  const maxSpeed = 75;
  const minSpeed = 160;
  let TYPING_SPEED =
    Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed; //inversely proportional to typing speed
  const [delta, setDelta] = useState(TYPING_SPEED);
  const period = 3000; //time passed between each word in rotation

  //types and deletes animated text
  useEffect(() => {
    //updates the text
    let ticker = setInterval(() => {
      tick();
    }, delta);
    //once the interval is set with the component mounted, it will clear the interval when the component unmounts
    return () => {
      setDelta(TYPING_SPEED); //sets the typing speed after every letter typed

      clearInterval(ticker); //clears the interval when the component unmounts
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    //delete the twice as fast (subject to change)
    if (isDeleting) {
      //this logarithmically increases the speed of the delete: change to be a constant delta speed
      setDelta((prevDelta) => 200);
    }

    //edge cases
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    //plug in different animation
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {"I'm Joey, I'm a"}
                    <span className='wrap'> {text} </span>
                  </h1>
                  <p>
                    {" "}
                    A Computer Science student in my third year at Georgia Tech.
                    I am passionate about Artificial intelligence, HCI, and Web
                    Development. I am striving to make a meaningful impact
                    through designing, building, and evaluating systems that
                    will solve environmental, social, and community issues.{" "}
                  </p>

                  <a
                    href={resume}
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                  >
                    <button>
                      Resume{" "}
                      <FiArrowDownCircle className='hvr-icon-down' size={20} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Astro' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
