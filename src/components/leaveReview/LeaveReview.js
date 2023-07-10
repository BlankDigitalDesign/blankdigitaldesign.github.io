import React from "react";
import stars from "../../images/stars.jpg";
import "./leaveReview.css";
import { Col, Row } from "react-bootstrap";
const LeaveReview = () => {
  return (
    <>
      <Row className="leave-review-container">
        <Col xs={8}>
          <p>
            We value your experience! If you enjoyed our service, we would
            greatly appreciate it if you could take a moment to leave us a
            review. Your feedback helps us improve and serve you better.
          </p>
        </Col>
        {/* </Row>
      <Row> */}
        <Col xs={4}>
          <img src={stars} alt="five stars" />
          {/* </Col>
        <Col> */}
          <a
            className="review-anchor"
            href="https://search.google.com/local/writereview?placeid=ChIJEWbbVgusQIYRXvm2Fiqx1PE"
          >
            <button className="review-button">LEAVE US A REVIEW</button>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default LeaveReview;
