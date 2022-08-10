import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const toRotate = ["Student", "Teaching Assitant", "Web Developer"]; // change

  const [delta, setDelta] = useState(300 - Math.random() * 100); // randomize the speed of the text typed (change faster?)
  const period = 2000; //time passed between each word in rotation

  //types and deletes animated text
  useEffect(() => {
    //interval for when the text gets updated
    let ticker = setInterval(() => {
      tick();
    }, delta);
    //once the interval is set with the component mounted, it will clear the interval when the component unmounts
    return () => {
      clearInterval(ticker);
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
      setDelta((prevDelta) => prevDelta / 2);
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
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {"im joey, i am a "}
                    <span className='wrap'> {text} </span>
                  </h1>
                  <p> About myself goes here </p>
                  {/* Resume goes here on click */}
                  <button onClick={() => console.log("Resume Download")}>
                    Resume
                    <ArrowRightCircle size={25} />
                  </button>
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
