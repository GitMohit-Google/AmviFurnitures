import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import React from "react";
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='flex flex-row w-full p-3 px-5 items-center justify-evenly mt-10'>
      <Link to="/Plastic Dinner Table">
      <Card sx={{
          width: 320,
          backgroundColor: '#2a2a2a',
          cursor:"pointer",
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 0.9,
          },
        }}>
        <div style={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Premium Tables</Typography>
          <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="500px">
          <img
            src="/banners/Table-Photoroom.png"
            loading="lazy"
            alt=""
            className="bg-[#2a2a2a]"
          />
        </AspectRatio>
      </Card>
          </Link>

      <Link to="/Premium Chair">
      <Card sx={{
          width: 320,
          backgroundColor: '#2a2a2a',
          cursor:"pointer",
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 0.9,
          },
        }}>
        <div style={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Signature Chairs</Typography>
          <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="500px">

          <img
            src="/banners/SignatureChair-Photoroom.png"
            loading="lazy"
            alt=""
            className="bg-[#2a2a2a]"
          />
        </AspectRatio>
      </Card>
          </Link>
          <Link to="/Multipurpose Stool">
      <Card sx={{
          width: 320,
          backgroundColor: '#2a2a2a',
          cursor:"pointer",
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 0.9,
          },
        }}>
        <div style={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Multipurpose Stools</Typography>
          <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="500px">
          <img
            src="/banners/Stool-Photoroom.png"
            loading="lazy"
            alt=""
            className="bg-[#2a2a2a]"
          />
        </AspectRatio>
      </Card>
          </Link>

          <Link to="/Double-Top Table">
      <Card sx={{
          width: 320,
          backgroundColor: '#2a2a2a',
          cursor:"pointer",
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 0.9,
          },
        }}>
        <div style={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Double Tap Table</Typography>
          <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="500px">
            <img
              src="/banners/DoubleTable-Photoroom.png"
              loading="lazy"
              alt=""
              className="bg-[#2a2a2a]"
            />
        </AspectRatio>
      </Card>
          </Link>
    </div>
    <div className='flex flex-row w-full p-3 px-5 items-center justify-evenly mb-10'>
    <Link to="/Plastic Dinner Table">
    <Card sx={{
        width: 320,
        backgroundColor: '#2a2a2a',
        cursor:"pointer",
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 0.9,
        },
      }}>
      <div style={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Premium Tables</Typography>
        <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
      </div>
      <AspectRatio minHeight="300px" maxHeight="500px">
        <img
          src="/banners/Table-Photoroom.png"
          loading="lazy"
          alt=""
          className="bg-[#2a2a2a]"
        />
      </AspectRatio>
    </Card>
        </Link>

    <Link to="/Premium Chair">
    <Card sx={{
        width: 320,
        backgroundColor: '#2a2a2a',
        cursor:"pointer",
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 0.9,
        },
      }}>
      <div style={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Signature Chairs</Typography>
        <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
      </div>
      <AspectRatio minHeight="300px" maxHeight="500px">

        <img
          src="/banners/SignatureChair-Photoroom.png"
          loading="lazy"
          alt=""
          className="bg-[#2a2a2a]"
        />
      </AspectRatio>
    </Card>
        </Link>
        <Link to="/Multipurpose Stool">
    <Card sx={{
        width: 320,
        backgroundColor: '#2a2a2a',
        cursor:"pointer",
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 0.9,
        },
      }}>
      <div style={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Multipurpose Stools</Typography>
        <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
      </div>
      <AspectRatio minHeight="300px" maxHeight="500px">
        <img
          src="/banners/Stool-Photoroom.png"
          loading="lazy"
          alt=""
          className="bg-[#2a2a2a]"
        />
      </AspectRatio>
    </Card>
        </Link>

        <Link to="/Double-Top Table">
    <Card sx={{
        width: 320,
        backgroundColor: '#2a2a2a',
        cursor:"pointer",
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 0.9,
        },
      }}>
      <div style={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'white',fontSize:"30px" }} variant="h6">Double Tap Table</Typography>
        <Typography sx={{ color: 'white' }} variant="body2">Office</Typography>
      </div>
      <AspectRatio minHeight="300px" maxHeight="500px">
          <img
            src="/banners/DoubleTable-Photoroom.png"
            loading="lazy"
            alt=""
            className="bg-[#2a2a2a]"
          />
      </AspectRatio>
    </Card>
        </Link>
  </div>
    </div>
  );
};

export default Cards;
