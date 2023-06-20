import React from "react";
import { Col, Row } from "react-bootstrap";
import "./card.css";

const Card = ({ image, title, timePrice, description, handleBookClick }) => {
  return (
    <div id="card-base">
      {image ? <img id="booking-card-image" src={image} alt={title} /> : ""}
      <Row id="card-content">
        <Col>
          <Row>{title}</Row>
          <hr />
          <Row>{timePrice}</Row>
          <Row id="scrollable-row">{description}</Row>
          <Row className="button-row">
            <button
              className="card-button"
              onClick={() => handleBookClick(title)}
            >
              BOOK
            </button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
