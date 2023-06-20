import React from "react";
import { tempData } from "./tempData";

const RatingsCard = () => {
  return (
    <>
      {tempData.map((review, idx) => (
        <div
          className="card horizontal-scrollable"
          key={idx}
          style={{ width: "18rem", justifyContent: "space-between" }}
        >
          <div className="card-body">
            <h5 className="card-title">{review.name}</h5>
            <h5>Positive: {review.positive}</h5>
            {/* <img src={review.avatar} alt={review.avatar} /> */}
            {/* <div className="priority-display">
              <div className="star-container">
                refactor using map and index +1
                <h3
                  style={{
                    color: review.starRating >= 1 ? "rgb(253,253,150)" : "",
                  }}
                >
                  ★
                </h3>
                <h3
                  style={{
                    color: review.starRating >= 2 ? "rgb(253,253,150)" : "",
                  }}
                >
                  ★
                </h3>
                <h3
                  style={{
                    color: review.starRating >= 3 ? "rgb(253,253,150)" : "",
                  }}
                >
                  ★
                </h3>
                <h3
                  style={{
                    color: review.starRating >= 4 ? "rgb(253,253,150)" : "",
                  }}
                >
                  ★
                </h3>
                <h3
                  style={{
                    color: review.starRating >= 5 ? "rgb(253,253,150)" : "",
                  }}
                >
                  ★
                </h3>
              </div>
            </div> */}
            <h6 className="card-subtitle mb-2 text-muted">{review.text}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default RatingsCard;
