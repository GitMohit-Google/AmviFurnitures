import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-3 px-5 mt-10">
        <Link to="/Plastic Dinner Table">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Premium Tables
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Table-Photoroom.png"
                loading="lazy"
                alt="Premium Tables"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Premium Chair">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Signature Chairs
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/SignatureChair-Photoroom.png"
                loading="lazy"
                alt="Signature Chairs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Multipurpose Stool">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Multipurpose Stools
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Stool-Photoroom.png"
                loading="lazy"
                alt="Multipurpose Stools"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Armless Chair">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Armless Chairs
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Armless-Chair-Photoroom.png"
                loading="lazy"
                alt="Armless Chairs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Comfy Chair">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Comfy Chairs
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Alpha-Chair-Photoroom.png"
                loading="lazy"
                alt="Comfy Chairs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Mid-Back Chair">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Mid-Back Chairs
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Mid-Back-Photoroom.png"
                loading="lazy"
                alt="Mid-Back Chairs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Double-Top Table">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Double Tap Table
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/DoubleTable-Photoroom.png"
                loading="lazy"
                alt="Double Tap Table"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>

        <Link to="/Baby Chair">
          <Card
            className="hiddenblur"
            sx={{
              backgroundColor: "#2a2a2a",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h6"
              >
                Baby Chairs
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                Office
              </Typography>
            </div>
            <div style={{ overflow: "hidden", height: "300px" }}>
              <img
                src="/banners/Teddy-Chair-Photoroom.png"
                loading="lazy"
                alt="Baby Chairs"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
