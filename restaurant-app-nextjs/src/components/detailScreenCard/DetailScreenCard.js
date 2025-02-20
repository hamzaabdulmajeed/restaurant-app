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

const DetailScard = ({ image, rating, name, time, kilometer }) => {
  return (
    <Card >
      <Box sx={{ width: "184px", height: "106px", display: "flex"}}>
      <Box width="78px" height="106px" margin="4px">
        <Image
        

          width={78}
          height={106}
          src={image}
          alt="restaurant"
          
          
          priority // Optional: makes this image a loading priority
        />
      </Box>
      <Box width="90px" height="40px" margin="4px">
     <Box width="90px" height="40px" alignItems="center">
     <Typography variant="body2" color="text.secondary" height="40px" lineHeight="1">
             {name} <br />
             {"4.5 ★"}
             {/* <Rating value={rating} readOnly /> */}
          </Typography>
     </Box> 
        {/* <CardContent> */}
        <Box width="100px" height="36px" marginTop="7px" marginBottom="7px">
        <Typography height="45px" lineHeight="1">
            {time}
            <br/>
            

            {kilometer}
          </Typography>

        </Box>
         
         
          
        {/* </CardContent> */}
      </Box>
      </Box>
    </Card>
  );
};

export default DetailScard;