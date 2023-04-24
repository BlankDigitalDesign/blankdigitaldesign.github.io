import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PestDictionaryCard from "../components/pestDictionaryCard/PestDictionaryCard";
import { pests } from "../playData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ButtonBase from "@mui/material/ButtonBase";

const syle = {
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
};

const PestDictionary = () => {
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
