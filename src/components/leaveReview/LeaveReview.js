import React from "react";
import stars from "../../images/stars.jpg";
import "./leaveReview.css";
import { Col, Row } from "react-bootstrap";
const LeaveReview = () => {
  return (
    <div className="leave-review-container">
      <div>
        <p>
          We value your experience! If you enjoyed our service, we would greatly
          appreciate it if you could take a moment to leave us a review. Your
          feedback helps us improve and serve you better.
        </p>
      </div>
      <div>
        <a
          className="review-anchor"
          href="https://search.google.com/local/writereview?placeid=ChIJEWbbVgusQIYRXvm2Fiqx1PE"
        >
          <button className="review-button">LEAVE US A REVIEW</button>
        </a>
      </div>
      <div>
        <img src={stars} alt="five stars" />
      </div>
    </div>
  );
};

export default LeaveReview;
