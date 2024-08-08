import React, { useState } from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  'demoImg.png',
  'demoImg.png',
  'demoImg.png',
  'demoImg.png',
];

function CustomArrow(props) {
  const { className, style, onClick, icon } = props;
  return (
    <IconButton
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: '50%',
        margin:"10px",
        transform: 'translateY(-50%)',
        zIndex: 1,

        height: 40,
        width: 40,
      }}
      onClick={onClick}
    >
      {/* {icon} */}
    </IconButton>
  );
}

function ImgCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [activeStep, setActiveStep] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow className="" icon={<KeyboardArrowRight />} />,
    prevArrow: <CustomArrow icon={<KeyboardArrowLeft />} />,
    beforeChange: (current, next) => setActiveStep(next),
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: isMobile ? '100%' : isTablet ? '80%' : '60%',
        margin: '0 auto',
      }}
    >
      <Slider {...settings}>
        {images.map((imgPath, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: '100%',
              height: isMobile ? 200 : isTablet ? 300 : 400,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain', // Ensure image fits within container without cropping
              }}
              src={imgPath}
              alt={`Slide ${index + 1}`}
            />
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          flexWrap: 'wrap',
        }}
      >
        {images.map((imgPath, index) => (
          <Box
            key={index}
            onClick={() => setActiveStep(index)}
            sx={{
              cursor: 'pointer',
              mx: 0.5,
              border: activeStep === index ? '2px solid black' : 'none',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 70,
                objectFit: 'contain', // Ensure thumbnail fits within its container
                borderRadius: 1,
                border: activeStep === index ? '2px solid black' : 'none',
              }}
              src={imgPath}
              alt={`Thumbnail ${index + 1}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ImgCarousel;
