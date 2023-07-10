import React from "react";
import Card from "../card/Card";

import { pestControlCards } from "../../constants";

const PestBookingCards = ({ handleBookClick }) => {
  return (
    <div id="booking-container">
      {/* <div className="booking-headings">Pest Control</div> */}
      {pestControlCards.map((x, i) => (
        <Card
          key={i}
          image={x.image}
          title={x.header}
          timePrice={x.title}
          description={x.text}
          {...{ handleBookClick }}
        />
      ))}
    </div>
  );
};

export default PestBookingCards;
