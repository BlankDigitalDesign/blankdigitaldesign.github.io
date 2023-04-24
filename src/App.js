import { useState } from "react";
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

const App = () => {
  const [modalOpen, setModalStatus] = useState(false);
  const handleModalStatus = () => {
    setModalStatus(!modalOpen);
  };
  console.log(modalOpen)
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
          <Route
            path="/booking"
            element={<Booking {...{ handleModalStatus }} />}
          />
          <Route
            path="/pest-dictionary"
            element={<PestDictionary {...{ handleModalStatus }} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ContactModal {...{ handleModalStatus, modalOpen }} />
    </div>
  );
};

export default App;
