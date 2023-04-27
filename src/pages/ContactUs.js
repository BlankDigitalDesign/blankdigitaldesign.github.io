import React from "react";
import tempRodent from "../images/tempRodent.jpg";
import Back from "../components/Back";
// import "./contact.css";

const ContactUs = () => {
  //add submit handler
  return (
    <>
      <section className="contact mb">
        <Back
          name="24/7 Pest Control Assistance "
          title="Call (936) 314-7037"
          cover={tempRodent}
        />
        <div className="container">
          <form className="shadow">
            {/* <h4>Fillup The Form</h4> <br /> */}
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
