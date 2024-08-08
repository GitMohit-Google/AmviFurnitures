import React, { useEffect } from 'react';
import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import ImgCarousel from '../components/ImgCarousel';
import { products } from '../constants/productData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatsBanner from '../components/StatsBanner';

const ProductDisplayPage = () => {
  const { productName } = useParams();
  const product = products.find(p => p.title === productName);
  const productData = product || {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, [productName]);

  const textColor = '#333';
  const highlightColor = '#1976d2';
  const backgroundGradient = 'linear-gradient(to bottom, #ffffff, #f0f0f0)';
  const darkColor = '#444'; // Darker color for the heading

  return (
    <Box sx={{ 
        padding: { xs: 2, md: 3 },
        background: backgroundGradient,
        minHeight: '100vh',
        width: '100vw',
        height: '50vh',
        // backgroundImage: 'url(/backgroundImg2.jpg)',
        overflowX: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6} >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography
              variant="h3"
              data-aos="fade-down"
              sx={{
                color: textColor,
                mb: 6,
                fontSize: "3.5rem",
                // fontFamily: 'Roboto, sans-serif',
              }}
            >
              {productData.title}
            </Typography>
            <Typography
              variant="body1"
              data-aos="fade-right"
              sx={{
                fontSize: '1.1rem',
                color: textColor,
                mb: 4,
                // fontFamily: 'Open Sans, sans-serif',
                lineHeight: 1.6,
              }}
            >
              {productData.description}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', borderRadius: 2 }}>
            <ImgCarousel />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 10,
          mb: 2,
          ml: '20px',
          textAlign: 'left',
          color: darkColor,
          fontSize: '25px',
        //   fontFamily: 'Roboto, sans-serif',
          bgcolor: "rgba(209, 126, 107, 0.55)",
          borderRadius: 3,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: 1.5,
          display: "flex",
          justifyContent: "center",
          width: 'auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bolder',
            color: 'rgb(52, 52, 84,0.9)',
            // fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: '25px',
            m: 2
          }}
        >
          Why Our {productData.title} is a Versatile Seating Solution
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {productData.benefits?.map((benefit, index) => (
          <Grid item xs={12} key={index} >
            <Box
            // data-aos="fade"
              className="benefits"
              sx={{
                padding: 2,
                background: 'linear-gradient(to right, #770303, #030249)',
                color: '#f0f0f0',
                borderRadius: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                // fontFamily: 'Open Sans, sans-serif',
                display: 'inline-block',
                position: 'relative',
                width: '500px',
                marginLeft: '20px',
                maxWidth: '90%',
                clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  minWidth: '250px',
                  height: 0,
                  borderTop: '15px solid #570303',
                  borderBottom: '20px solid transparent',
                  borderLeft: '20px solid transparent',
                },
              }}
            >
              <Typography
                variant="body1"
                className="benefits-text"
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                {benefit}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 15 }}>
        {productData.additional_info?.map((info, index) => (
          <Accordion
            key={index}
            sx={{
              ml: 2,
              mr: 0,
              my: 1,
              background: ' linear-gradient(to right, #373745, #25486f, rgb(160, 161, 161))',
              color: '#f0f0f0',
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            // data-aos="fade-up"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#f0f0f0' }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                sx={{
                //   fontWeight: 'bold',
                  color: "rgba(255, 255, 98, 0.655)",
                //   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  fontSize: "1.5rem"
                }}
              >
                {info.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  color: "beige",
                  lineHeight: 1.6
                }}
              >
                {info.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default ProductDisplayPage;
