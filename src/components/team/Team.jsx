import React, { useState } from "react";
import Heading from "../Heading";
import { team } from "../../constants";
import "./team.css";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 6 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Team = ({ isMobile }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const WelcomeDiv = () => (
    <div className="team-heading">
      {isMobile ? (
        <h5>Welcome to the family!</h5>
      ) : (
        <h1>Welcome to the family!</h1>
      )}
      <p style={{ paddingLeft: "5px" }}>
        There's much to see here. So, take your time, look around, and learn all
        there is to know about us. Big expectations with even larger
        personalities, because who said pest control has to be boring? We hope
        you enjoy our site and take a moment to drop us a line."
      </p>
    </div>
  );
  return (
    <>
      <section className="team background">
        <div className="container">
          <div style={{ dispay: "flex", justifyContent: "center" }}>
            {/* <Grid item xs={4} md={3} lg={2}> */}
            {/* {isMobile ? ( */}
            <Tabs
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="SHAWN WILLIAMSON" {...a11yProps(0)} />
              <Tab label="KALEIGH WILLIAMSON" {...a11yProps(1)} />
              <Tab label="MARK COYNE" {...a11yProps(2)} />
            </Tabs>
            <Grid container spacing={0.5}>
              {!isMobile ? (
                <Grid
                  item
                  xs={3}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#faedcd",
                    borderRadius: "10px",
                    // paddingLeft: "3px",
                  }}
                >
                  <WelcomeDiv />
                </Grid>
              ) : (
                <div id="mobile-welcome">
                  <WelcomeDiv />
                </div>
              )}
              <Grid
                item
                xs={9}
                md={8}
                style={{
                  // display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#faedcd",
                  borderRadius: "10px",
                  // paddingLeft: "3px",
                }}
              >
                {team.map((val, index) => (
                  <TabPanel
                    value={value}
                    index={index}
                    // className="pest-container"
                  >
                    <Card.Body
                      style={{
                        backgroundColor: "#a3b18a",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <img
                        className="team-image"
                        src={val.cover}
                        alt={val.name}
                      />
                      <Card.Title>{val.name}</Card.Title>
                      <Card.Text>{val.title}</Card.Text>
                      <Card.Text>{val.description}</Card.Text>
                    </Card.Body>
                  </TabPanel>
                ))}
              </Grid>
            </Grid>
          </div>

          <div className="content mtop grid3"></div>
        </div>
      </section>
    </>
  );
};

export default Team;
