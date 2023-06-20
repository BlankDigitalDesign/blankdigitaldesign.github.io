import React from "react";
import { Container } from "react-bootstrap";
import {
  privacyParagraph1,
  privacyParagraph3,
  cookiePolicy,
  linksPolicy,
  personalDataCollectionPolicy,
} from "../constants";

const PrivacyPolicy = () => {
  return (
    <Container fluid className="privacy-container">
      <div className="privacy-section">
        <h2>PRIVACY POLICY</h2>
        <p>{privacyParagraph1}</p>
      </div>
      <div className="privacy-section">
        <span>
          WHAT USER DATA WE COLLECT
          <br />
          When you visit the website, we may collect the follwiing data:
        </span>
        <ul>
          <li>·Your IP address.</li>
          <li>·Your contact information and email address.</li>
          <li>·Other information such as interests and preferences.</li>
          <li>·Data profile regarding your online behavior on our website. </li>
        </ul>
      </div>
      <div className="privacy-section">
        <span>
          WY WE COLLECT YOUR DATA
          <br />
          We are collecting your data for several reasons:
        </span>
        <ul>
          <li>·To better understand your needs.</li>
          <li>·To improve our services and products.</li>
          <li>
            ·To send you promotional emails containing the information we think
            you will find interesting.
          </li>
          <li>
            ·To contact you to fill out surveys and participate in other types
            of market research.
          </li>
          <li>
            ·To customize our website according to your online behavior and
            personal preferences.
          </li>
        </ul>
      </div>
      <div className="privacy-section">
        <span>
          SAFEGUARDING AND SECURING YOUR DATA
          <br />
          {privacyParagraph3}
        </span>
      </div>
      <div className="privacy-section">
        <span>
          OUR COOKIE POLICY
          <br />
          {cookiePolicy}
        </span>
      </div>
      <div className="privacy-section">
        <span>
          LINKS TO OTHER WEBSITES
          <br />
          {linksPolicy}
        </span>
      </div>
      <div className="privacy-section">
        <span>
          RESTRICTING THE COLLECTION OF YOUR PERSONAL DATA
          <br />
          {personalDataCollectionPolicy}
        </span>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
