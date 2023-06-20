import React from "react";
import Button from "react-bootstrap/Button";
import Card from "../card/Card";
import { rodentControlCards } from "../../constants";

const RodentBookingCards = ({ handleBookClick }) => {
  return (
    <div id="booking-container">
      <div className="booking-headings">
        <h3>RODENT CONTROL/PREVENTION</h3>
      </div>
      <Card
        image={rodentControlCards.image}
        title={rodentControlCards.header}
        timePrice={rodentControlCards.title}
        description={rodentControlCards.text}
        {...{ handleBookClick }}
      />
    </div>
  );
};

export default RodentBookingCards;
