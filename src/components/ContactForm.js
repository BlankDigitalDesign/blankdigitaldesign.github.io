import React, { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import { MdOutlineClose } from "react-icons/md";
import { pestTypes } from "../constants";
import PhoneNumberInput from "./PhoneNumberInput";
import { Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = ({ pestType, handleModalStatus }) => {
  const [selectedPestType, setSelectedPestType] = useState(0);
  const form = useRef();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    selectedPest: "",
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm({}, {}, form.curent, {}).then(
  //     (result) => {
  //       console.log(result);
  //       //success message
  //     },
  //     (error) => {
  //       console.log(error);
  //       //error message
  //     }
  //   );
  // };

  const selectValues = pestTypes.map((x, i) => (
    <option key={i} value={x.value} label={x.label}>
      {x.label}
    </option>
  ));

  const handleSubmit = (values) => {
    handleModalStatus();
    console.log("submit values", values);
    // sendEmail();
  };
  return (
    <div>
      <div>
        <MdOutlineClose onClick={() => handleModalStatus()} />
      </div>
      <div>
        <h4>Contact Williamson Pest Solutions:</h4>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form ref={form}>
              <Row>
                <Col xs={3}>
                  <label htmlFor="firstName">First Name</label>
                </Col>
                <Col xs={9}>
                  <Field id="firstName" name="firstName" placeholder="" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <label htmlFor="LastName">Last Name</label>
                </Col>
                <Col xs={9}>
                  <Field id="lastName" name="lastName" placeholder="" />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <label htmlFor="phone">Phone Number</label>
                </Col>
                <Col xs={9}>
                  <PhoneNumberInput />
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <label htmlFor="email">Email</label>
                </Col>
                <Col xs={9}>
                  <Field id="email" name="email" placeholder="" type="email" />
                </Col>
              </Row>
              {/* <div id="contact-bottom"> */}
              <Row>
                <Col xs={3}>
                  <label htmlFor="pestType">
                    Which pest are you concerned about?
                  </label>
                </Col>
                <Col xs={9}>
                  <select
                    style={{ marginRight: "3px" }}
                    name="selectedPest"
                    value={pestType ? pestType : selectedPestType}
                    onChange={(e) => setSelectedPestType(e.target.value)}
                  >
                    {selectValues}
                  </select>
                </Col>
              </Row>
              <br />
              <Row>
                <button
                  style={{ borderRadius: "5px", borderLeft: "3px" }}
                  type="submit"
                >
                  SUBMIT
                </button>
              </Row>
              {/* </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
