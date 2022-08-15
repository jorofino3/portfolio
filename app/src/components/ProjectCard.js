import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sixe={12} sm={6} md={4}>
      {/* link to project */}
      <a style={{ color: "white" }} href={link}>
        <div className='proj-imgbx'>
          <img src={imgUrl} alt='Project Card' />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description} </span>
          </div>
        </div>
      </a>
    </Col>
  );
};
