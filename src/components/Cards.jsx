import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import React from "react";

const Cards = () => {
  return (
    <div className='flex flex-row w-full p-3 px-5 items-center justify-evenly my-10'>
      <Card sx={{ width: 320, backgroundColor: '#2a2a2a' }}>
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

      <Card sx={{ width: 320, backgroundColor: '#2a2a2a' }}>
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
      <Card sx={{ width: 320, backgroundColor: '#2a2a2a' }}>
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
    </div>
  );
};

export default Cards;
