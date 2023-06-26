import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ContactForm from "./ContactForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ContactModal = ({ handleModalStatus, modalOpen, pestType }) => {
  return (
    <div style={{ zIndex: "9999" }}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

      <Modal
        open={modalOpen}
        onClose={() => handleModalStatus()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm {...{ handleModalStatus, pestType }} />
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
