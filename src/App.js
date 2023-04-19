import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Booking from "./pages/Booking";
import AboutUs from "./pages/AboutUs";
import PestDictionary from "./pages/PestDictionary";
import PestContext from "./context";

const App = () => {
  const PestContext = createContext({ values });

  return (
    <div className="App">
      <PestContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/pest-dictionary" element={<PestDictionary />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PestContext.Provider>
    </div>
  );
};

export default App;
