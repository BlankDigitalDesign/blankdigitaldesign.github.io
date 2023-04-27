import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PestDictionaryCard from "../components/pestDictionaryCard/PestDictionaryCard";
import { pests } from "../playData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ButtonBase from "@mui/material/ButtonBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const syle = {
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const PestDictionary = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const PestComponent = ({ pest }) => (
    <>
      <ListItem button>
        <ListItemText primary={pest.name} />
        <img className="li-image" src={pest.image} alt={pest.name} />
        <ListItemText secondary={pest.description} />
      </ListItem>
      <Divider />
    </>
  );

  console.log("pest", pests);
  return (
    <>
      <div className="title-div">
        <h1 className="page-title">Local Pest Dictionary</h1>
      </div>
      <Container fluid className="mt-5 pt-5 border dictionary-container">
        <Row>
          {pests.map((pest, i) => (
            <PestComponent {...{ pest }} />
            // <PestDictionaryCard
            //   key={pest.name + i}
            //   name={pest.name}
            //   description={pest.description}
            //   image={pest.image}
            // />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PestDictionary;
