import React, { useEffect } from "react";
import Team from "../components/team/Team";
import "../components/team/team.css";
import { team } from "../constants";
import TeamCard from "../components/teamCards/TeamCard";

const AboutUs = ({ isMobile }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="about-us-container">
    //   <Team {...{ isMobile }} />
    // </div>
    team.map((x) => (
      <TeamCard
        cover={x.cover}
        description={x.description}
        name={x.name}
        title={x.title}
      />
    ))
  );
};

export default AboutUs;
