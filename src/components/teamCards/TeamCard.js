import React from "react";
import { Row, Col } from "react-bootstrap";
import "./teamCard.css";

const TeamCard = ({ cover, name, title, description }) => {
  return (
    <div className="card-container">
      <Row>
        <Col xs={4} rowspan={4}>
          <img className="team-img" src={cover} alt={name} />
        </Col>
        <Col xs={8} className="card-content">
          <h5>
            {name} - {title}
          </h5>
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default TeamCard;
