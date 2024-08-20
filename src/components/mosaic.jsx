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
        columns={{ xs: 1, sm: 2, md: 2, lg: 2 }}
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
    title: "Pepperfry cuts losses by 32% in 2017-18, ",
    desc: "The company plans to achieve overall profitability over the next 12-18 months",
  },

  {
    img: "/News/Wipro.jpg",
    title: "Wipro",
    desc: "Wipro to expand furniture business",
  },

  {
    img: "/News/Nilkamal.jpeg",
    title:
      "Nilkamal Consolidated June 2023 Net Sales at Rs 783.08 crore, up 5.83% Y-o-Y",
    desc: "Net Sales at Rs 783.08 crore in June 2023 up 5.83% from Rs. 739.94 crore in June 2022, Quarterly Net Profit at Rs. 32.43 crore in June 2023 up 13.15% from Rs. 28.66 crore in June 2022",
  },
  {
    img: "/News/download.jpeg",
    title: "Luxury furniture brand Stanley Lifestyles gains 30% on trade debut",
    desc: "Shares worth over Rs 1,300 crore changed hands on both the National Stock Exchange (NSE) and the BSE. The good listing day performance follows strong demand for Stanley Lifestyles’ shares during its Rs 537 crore initial public offering (IPO).",
  },
  {
    img: "/Fabb.jpg",
    title: "Nick Scali outlines Fabb acquisition progress ",
    desc: "Australia's Nick Scali Ltd has reported its results for the year ended 30th June 2024, the period in which it acquired UK retail chain",
  }
];
