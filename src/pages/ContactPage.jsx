import React, { useContext, useRef } from "react";
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

  const handleAddressClick=()=>{
    const mapAddress = "https://maps.app.goo.gl/HLtyujuk7Rd894nc9";
    window.open(mapAddress, '_blank');
  }

  return (
    <>
      <ToastContainer />
      <Container maxWidth="lg" sx={{ mt: 16,mb:8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", color: "rgba(0, 0, 0, 0.67)" }}
          >
            We're <span style={{ color: '#ee4d37 ' }}>always eager</span> to hear from you!
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
                gap="10px"
                height="100%"
              >
                <Box display="flex" alignItems="center" mb={0}>
                  <IconButton disabled>
                    <LocationOnOutlined fontSize="large" color="primary" />
                  </IconButton>
                  <Box ml={1} onClick={handleAddressClick} sx={{cursor:"pointer"}}>
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      Address
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      H-49, Sector 63, H Block, Sector 62, Noida, Uttar Pradesh
                      201301
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
                      Mobile : (+91-7838257909)
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
                      support@dealnsoucoupons.in
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
                  p: 3,
                  boxShadow: 3,
                  maxWidth: "550px",
                  width: "100%",
                  margin: {
                    xs: "0 auto", // Center on smaller screens
                    md: "0 0 0 auto", // Align right on larger screens
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    padding: "2rem",
                    fontSize: "2rem",
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
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={(map) => {
                  mapRef.current = map;
                }}
              />
            </LoadScript>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ContactPage;
