import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import flea from "../images/flea.jpg";
import bee1 from "../images/bee1.jpg";
import bee2 from "../images/bee2.jpg";
import bee3 from "../images/bee3.jpg";
import fireAnts from "../images/fireAnts.jpg";
import mosquito from "../images/mosquito.jpg";
import wasp from "../images/wasp.png";
import bedbug from "../images/bedbug.jpg";
import roach from "../images/roach.jpg";
import termite from "../images/termite.jpg";
import {
  whatAreFleasAndTicks,
  areFleasTicksDangerous,
  preventFleasAndTicks,
  whatAreWasps,
  areWaspsDangerous,
  preventWasps,
  whatAreBees,
  areBeesDangerous,
  preventBees,
  whatAreAnts,
  areFireAntsDangerous,
  preventFireAnts,
  whatAreBedbugs,
  areBedbugsDangerous,
  preventBedbugs,
  whatAreRoaches,
  areRoachesDangerous,
  preventRoaches,
  whatAreTermites,
  areTermitesDangerous,
  preventTermites,
  whatAreMosquitos,
  areMosquitosDangerous,
  preventMosquitos,
} from "../constants";

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

const PestDictionary = ({ handleModalStatus }) => {
  const [value, setValue] = useState(0);

  // return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          // height: 224,
          marginTop: 10,
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            md={3}
            lg={2}
            style={{ justifyContent: "flex-start" }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Fleas" {...a11yProps(0)} />
              <Tab label="Wasps" {...a11yProps(1)} />
              <Tab label="Bees" {...a11yProps(2)} />
              <Tab label="Ants" {...a11yProps(3)} />
              <Tab label="Bedbugs" {...a11yProps(4)} />
              <Tab label="Roaches" {...a11yProps(5)} />
              <Tab label="Termites" {...a11yProps(6)} />
              <Tab label="Mosquitos" {...a11yProps(7)} />
            </Tabs>
          </Grid>

          <Grid
            item
            xs={9}
            md={9}
            style={{
              backgroundColor: "#faedcd",
              borderRadius: "10px",
            }}
          >
            <TabPanel value={value} index={0} className="">
              <Typography variant="h5">
                Fleas (Siphonaptera) - What are fleas? What are ticks? What do
                they look like?
              </Typography>
              <div style={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{
                    justifyContent: "center",
                    height: "auto",
                    width: "100%",
                    // maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 250, md: 350 },
                    borderRadius: 2,
                    border: 1,
                    borderColor: "#344e41",
                  }}
                  src={flea}
                  alt="flea"
                />
              </div>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreFleasAndTicks}
              </Typography>
              <Typography variant="h5">
                Are fleas and ticks dangerous?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areFleasTicksDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent fleas and ticks in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventFleasAndTicks}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("fleas")}
              >
                Help! I Have Fleas!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography variant="h5">
                Hymenoptera (Wasps) – What are wasps? What do they look like?
              </Typography>
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  borderRadius: 2,
                  border: 1,
                  borderColor: "#344e41",
                }}
                src={wasp}
                alt="wasp"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreWasps}
              </Typography>
              <Typography variant="h5">Are wasps dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areWaspsDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent wasps in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventWasps}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("wasps")}
              >
                Help! I Have Wasps!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Typography variant="h5">
                Hymenoptera (Bees) – What are bees? What do they look like?
              </Typography>
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  // border: 1,
                  borderColor: "#344e41",
                }}
                src={bee1}
                alt="bee"
              />
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  border: 1,
                  // borderColor: "#344e41",
                }}
                src={bee2}
                alt="bee"
              />
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  border: 1,
                  // borderColor: "#344e41",
                }}
                src={bee3}
                alt="bee"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreBees}
              </Typography>
              <Typography variant="h5">Are bees dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areBeesDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent bees in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventBees}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("bees")}
              >
                Help! I Have Bees!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <Typography variant="h5">
                Hymenoptera (Ants) – What are ants? What do they look like?
              </Typography>
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  borderRadius: 2,
                  border: 1,
                  borderColor: "#344e41",
                }}
                src={fireAnts}
                alt="fire ants"
              />
              <Typography>{whatAreAnts}</Typography>
              <Typography variant="h5">Are fire ants dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areFireAntsDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent fire ants in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventFireAnts}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("ants")}
              >
                Help! I Have This Ants!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={4}>
              <Typography variant="h5">
                Hemiptera (Bedbugs) – What are bedbugs? What do they look like?
              </Typography>
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  borderRadius: 2,
                  border: 1,
                  borderColor: "#344e41",
                }}
                src={bedbug}
                alt="bedbugs"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreBedbugs}
              </Typography>
              <Typography variant="h5">Are bedbugs dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areBedbugsDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent bedbugs in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventBedbugs}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("bedbugs")}
              >
                Help! I Have Bedbugs!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={5}>
              <Typography variant="h5">
                Blattodea (Roaches) – What are roaches? What do they look like?
              </Typography>
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  // border: 1,
                  // borderColor: "#344e41",
                }}
                src={roach}
                alt="roaches"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreRoaches}
              </Typography>
              <Typography variant="h5">Are roaches dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areRoachesDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent roaches in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventRoaches}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("roaches")}
              >
                Help! I Have Roaches!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={6}>
              <Typography variant="h5">
                Blattodea (Termites) – What are termites? What do they look
                like?{" "}
              </Typography>{" "}
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  // border: 1,
                  // borderColor: "#344e41",
                }}
                src={termite}
                alt="termites"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreTermites}
              </Typography>
              <Typography variant="h5">Are termites dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areTermitesDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent termites in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                  marginBottom: "5px",
                }}
              >
                {preventTermites}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("termites")}
              >
                Help! I Have Termites!
              </Button>
            </TabPanel>

            <TabPanel value={value} index={7}>
              <Typography variant="h5">
                Diptera (Mosquitos) – What are mosquitos? What do they look
                like?{" "}
              </Typography>{" "}
              <Box
                component="img"
                sx={{
                  justifyContent: "center",
                  height: "auto",
                  width: "100%",
                  // maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 250, md: 350 },
                  // borderRadius: 2,
                  // border: 1,
                  // borderColor: "#344e41",
                }}
                src={mosquito}
                alt="mosquitos"
              />
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {whatAreMosquitos}
              </Typography>
              <Typography variant="h5">Are mosquitos dangerous?</Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {areMosquitosDangerous}
              </Typography>
              <Typography variant="h5">
                How can I prevent mosquitos in the future?
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#fefae0",
                  // borderRadius: "10px",
                  // padding: "5px",
                  // marginBottom: "5px",
                }}
              >
                {preventMosquitos}
              </Typography>
              <Button
                color="success"
                variant="outlined"
                onClick={() => handleModalStatus("mosquitos")}
              >
                Help! I Have Mosquitos!
              </Button>
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PestDictionary;
