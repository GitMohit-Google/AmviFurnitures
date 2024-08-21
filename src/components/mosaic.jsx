import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const Mosaic = () => {
  return (
    <Box sx={{ width: "100%", minHeight: 829, padding: 2 }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {itemData.map((item, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div className="flex flex-col gap-2 w-full justify-center items-start my-2 bg-gray-100 rounded-md px-2 py-2 shadow-lg">
              <p className="text-xl font-medium">{item.title}</p>
              <p className="text-lg font-normal text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default Mosaic;
const itemData = [
  {
    img: "/News/AskMe.png",
    title: "AskMe invests $20 mn in online furniture marketplace MebelKart",
    desc: "Firm aims to acquire a significant market share in the fast growing furniture market",
  },
  {
    img: "/News/PepperFry.jpeg",
    title: "Pepperfry cuts losses by 32% in 2017-18",
    desc: "The company plans to achieve overall profitability over the next 12-18 months",
  },
  {
    img: "Logo-Wipro.jpg",
    title: "Wipro",
    desc: "Wipro to expand furniture business",
  },
  {
    img: "/IPPO.avif",
    title: "Luxury furniture brand Stanley Lifestyles gains 30% on trade debut",
    desc: "Shares worth over Rs 1,300 crore changed hands on both the National Stock Exchange (NSE) and the BSE. The good listing day performance follows strong demand for Stanley Lifestyles’ shares during its Rs 537 crore initial public offering (IPO).",
  },
  {
    img: "/News/Nilkamal.jpeg",
    title:
      "Nilkamal Consolidated June 2023 Net Sales at Rs 783.08 crore, up 5.83% Y-o-Y",
    desc: "Net Sales at Rs 783.08 crore in June 2023 up 5.83% from Rs. 739.94 crore in June 2022, Quarterly Net Profit at Rs. 32.43 crore in June 2023 up 13.15% from Rs. 28.66 crore in June 2022",
  },
  {
    img: "/Fabb.jpg",
    title: "Nick Scali outlines Fabb acquisition progress",
    desc: "Australia's Nick Scali Ltd has reported its results for the year ended 30th June 2024, the period in which it acquired UK retail chain",
  },
  {
    img: "/News/blogs/image copy 3.png",
    title:
      "Ikea pilots same-day delivery in Hyderabad, hits 100% EV delivery goal",
    desc: "As part of its sustainability strategy, Swedish furniture giant Ikea has committed to entering all new markets, including the Delhi-NCR region, with an EV-first approach",
  },
  {
    img: "/News/blogs/image copy 2.png",
    title: "Barker and Stonehouse's 2024 outdoor furniture trends",
    desc: "Lena Gierasinska, head of product and displays at retailer Barker and Stonehouse, looks at six trends making waves in the world of garden furniture design this year",
  },
  {
    img: "/News/blogs/image copy.png",
    title: "IKEA announces next phase of drone technology implementation",
    desc: "IKEA has announced the next phase in its drone technology – an upgraded AI-powered system capable of operating alongside staff around the clock.",
  },
  {
    img: "/News/blogs/image.png",
    title: "ufurnish.com launches the Home Awards",
    desc: "Furniture and furnishings shopping hub﻿ ufurnish.com has launched its consumer-facing Home Awards in conjunction with Stylist Magazine.",
  },
  {
    img: "/News/blogs/image copy 4.png",
    title: "Bed Kingdom supports cancer charity with furniture donation",
    desc: "Bed Kingdom, an online retailer of beds and bedroom furniture, recently donated two beds and mattresses to Candlelighters, a charity that supports families of children with cancer in Yorkshire.",
  },
  {
    img: "/News/blogs/image copy 5.png",
    title: "Furniture sales 'squeezed out' by going out",
    desc: "UK total retail sales may have increased by +0.5% YoY in July, against a growth of +1.5% in July 2023, but non-food sales were in decline, as shoppers opted for clothes and beauty products over home goods, says BRC-KPMG.",
  },
  {
    img: "/News/blogs/Screenshot 2024-08-21 010645.png",
    title: "IFHS – supporting Ireland's dynamic furniture industry",
    desc: "The IFHS, Ireland's premier furniture trade show, brings together all levels of the industry with a dedicated focus on enhancing its value.",
  },
  {
    img: "/News/blogs/image copy 7.png",
    title:
      "Warburg Pincus acquires majority stake in furniture fitting manufacturer Ebco",
    desc: "Commenting on the acquisition, Anish Saraf, Managing Director, Warburg Pincus India said, “We believe that the Indian furniture fittings and architectural hardware industry is poised for significant growth over the next several years",
  },
  {
    img: "/News/blogs/image copy 6.png",
    title:
      "Layer and KFI Studios Transform Plastic Waste into Stylish, Sustainable Furniture",
    desc: "London-based design studio Layer has partnered with US furniture brand KFI Studios to create the Vale Collection, a line of furniture wrapped in eco-friendly PET felt, revolutionizing sustainability and combating plastic waste",
  },
];
