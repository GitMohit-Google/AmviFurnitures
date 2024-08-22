import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { FaMapMarkerAlt } from "react-icons/fa";
import { markers } from "../constants/statesData";
import { Tooltip } from "@mui/material";
// Import India TopoJSON data (assuming it's in the public folder or an imported JSON file)
const indiaTopoJson = "./in.json"; 
  

const IndiaMap = () => {
  const [content, setContent] = useState(""); // State to hold tooltip content

  const handleMouseOver = (name) => {
    setContent(name); // Update tooltip content on hover
  };

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [78.9629, 22.5937], // Center the map on India
        scale: 1000, // Scale the map appropriately
      }}
      width={800}
      height={600}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={indiaTopoJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none",
                },
                hover: {
                  fill: "gray",
                  outline: "none",
                },
                pressed: {
                  fill: "black",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>

      {markers?.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates} onMouseOver={() => handleMouseOver(name)}>
          <FaMapMarkerAlt className="text-red-800" />
        </Marker>
      ))}
      {markers?.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates} onMouseOver={() => handleMouseOver(name)}>
          <FaMapMarkerAlt className="text-orange-700" />
        </Marker>
      ))}
      <Tooltip content={content} />
    </ComposableMap>
  );
};

export default IndiaMap;
