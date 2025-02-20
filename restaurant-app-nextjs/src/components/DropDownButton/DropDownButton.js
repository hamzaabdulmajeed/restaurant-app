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

const CardS = ({ image, name, rating, description, distance, time }) => {
  return (
    <Card sx={{ width: "300px", height: "200px", borderRadius: "20px", overflow:"visible", display:"flex", justifyContent:"center"}} >
      <Box sx={{ width: "300px", height: "200px", borderRadius:"20px" }}>
        <Box width="300px" height="112px" borderRadius="20px">
          <Image
        //   borderRadius={20}
            // width="50%%"
            width={300}
            height={112}
            src={image}
            alt="food"
            priority 
          />
        </Box>
        <Box width="300px" height="88px" margin="4px">
          {/* <CardContent> */}

          <Box
            width="300px"
            height="16px"
            marginTop="7px"
            marginBottom="7px"
            display="flex"
            // justifyContent="space-between"
            alignItems="center"
          >
            {/* <Typography height="45px" lineHeight="1"> */}
            {name}
            <Rating value={rating} readOnly />
            {/* </Typography> */}
          </Box>
          <Box width="180px" height="30px" 
        //   marginTop="7px" 
        //   marginBottom="7px"
          >
            <Typography 
            // height="45px" 
            // lineHeight="1"
            >
              {description}
            </Typography>
          </Box>
          <Box 
            width="110px"
            height="16px"
            // marginTop="7px"
            // marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            
              <p>{distance}</p> 
              <p>{time}</p>
           
          </Box>
         

          {/* </CardContent> */}
        </Box>
      </Box>
    </Card>
  );
};

export default CardS;
