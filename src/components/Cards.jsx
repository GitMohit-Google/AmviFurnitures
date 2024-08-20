import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import React from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Premium Tables",
    subtitle: "Office",
    imageUrl: "/banners/Table-Photoroom.png",
    link: "/Plastic Dinner Table",
  },
  {
    title: "Signature Chairs",
    subtitle: "Office",
    imageUrl: "/banners/SignatureChair-Photoroom.png",
    link: "/Premium Chair",
  },
  {
    title: "Multipurpose Stools",
    subtitle: "Office",
    imageUrl: "/banners/Stool-Photoroom.png",
    link: "/Multipurpose Stool",
  },
  {
    title: "Armless Chairs",
    subtitle: "Office",
    imageUrl: "/banners/Armless-Chair-Photoroom.png",
    link: "/Armless Chair",
  },
  {
    title: "Comfy Chairs",
    subtitle: "Office",
    imageUrl: "/banners/Alpha-Chair-Photoroom.png",
    link: "/Comfy Chair",
  },
  {
    title: "Mid-Back Chairs",
    subtitle: "Office",
    imageUrl: "/banners/Mid-Back-Photoroom.png",
    link: "/Mid-Back Chair",
  },
  {
    title: "Double Tap Table",
    subtitle: "Office",
    imageUrl: "/banners/DoubleTable-Photoroom.png",
    link: "/Double-Top Table",
  },
  {
    title: "Baby Chairs",
    subtitle: "Office",
    imageUrl: "/banners/Teddy-Chair-Photoroom.png",
    link: "/Baby Chair",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full p-3 px-5 mt-10">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index}>
            <Card
              className="hiddenblur"
              sx={{
                position: "relative",
                backgroundColor: "#f8f8f8", // Off-white background color
                border: "2px solid #ee4d37", // Border color
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  border: "2px solid black", // Green border on hover
                },
              }}
            >
              <div style={{ textAlign: "center", position: "relative" }}>
                <Typography
                  sx={{ color: "black", fontSize: "30px" }}
                  variant="h6"
                >
                  {card.title}
                </Typography>
                <Typography sx={{ color: "#ee4d37" }} variant="body2">
                  {card.subtitle}
                </Typography>
              </div>
              <motion.div
                style={{
                  overflow: "hidden",
                  height: "300px",
                  position: "relative",
                  transition: "transform 0.3s ease", // Add transition for smooth scaling
                  transform: "scale(1)",
                }}
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={card.imageUrl}
                  loading="lazy"
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
