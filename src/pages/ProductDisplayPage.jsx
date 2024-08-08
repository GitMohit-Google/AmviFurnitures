import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import ImgCarousel from "../components/ImgCarousel";
import { products } from "../constants/productData";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const ProductDisplayPage = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.title === productName);
  const productData = product || {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, [productName]);

  const headingBackgroundColor = "#f0f0f0"; // Light grey background for the heading
  const headingBorderColor = "#ee4d37"; // Border color for the heading
  const textColor = "#333";
  const darkColor = "#444"; // Darker color for text

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 3 },
        // mx:"20px",
        mx: { xs: 0, md: "20px" },
        background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      <Grid container spacing={3} sx={{ mt: 4 }} flexWrap="wrap-reverse">
        {/* Left half of the screen */}
        <Grid item xs={12} md={6}>
          {/* Heading */}
          <Box
            sx={{
              backgroundColor: headingBackgroundColor,
              border: `2px solid ${headingBorderColor}`,
              borderRadius: 2,
              padding: 2,
              mb: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: textColor,
                fontSize: "1.75rem",
                textAlign: "left",
              }}
            >
              Why Our{" "}
              <Box
                sx={{
                  color: "#ee4d37",
                  display: "inline",
                  whiteSpace: "nowrap",
                }}
              >
                {productData.title}
              </Box>{" "}
              is a Versatile Seating Solution?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "horizontal", mx:"16px",mb:"10px"}}>
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </Box>
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: "black",
              fontWeight: "600",
              mb: 4,
              ml: 2,
              lineHeight: 1.6,
            }}
          >
            {productData.description}
          </Typography>

          {/* Accordions */}
          <Box
            sx={{
              ml: 1,
            }}
          >
            {productData.additional_info?.map((info, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  backgroundColor: headingBackgroundColor,
                  // #ee4d37
                  color: "#f0f0f0",
                  boxShadow: "none",
                  borderRadius: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#ee4d37" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "1.2rem",
                    }}
                  >
                    {info.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      color: "rgba(50,50,50)",
                      lineHeight: 1.6,
                    }}
                  >
                    {info.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>

        {/* Right half of the screen */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: darkColor,
              mb: 4,
              //   fontSize:"2rem",
              textAlign: "center",
            }}
          >
            {productData.title}
          </Typography>

          {/* Image Carousel */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   height: '100%',
              borderRadius: 2,
            }}
          >
            <ImgCarousel />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDisplayPage;
