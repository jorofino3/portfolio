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
import StructQuest from "../assets/img/project-struct.png";
import GameSuite from "../assets/img/project-2340.png";
import VisTool from "../assets/img/project-vistool.png";
import ClimateReality from "../assets/img/project-climate.png";
import JuniorDesign from "../assets/img/project-rules.png";
import FirebaseApp from "../assets/img/project-firebaseApp.png";

import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Struct Quest",
      description: "HCI Project - Figma Prototype",
      imgUrl: StructQuest,
      link: "https://www.figma.com/proto/RlVH7D2mbGYDhtP2ofq7D3/Struct-Quest?node-id=6-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A2",
    },

    {
      title: "Visualization tool",
      description: "Data Structures and Algorithms Visualizations",
      imgUrl: VisTool,
      link: "https://csvistool.com/",
    },

    {
      title: "Discrete Math Learning Platform",
      description: "Capstone Project - Figma Prototype",
      imgUrl: JuniorDesign,
      link: "https://www.figma.com/proto/z1RfBJY49vEq9LdGqtoZT1/Capstone-Proj.-UI?node-id=8-3447&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=8%3A3447",
    },
    {
      title: "Climate Reality Group",
      description: "Non-profit Environmental Activist Group",
      imgUrl: ClimateReality,
      link: "https://cra-backup.web.app/",
    },
    {
      title: "Gericht",
      description: "Restaurant website",
      imgUrl: Gericht,
      link: "https://jorofino3.github.io/restaurant-template/",
    },
    {
      title: "Game Suite",
      description: "Chess, Wordle, BlackJack and Andriod App",
      imgUrl: GameSuite,
      link: "https://github.com/jorofino3/cs-2340-project",
    },
  ];
  const projects2 = [
    {
      title: "Movie Land",
      description: "Search and browse movies",
      imgUrl: MovieLand,
      link: "https://github.com/jorofino3/movie-land",
    },
    {
      title: "Paper Planes",
      description: "Interactive Video Game",
      imgUrl: PaperPlanes,
      link: "https://github.com/jorofino3/PaperPlanes",
    },
    {
      title: "Contact Manager",
      description: "Firebase Data storage app",
      imgUrl: FirebaseApp,
      link: "https://github.com/jorofino3/contact-manager",
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
                    isVisible ? "animate__animated animate__fadeInDown" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Click on each project to see more!</p>
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
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey='second'>
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>{" "}
                </TabPane>
                <TabPane eventKey='third'>
                  <p className='more-projects'>More projects to come!</p>
                </TabPane>
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
