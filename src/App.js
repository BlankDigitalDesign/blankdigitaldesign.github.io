import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PestDictionary from "./pages/PestDictionary";
import "./App.css";
import ContactModal from "./components/ContactModal";
import Stack from "@mui/material/Stack";
import useViewport from "./hooks/useViewPort";

const App = () => {
  const [modalOpen, setModalStatus] = useState(false);
  const [pestType, setPestType] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useViewport();
  const breakpoint = 650;

  const handleModalStatus = (value) => {
    setPestType(value);
    setModalStatus(!modalOpen);
  };

  useEffect(() => {
    if (width <= breakpoint) {
      setIsMobile(true);
    } else setIsMobile(false);
  });

  return (
    <div className="App page-container">
      <BrowserRouter>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Stack spacing={2}>
            <div>
              <Header {...{ modalOpen, handleModalStatus }} />
            </div>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <LandingPage
                      {...{ modalOpen, handleModalStatus, pestType }}
                    />
                  }
                />
                <Route
                  path="/behind-the-brand"
                  element={<AboutUs {...{ isMobile }} />}
                />
                <Route
                  path="/pest-dictionary"
                  element={
                    <PestDictionary
                      {...{ modalOpen, handleModalStatus, pestType, isMobile }}
                    />
                  }
                />
                <Route path="/booking" element={<Booking />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </div>
            <div>
              <Footer />
            </div>
          </Stack>
        </HashRouter>
      </BrowserRouter>
      <ContactModal {...{ pestType, modalOpen, handleModalStatus }} />
    </div>
  );
};

export default App;
