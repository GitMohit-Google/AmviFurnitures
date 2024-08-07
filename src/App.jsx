import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AboutUs, BlogPage, ContactPage, LandingPage } from "./pages";
import { Footer } from "./components/Footer";
import HomeState from "./context/Home/HomeState";
// import { ContactPage } from '@mui/icons-material'
const App = () => {
  return (
    <div className="overflow-auto">
      <HomeState>
        <NavBar />
        <div style={{ marginTop: "120px" }}>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </div>
        <Footer />
      </HomeState>
    </div>
  );
};

export default App;
