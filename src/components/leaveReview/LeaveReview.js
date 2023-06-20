import React from "react";
import stars from "../../images/stars.jpg";
import "./leaveReview.css";
import { Col, Row } from "react-bootstrap";
const LeaveReview = () => {
  return (
    <div className="leave-review-container">
      <p>
        We value your experience! If you enjoyed our service, we would greatly
        appreciate it if you could take a moment to leave us a review. Your
        feedback helps us improve and serve you better.
      </p>
      <button>
        <a href="https://search.google.com/local/writereview?placeid=ChIJEWbbVgusQIYRXvm2Fiqx1PE">
          LEAVE US A REVIEW
        </a>
      </button>
      <img src={stars} alt="five stars" />
    </div>
  );
};

export default LeaveReview;
