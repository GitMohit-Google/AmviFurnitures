import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ProductExpansionPanel({ products }) {
  return (
    <div>
      <Accordion className="menu-products-btn">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Products
        </AccordionSummary>
        <AccordionDetails className="menu-products-wrapper">
          {products.map((product, index) => (
            <li key={index} className="menu-product-item">
              <Link to={product.title}>{product.title}</Link>
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
