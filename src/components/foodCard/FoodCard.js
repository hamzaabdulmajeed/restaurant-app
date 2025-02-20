import React from "react";
import bookMark from "../../assets/bookmark.png";
import { useRouter } from "next/router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
  Link,
} from "@mui/material";
import Image from "next/image";

const Fcard = ({
  id,
  image,
  index,
  name,
  rating,
  description,
  distance,
  time,
  addToFavorites,
  isFavorite,
}) => {
  
  return (
    <Card
      sx={{
        width: "278px",
        height: "220px",
        borderRadius: "20px",
        overflow: "visible",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "278px",
          height: "220px",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <Box
          width="100%"
          height="150px"
          borderRadius="20px"
          position="absolute"
        >
          <Link href={`/restaurant/${id}`}>
            <img
              height={150} 
              width={278} 
              src={image}
              alt="food"
              style={{ cursor: "pointer", width: "100%", borderRadius: "20px" }} 
            />
          </Link>
        </Box>
        <Box position="relative" top="12px" left="220px">
          <Button
            onClick={addToFavorites}
            sx={{
              cursor: "pointer",
              padding: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "red" }} />
            )}

            
          </Button>
        </Box>

        <Box
          width="278px"
          height="88px"
          margin="4px"
          position="relative"
          top="120px"
        >
          <Box
            width="261px"
            height="16px"
            marginTop="7px"
            marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h3>{name}</h3>
            <Rating value={rating} readOnly />
          </Box>
          <Box display="flex" justifyContent="space-between" width="250px">
            <Box
              width="114px"
              height="30px"
            
            >
              <Typography
            
              >
                {description}
              </Typography>
            </Box>
          </Box>
          <Box>
            
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Fcard;
