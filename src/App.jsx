import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AboutUs, BlogPage, ContactPage, LandingPage } from "./pages";
import HomeState from "./context/Home/HomeState";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  // Empty dependency array ensures this effect runs only once

  return (
    <div
      className="overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f0f0f0)" }}
    >
      <HomeState>
        <NavBar />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/:productName" element={<ProductDisplayPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
        <a
          href="/AMVI CATALOGUE.pdf"
          download
          style={{
            position: "fixed",
            bottom: "40vh",
            right: "-50px",
            transform: "rotate(90deg)",
            backgroundColor: "#2a2a2a",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          Download Catalogue
        </a>
      </HomeState>
    </div>
  );
};

export default App;
