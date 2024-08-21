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
    firm: "Goyal Distributor, Agra",
    comment: "The high-quality furniture provided has significantly boosted our sales and enhanced customer satisfaction. It's been a win-win partnership.",
  },
  {
    name: "Vinod",
    firm: "VK Enterprises, Ghaziabad",
    comment: "Our collaboration has been a great success. The stylish and durable products have elevated our store's reputation and driven repeat business.",
  },
  {
    name: "Anil Sahu",
    firm: "Citizen Sales, Allahabad",
    comment: "Offering these modern designs has added tremendous value to our product range. The response from customers has been overwhelmingly positive.",
  },
  {
    name: "Ramesh Dua",
    firm: "Dua Steel Furniture, Palwal",
    comment: "We've seen a significant improvement in our offerings thanks to the versatile and low-maintenance furniture. It’s greatly appreciated by our customers.",
  },
  {
    name: "Gaurav Jasval",
    firm: "Rangoli Furniture, Banaras",
    comment: "The durable and attractive furniture has been a major hit. Our customers are thrilled, and it has noticeably increased our sales.",
  },
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
        <p className="text-4xl py-1">Clients Testimonials</p>
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
