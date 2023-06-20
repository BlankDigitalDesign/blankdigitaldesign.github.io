import React from "react";
import Heading from "../Heading";
import "./hero.css";
import image from "../../images/temp-termites.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Leaders in the Pest Control Industry"
            subtitle="Your local experts in termite treatments, pest control, and rodent control."
          />
          <img className="hero-image" src={image} alt="" />
          {/* <div>{/* <h4>Let us know how to help you.</h4> }</div>
          <form className="flex">
            <div className="box">
              <span>Name</span>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Phone Number</span>
              <input type="tel" placeholder="Phone number" />
            </div>
            <div className="box">
              <span>Email Address</span>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="box"></div>
            <input type="submit" value="Submit" />
          </form> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
