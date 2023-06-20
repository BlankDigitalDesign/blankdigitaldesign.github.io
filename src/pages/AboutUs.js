import React, { useEffect } from "react";
import Team from "../components/team/Team";
import "../components/team/team.css";

const AboutUs = ({ isMobile }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      <Team {...{ isMobile }} />
    </div>
  );
};

export default AboutUs;
