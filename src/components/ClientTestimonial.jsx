import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Sunil Goyal",
    firm:"Goyal Distributor, Agra",
    comment:
      "I was amazed by the quality and durability of the furniture I purchased. It’s lightweight, easy to move around, and looks fantastic in my garden.",
  },
  {
    name: "Vinod",
    firm:"VK Enterprises, Ghaziabad",
    comment:
      "The chairs and table I bought are perfect for my balcony. They’re stylish, comfortable, and weather-resistant. I couldn’t have asked for a better set!",
  },
  {
    name: "Anil Sahu",
    firm:"Citizen Sales, Allahabad",
    comment:
      "I was initially skeptical, but this company has completely changed my mind. The designs are modern, and the material is surprisingly sturdy. Great value for money!",
  },
  {
    name: "Ramesh Dua",
    firm:"Dua Steel furniture, Palwal",
    comment:
      "The furniture is both functional and attractive. It’s perfect for both indoor and outdoor use, and I love how easy it is to clean and maintain.",
  },
  {
    name: "Gaurav Jasval",
    firm:"Rangoli furniture, Banaras",
    comment:
      "The dining set I bought is fantastic! It’s durable, sleek, and surprisingly comfortable. It’s perfect for my small apartment, and I’m very happy with my purchase.",
  },
  // {
  //   name: "Neha Kapoor",
  //   comment:
  //     "I’m so impressed with the quality. The color hasn’t faded at all, even after months of outdoor use, and it still looks as good as new.",
  // },
  // {
  //   name: "Anjali Menon",
  //   comment:
  //     "I was looking for affordable yet stylish furniture, and this company delivered! The chairs and tables are perfect for my patio, and they’ve held up beautifully against the elements.",
  // },
  // Add more testimonials as needed
];

const ClientTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "30px 10px",
        maxWidth: {
          xs: "350px", // Mobile screen width
          sm: "700px", // Tablet screen width
          md: "1200px", // Laptop screen width
        },
      }}
    >
      <div className="flex w-full items-center justify-center mb-10">
        <p className="text-4xl">Clients Testimonials</p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: "0 15px" }} className="hiddenblur">
            <Card
              sx={{
                padding: "20px",
                paddingLeft: "60px",
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "0 auto",
                height: { xs: "300px", sm: "330px", md: "280px" },
                position: "relative",
              }}
            >
              <CardContent>
                <FormatQuoteIcon
                  sx={{
                    transform: "rotate(180deg)",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    fontSize: "45px",
                    color: "lightgray",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold",color:"#ee4d37" }}
                  className="hiddenDown"
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "10px",color:"#616161" }}
                  className="hiddenDown"
                >
                  {testimonial.firm}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    position: "relative",
                    paddingRight: "10px",
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      transform: "scaleX(-1)",
                      position: "absolute",
                      top: "-7px",
                      left: "-25px",
                      fontSize: "20px",
                    }}
                  />
                  <span className="hiddenblur">{testimonial.comment}</span>
                  <FormatQuoteIcon
                    sx={{ fontSize: "20px", marginLeft: "5px" }}
                  />
                </Typography>
                <Box
                  className="hiddenTop"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "50px",
                    width: "70px",
                    mt: 2,
                  }}
                >
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientTestimonials;
