import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AboutUs, BlogPage, ContactPage, LandingPage } from "./pages";
import { Footer } from "./components/Footer";
import HomeState from "./context/Home/HomeState";
import ProductDisplayPage from "./pages/ProductDisplayPage";

const App = () => {
  return (
    <div className="overflow-auto">
      <HomeState>
        <NavBar />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/:productName" element={<ProductDisplayPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} /> Fallback route for invalid paths
          </Routes>
        </div>
        <Footer />
      </HomeState>
    </div>
  );
};

export default App;
