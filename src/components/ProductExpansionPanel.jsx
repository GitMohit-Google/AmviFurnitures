import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function ProductExpansionPanel({products}) {
  return (
    <div>
      <Accordion className='menu-products-btn'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          PRODUCTS
        </AccordionSummary>
        <AccordionDetails className='menu-products-wrapper'>
       {products.map((product,index)=>(
            <li key={index} className="menu-product-item">
            <a href="#" >{product.name}</a>
            </li>
            ))}
        </AccordionDetails>
      </Accordion>
      
     
    </div>
  );
}
