import { Container, Row, Col, Tab, Nav, TabContent, TabPane } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Project 1",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Project 2",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Project 3",
      imgUrl: projImg3,
    },
    {
      title: "Project 4",
      description: "Project 4",
      imgUrl: projImg1,
    },
    {
      title: "Project 5",
      description: "Project 5",
      imgUrl: projImg2,
    },
    {
      title: "Project 6",
      description: "Project 6",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Project description</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <TabContent>
                    <TabPane eventKey="first">
                        {/* map all the projects to the screen */}
                        <Row>
                            {projects.map((project, index) => (
                                <p> {project.title}</p>
                            ))}
                        </Row>
                    </TabPane>
                    <TabPane eventKey="second">More projects to come</TabPane>
                    <TabPane eventKey="third">More projects to come</TabPane>
                  </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
