import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import Booking from "./pages/Booking";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PestDictionary from "./pages/PestDictionary";
import "./App.css";
import ContactModal from "./components/ContactModal";
import axios from "axios";
// var cors = require("cors");
// var express = require("express");
import $ from "jquery";
// app.use(cors());
// var app = express();

const App = () => {
  const [modalOpen, setModalStatus] = useState(false);
  const [placeData, setPlaceData] = useState();
  const handleModalStatus = () => {
    setModalStatus(!modalOpen);
  };

  useEffect(() => {
    getRatings();
  }, []);
  // const settings = {
  //   cache: false,
  //   // dataType: "jsonp",
  //   async: true,

  //   crossDomain: true,
  //   url: ,
  //   ,
  //   xhrFields: {
  //     withCredentials: true,
  //   },
  // };
  const getRatings = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.REACT_APP_PID}&fields=address_components&key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        setPlaceData(res.data);
        console.log(placeData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App page-container">
      <BrowserRouter>
        <Header {...{ handleModalStatus }} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage {...{ handleModalStatus }} />}
          />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route
            path="/behind-the-brand"
            element={<AboutUs {...{ handleModalStatus }} />}
          />
          {/* <Route
            path="/booking"
            element={<Booking {...{ handleModalStatus }} />}
          /> */}
          <Route
            path="/pest-dictionary"
            element={<PestDictionary {...{ handleModalStatus }} />}
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <ContactModal {...{ handleModalStatus, modalOpen }} />
    </div>
  );
};

export default App;
