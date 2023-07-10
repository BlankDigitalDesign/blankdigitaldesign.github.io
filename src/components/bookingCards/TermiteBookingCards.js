import React from "react";
import Card from "../card/Card";
import { termiteInspectionCards } from "../../constants";

const TermiteBookingCards = ({ handleBookClick }) => {
  return (
    <div id="booking-container">
      {/* <div className="booking-headings">
        <h3>TERMITE INSPECTION (REAL ESTATE)</h3>
      </div> */}
      {termiteInspectionCards.map((x) => (
        <Card
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

export default TermiteBookingCards;
