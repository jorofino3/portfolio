import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Gericht from "../assets/img/project-gericht.png";
import PaperPlanes from "../assets/img/project-paperplanes.png";
import MovieLand from "../assets/img/project-movie.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Gericht",
      description: "Restaurant website",
      imgUrl: Gericht,
      link: "https://github.com/jorofino3/restaurant-template",
    },
    {
      title: "Paper Planes",
      description: "VGDev Club Game",
      imgUrl: PaperPlanes,
      link: "https://github.com/jorofino3/movie-land",
    },
    {
      title: "Movie Land",
      description: "Search and browse movies",
      imgUrl: MovieLand,
      link: "https://github.com/jorofino3/movie-land",
    },
    {
      title: "Gericht",
      description: "Restaurant website",
      imgUrl: Gericht,
      link: "https://github.com/jorofino3/restaurant-template",
    },
    {
      title: "Paper Planes",
      description: "VGDev Club Game",
      imgUrl: PaperPlanes,
      link: "https://github.com/jorofino3/movie-land",
    },
    {
      title: "Movie Land",
      description: "Search and browse movies",
      imgUrl: MovieLand,
      link: "https://github.com/jorofino3/movie-land",
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    //plug in different animation
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Project description</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey='first'>
                  {/* map all the projects to the screen */}
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey='second'>More projects to come</TabPane>
                <TabPane eventKey='third'>More projects to come</TabPane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt='Backgound'
        className='background-image-right'
      />
    </section>
  );
};
