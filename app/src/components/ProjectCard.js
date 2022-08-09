import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='prj-imgbx'>
        <img src={imgUrl} alt='Project Card' />
        <div className='prj-txtx'>
          <h4>{title}</h4>
          <span>{description} </span>
        </div>
      </div>
    </Col>
  );
};
