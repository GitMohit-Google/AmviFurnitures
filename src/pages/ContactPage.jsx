import React, { useContext, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import {
  LocationOnOutlined,
  PhoneOutlined,
  EmailOutlined,
  WindowSharp,
} from "@mui/icons-material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import HomeContext from "../context/Home/HomeContext";
import InputField from "../components/InputField";
import { fields } from "../constants/navLink";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const center = {
  lat: 28.6139, // Latitude for Noida
  lng: 77.209, // Longitude for Noida
};

const ContactPage = () => {
  const mapRef = useRef(null);
  const {
    handleSendClick,
    name,
    setContactNumber,
    contactNumber,
    email,
    setEmail,
    setName,
    message,
    setMessage,
    messageLoading,
    showMessage,
  } = useContext(HomeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.location.reload();
    // Scroll to top when the component mounts
  }, []);

  const handleAddressClick = () => {
    const mapAddress = "https://maps.app.goo.gl/HLtyujuk7Rd894nc9";
    window.open(mapAddress, "_blank");
  };
  useEffect(() => {
    const observerX = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showX");
        } else {
          entry.target.classList.remove("showX");
        }
      });
    });

    const observerY = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showY");
        } else {
          entry.target.classList.remove("showY");
        }
      });
    });

    const hiddenElementsBlur = document.querySelectorAll(".hiddenblur");
    hiddenElementsBlur.forEach((el) => observerX.observe(el));

    const hiddenElementsRight = document.querySelectorAll(".hiddenRight");
    hiddenElementsRight.forEach((el) => observerX.observe(el));

    const hiddenElementsLeft = document.querySelectorAll(".hiddenLeft");
    hiddenElementsLeft.forEach((el) => observerX.observe(el));

    const hiddenElementsDown = document.querySelectorAll(".hiddenDown");
    hiddenElementsDown.forEach((el) => observerY.observe(el));

    const hiddenElementsTop = document.querySelectorAll(".hiddenTop");
    hiddenElementsTop.forEach((el) => observerY.observe(el));

    // Cleanup observers on component unmount
    return () => {
      observerX.disconnect();
      observerY.disconnect();
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <Container maxWidth="lg" sx={{ mt: 16, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="hiddenTop"
            sx={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.67)" }}
          >
            We're <span style={{ color: "#ee4d37 " }}>always eager</span> to
            hear from you!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Our customer service team is always available to answer your queries
            or to receive your feedback. Fill up the given form to get in touch
            with us and we'll get back to you within 24 working hours!
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                gap="30px"
                height="100%"
              >
                <Box display="flex" alignItems="center" mb={0}>
                  <IconButton disabled>
                    <LocationOnOutlined fontSize="large" color="primary" />
                  </IconButton>
                  <Box
                    ml={1}
                    onClick={handleAddressClick}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      Address
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Khasra No. 682 Behind HLM College Meerut Road Industrial
                      Area, Duhai, Ghaziabad, Uttar Pradesh 201003
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" mb={0}>
                  <IconButton disabled>
                    <PhoneOutlined fontSize="large" color="primary" />
                  </IconButton>
                  <Box ml={1}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mobile : (+91 7497036847)
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center">
                  <IconButton disabled>
                    <EmailOutlined fontSize="large" color="primary" />
                  </IconButton>
                  <Box ml={1}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      Mail
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      info@amvifurniture.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  borderRadius: 2,
                  px: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }, // Added consistent breakpoints
                  py: 1,
                  boxShadow: 3,
                  maxWidth: "550px",
                  // maxWidth: { lg: "550px", md: "350px/", sm: "200px" },
                  width: "100%",
                  margin: {
                    xs: "0 auto", // Center on smaller screens
                    md: "0 0 0 auto",
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    padding: "2rem",
                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 0.77)",
                  }}
                >
                  Ask us anything here
                </Typography>
                <Grid container spacing={2} direction="column">
                  <InputField
                    label={fields[0]}
                    value={name}
                    stateFunc={setName}
                  />
                  <InputField
                    label={fields[1]}
                    value={email}
                    stateFunc={setEmail}
                  />
                  <InputField
                    label={fields[2]}
                    value={contactNumber}
                    stateFunc={setContactNumber}
                  />
                  <InputField
                    label={fields[3]}
                    value={message}
                    stateFunc={setMessage}
                  />

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                      onClick={handleSendClick}
                    >
                      {messageLoading ? "Connecting ..." : "Send"}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <p className="successMessage">
                      {showMessage ? showMessage : ""}
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="center">
            <div
              style={{
                width: "100%",
                height: "450px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.3250105180564!2d77.48611079999999!3d28.7397117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf32bb5c5874d%3A0x5ad0907941d19992!2sAmul%20Polymer%20(India)%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1723138712431!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amul Polymer Location"
              ></iframe>
            </div>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ContactPage;
