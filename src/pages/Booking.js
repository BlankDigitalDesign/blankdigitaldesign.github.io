import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { Container } from "react-bootstrap";
// import "./contact.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import PestBookingCards from "../components/bookingCards/PestBookingCards";
import RodentBookingCards from "../components/bookingCards/RodentBookingCards";
import TermiteBookingCards from "../components/bookingCards/TermiteBookingCards";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormSelect from "../components/FormSelect";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { Row, Col } from "react-bootstrap";
import DateSelector from "../components/DateSelector";

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
          <Typography component={"div"}>{children}</Typography>
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

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [value, setValue] = useState(0);
  const [morningSelected, setMorningSelected] = useState(false);
  const [afternoonSelected, setAfternoonSelected] = useState(false);
  const [eveningSelected, setEveningSelected] = useState(false);

  useEffect(() => {
    console.log("morning selected", morningSelected);
    console.log("afternoon selected", afternoonSelected);
    console.log("evening selected", eveningSelected);
  }, [morningSelected, afternoonSelected, eveningSelected]);

  const handleMorningClick = () => {
    setMorningSelected(true);
    setAfternoonSelected(false);
    setEveningSelected(false);
  };

  const handleAfternoonClick = () => {
    setMorningSelected(false);
    setAfternoonSelected(true);
    setEveningSelected(false);
  };

  const handleEveningClick = () => {
    setMorningSelected(false);
    setAfternoonSelected(false);
    setEveningSelected(true);
  };

  console.log("selectedService", selectedService);
  const handleSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const handleBookClick = (service) => {
    setSelectedService(service);
    window.scrollTo(0, 4000);
    console.log(service);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttons = [
    <button
      onClick={handleMorningClick}
      type="button"
      className="booking-button-grp"
      name="morning"
      value="morning"
      key="one"
    >
      Morning
    </button>,
    <button
      onClick={handleAfternoonClick}
      type="button"
      className="booking-button-grp"
      name="afternoon"
      value="afternoon"
      key="two"
    >
      Afternoon
    </button>,
    <button
      onClick={handleEveningClick}
      type="button"
      className="booking-button-grp"
      name="evening"
      value="evening"
      key="three"
    >
      Evening
    </button>,
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    date: "",
  };

  const handleSendForm = (values) => {
    console.log(values);
  };

  return (
    <Container className="booking-main-container" fluid>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="PEST CONTROL" {...a11yProps(0)} />
              <Tab label="RODENT CONTROL/PREVENTION" {...a11yProps(1)} />
              <Tab label="TERMITE INSPECTION (REAL ESTATE)" {...a11yProps(2)} />
              <Tab label="MISTERS" {...a11yProps(3)} />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={9}
            md={9}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#faedcd",
              borderRadius: "10px",
            }}
          >
            <TabPanel value={value} index={0} className="pest-container">
              <PestBookingCards {...{ handleBookClick }} />
            </TabPanel>
            <TabPanel value={value} index={1} className="pest-container">
              <RodentBookingCards {...{ handleBookClick }} />
            </TabPanel>
            <TabPanel value={value} index={2} className="pest-container">
              <TermiteBookingCards {...{ handleBookClick }} />
            </TabPanel>
          </Grid>
        </Grid>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="booking-container">
          <Formik initialValues={initialValues} onSubmit={handleSendForm}>
            <Form>
              <Row>
                <Col xs={3} className="booking-label">
                  <label htmlFor="firstName">FIRST NAME</label>
                </Col>
                <Col>
                  <Field type="text" name="firstName" />
                </Col>
              </Row>
              <Row>
                <Col xs={3} className="booking-label">
                  <label htmlFor="lastName">LAST NAME</label>
                </Col>
                <Col xs={9}>
                  <Field type="text" name="lastName" />
                </Col>
              </Row>
              <Row>
                <Col xs={3} className="booking-label">
                  <label htmlFor="email">EMAIL</label>
                </Col>
                <Col xs={9}>
                  <Field type="email" name="email" />
                </Col>
              </Row>
              <Row>
                <Col xs={3} className="booking-label">
                  <label htmlFor="phoneNumber">PHONE</label>
                </Col>
                <Col>
                  <PhoneNumberInput />
                </Col>
              </Row>
              <Row>
                <Col xs={3} className="booking-label">
                  <label htmlFor="service">SELECT A SERVICE</label>
                </Col>
                <Col xs={7}>
                  <FormSelect {...{ handleSelect, selectedService }} />
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <Field name="date" component={DateSelector} />
                  {/* <DatePicker
                    name="date"
                    defaultValue={dayjs().add(2, "day")}
                  /> */}
                </Col>
                <Col>
                  <ButtonGroup
                    style={{ padding: "10px 5px 10px 0" }}
                    size="small"
                  >
                    {buttons}
                  </ButtonGroup>
                </Col>
              </Row>

              <button className="project-button" type="submit">
                SUBMIT
              </button>
            </Form>
          </Formik>
        </div>
      </LocalizationProvider>
    </Container>
  );
};

export default Booking;
