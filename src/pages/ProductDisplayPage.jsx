import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
} from "@mui/material";
import { ProductCarouselImgs } from "../constants/ProductCarouselImgs";
import { productImages } from "../constants/images";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import ImgCarousel from "../components/ImgCarousel";
import { products } from "../constants/productData";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import ContactPage from "./ContactPage";

const ProductDisplayPage = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.title === productName);
  const productData = product || {};
  const productImgs = ProductCarouselImgs.filter(
    (img) => img.title == productName
  );
  const images = productImages.filter((item) => item.title == productName);

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
        mt: { xs: -10, md: -4, lg: 0 },
        mx: { xs: 0, md: "20px" },
        background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            class="hiddenblur"
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "horizontal",
              mx: "16px",
              mb: "10px",
            }}
          >
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
            className="hiddenLeft"
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
            <ImgCarousel images={productImgs} />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{
          mt: 10,
          flexWrap: "wrap",
        }}
      >
        {images?.length > 0 &&
          images.map((img, index) => (
            <Grid
              item
              className="hiddenblur"
              key={index}
              sx={{
                flex: {
                  xs: "0 1 100%",
                  sm: "0 1 calc(50%)", 
                  md: "0 1 calc(33.33% - 16px)", 
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "100%", // Ensure the card takes up the full width of the grid item
                  p: 2,
                  borderRadius: 5,
                  backgroundColor: "#2a2a2a",
                  transition: "opacity 0.3s ease",
                }}
              >
                {/* <AspectRatio minHeight="400px" maxHeight="500px" > */}
                <img
                  src={img.src}
                  loading="lazy"
                  alt=""
                  className="bg-[#2a2a2a]"
                />
                {/* </AspectRatio> */}
                <div style={{ textAlign: "center" }}>
                  <Typography
                    sx={{ color: "white", fontSize: "30px" }}
                    variant="h6"
                  >
                    {img.src.split("/")[2].split("-")[1]}
                  </Typography>
                  <Typography
                    sx={{ color: "white", mb: 1, fontSize: "14px" }}
                    variant="body2"
                  >
                    Dimensions :{" "}
                    <span style={{ whiteSpace: "nowrap" }}>
                      L : {img.dimensions.L}mm
                    </span>{" "}
                    |{" "}
                    <span style={{ whiteSpace: "nowrap" }}>
                      W : {img.dimensions.W}mm
                    </span>{" "}
                    |{" "}
                    <span style={{ whiteSpace: "nowrap" }}>
                      H : {img.dimensions.H}mm
                    </span>
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
      </Grid>

      <ContactPage />
    </Box>
  );
};

export default ProductDisplayPage;
