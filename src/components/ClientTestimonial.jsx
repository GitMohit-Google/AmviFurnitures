import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  { name: 'Ravi Kumar', comment: 'Their extensive product range, competitive pricing, and strong support system have helped us expand our customer base significantly.' },
  { name: 'Suvojit Kar', comment: 'Avro furniture is a very good and well-known brand. Chairs are solid and strong, quality is superb and looks very good, size is big and comfortable. Thanks Avro Furniture and Amazon.' },
  { name: 'Shirin Sheroff', comment: 'These chairs are very comfortable, sturdy and the colour is good so dust and dirt doesn\'t immediately show. I am very glad I purchased them.' },
  { name: 'Ravi Kumar', comment: 'Their extensive product range, competitive pricing, and strong support system have helped us expand our customer base significantly.' },
  { name: 'Suvojit Kar', comment: 'Avro furniture is a very good and well-known brand. Chairs are solid and strong, quality is superb and looks very good, size is big and comfortable. Thanks Avro Furniture and Amazon.' },
  { name: 'Shirin Sheroff', comment: 'These chairs are very comfortable, sturdy and the colour is good so dust and dirt doesn\'t immediately show. I am very glad I purchased them.' },
  // Add more testimonials as needed
];

const ClientTestimonials= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        padding: '40px 20px',
        maxWidth: {
          xs: '400px', // Mobile screen width
          sm: '700px', // Tablet screen width
          md: '1200px', // Laptop screen width
        },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
        Client's Testimonial
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: '0 15px' }}>
            <Card sx={{ padding: '20px', paddingLeft: '60px', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', margin: '0 auto', height:{xs:"300px",sm:"330px",md:"280px"}, position: 'relative' }}>
              <CardContent>
                <FormatQuoteIcon sx={{transform:"rotate(180deg)", position: 'absolute', top: '10px', left: '10px', fontSize: '45px', color: 'lightgray' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', position: 'relative', paddingRight: '10px' }}>
                  <FormatQuoteIcon sx={{ transform: 'scaleX(-1)', position: 'absolute', top: "-7px", left: '-25px', fontSize: '20px' }} />
                  {testimonial.comment}
                  <FormatQuoteIcon sx={{ fontSize: '20px', marginLeft: '5px' }} />
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", height: "50px", width: "70px", mt: 2 }}>
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientTestimonials;
