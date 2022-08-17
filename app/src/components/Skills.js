import beginner from "../assets/img/skills-beginner.png";
import intermediate from "../assets/img/skills-intermediate.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>Programming Languages and Tools.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={intermediate} alt='intermediate' />
                  <h5>Java</h5>
                </div>
                <div className='item'>
                  <img src={intermediate} alt='intermediate' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={beginner} alt='beginner' />
                  <h5>Javascript</h5>
                </div>
                <div className='item'>
                  <img src={beginner} alt='beginner' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={intermediate} alt='intermediate' />
                  <h5>HTML5</h5>
                </div>
                <div className='item'>
                  <img src={beginner} alt='beginner' />
                  <h5>C</h5>
                </div>
                <div className='item'>
                  <img src={intermediate} alt='intermediate' />
                  <h5>Git</h5>
                </div>
                <div className='item'>
                  <img src={beginner} alt='beginner' />
                  <h5>Kotlin</h5>
                </div>
                <div className='item'>
                  <img src={beginner} alt='beginner' />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='Background Img'
      />
    </section>
  );
};
