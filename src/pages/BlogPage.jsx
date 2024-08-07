import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Stack, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDisplayPage = () => {
  const images = [
    'demoImg.png',
    'demoImg.png',
    'demoImg.png',
  ];

  const keyBenefits = [
    'Benefit 1: High quality and durable material.',
    'Benefit 2: Innovative design with a modern touch.',
    'Benefit 3: Available in multiple colors and sizes.',
    'Benefit 4: Affordable price with premium features.',
  ];

  const tableAdvantages = [
    'The double-top table is super durable',
    'It is lightweight yet strong inbuilt',
    'Eats up less space in the living or dining room',
    'The lower compartment provides a practical solution for storing items, keeping the top surface clean and uncluttered',
    'The dust particles do not settle easily because of the good quality material',
    'Could be paired with any sort of chairs',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slideAnimation = keyframes`
    from {
      transform: translateX(${animating ? '100%' : '0'});
    }
    to {
      transform: translateX(0);
    }
  `;

  const handleThumbnailClick = (index) => {
    if (index !== currentIndex && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimating(false);
      }, 300); // Animation duration
    }
  };

  const handleArrowClick = (direction) => {
    if (!animating) {
      const newIndex = (currentIndex + direction + images.length) % images.length;
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setAnimating(false);
      }, 300); // Animation duration
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f7f7f7' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: 'auto', overflow: 'hidden' }}>
            <Box
              component="img"
              src={images[currentIndex]}
              alt={`Product Image ${currentIndex + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                animation: animating ? `${slideAnimation} 0.5s ease-out` : 'none',
                transition: 'transform 0.5s ease-out',
              }}
            />
            <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
              {images.map((thumb, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => handleThumbnailClick(idx)}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '4px',
                    marginRight: 1,
                    border: idx === currentIndex ? '2px solid #1976d2' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'border 0.3s',
                    opacity: animating ? 0.6 : 1,
                  }}
                />
              ))}
            </Stack>
            <IconButton
              onClick={() => handleArrowClick(-1)}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                color: '#1976d2',
                zIndex: 1,
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={() => handleArrowClick(1)}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                color: '#1976d2',
                zIndex: 1,
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2, animation: `${keyframes`
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          `} 1s ease-out` }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                mb: 2,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Product Title
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#333',
                mb: 2,
                fontFamily: 'Open Sans, sans-serif',
                lineHeight: 1.6,
              }}
            >
              This is a detailed description of the product. It covers all the
              key features, specifications, and other relevant information
              about the product, making it clear and easy to understand.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                mt: 4,
                mb: 2,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              What Makes Our Double Top Tables the Best?
            </Typography>
            <ul
              style={{
                paddingLeft: '1.2rem',
                color: '#333',
                fontFamily: 'Open Sans, sans-serif',
                lineHeight: 1.6,
              }}
            >
              {tableAdvantages.map((advantage, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{advantage}</li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mt: 4,
          mb: 2,
          textAlign: 'center',
          color: '#1976d2',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Key Benefits:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {keyBenefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: 2,
                textAlign: 'center',
                backgroundColor: '#ffffff',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              <CardContent>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  {benefit}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDisplayPage;
