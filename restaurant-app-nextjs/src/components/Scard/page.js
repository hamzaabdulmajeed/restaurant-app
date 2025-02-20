import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
} from "@mui/material";
import Image from "next/image";

const RestaurantCard = ({ image, rating, sales, discount, description }) => {
  return (
    <Card >
      <Box sx={{ width: "316px", height: "114px", display: "flex"}}>
      <Box width="90px" height="90px" margin="4px">
        <Image
        
          src={image}
          alt="restaurant"
          
          
          priority // Optional: makes this image a loading priority
        />
      </Box>
      <Box width="190px" height="90px" margin="4px">
     <Box width="190px" height="26px">
     <Typography variant="body2" color="text.secondary" height="26px" lineHeight="1">
             {sales} <br />
            {discount}
          </Typography>
     </Box> 
        {/* <CardContent> */}
        <Box width="190px" height="45px" marginTop="7px" marginBottom="7px">
        <Typography height="45px" lineHeight="1">
            {description}
          </Typography>

        </Box>
          <Box width="190px" height="20px" >
          <Rating value={rating} readOnly />
          </Box>
         
          
        {/* </CardContent> */}
      </Box>
      </Box>
    </Card>
  );
};

export default RestaurantCard;
