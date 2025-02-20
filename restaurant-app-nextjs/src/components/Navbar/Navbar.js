"use client";
import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LogoIcon from "../../assets/logo.png";
import vector from "../../assets/Vector.png";
import Typography from "@mui/material/Typography";
import bookMark from "../../assets/bookmark.png";
import active from "../../assets/active.png";
import rectangle from "../../assets/rectangle.png";
import { Restaurant } from "@mui/icons-material";
// import RestaurantList from "../favourites";
import { useContext, useState } from "react";
import Link from "@mui/material/Link";

// import { FavoriteItem } from "../../context";
import { FavoriteItem } from "../../app/context";
import { Menu, MenuItem, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ResponsiveAppBar() {
  const { favorites, setFavorites } = useContext(FavoriteItem);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  console.log(FavoriteItem);
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = async () => {
    try {
      // If using a backend API for logout
      const response = await fetch("http://localhost:3002/users/logout", {
        method: "POST",
        credentials: "include", // Include cookies if using sessions
      });

      if (response.ok) {
        toast.success("Logged out successfully");
        document.cookie = "user=; path=/; max-age=0; SameSite=Lax;";
        // Clear any token from localStorage or sessionStorage
        localStorage.removeItem("userId");
        // sessionStorage.removeItem('authToken');

        // Notify the user and redirect
        router.push("/signin"); // Redirect to signin page
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("An error occurred during logout");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);

    // Update the state
    setFavorites(updatedFavorites);
  
    // Sync the updated favorites with localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "66",
        //   backgroundColor: "#FFFFFF",
        //   color: "black",
        //   display: "flex",
        //   justifyContent: "center",
      }}
    >
      <Box
        backgroundColor="#FFFFFF"
        color="black"
        display="flex"
        justifyContent="space-between"
        // maxWidth={1440}
        // maxHeight={96}
        height={66}
        alignItems="center"
      >
        {/* Content goes here */}
        <Box
          display="flex"
          alignItems="center"
          width="400px"
          paddingLeft="50px"
          justifyContent="flex-start"
        >
          <Box width={80} height={64}>
          <Link href="/" underline="hover">
          <Image src={LogoIcon} width={65} height={63} alt="Logo" />
          </Link>

          </Box>
           {/* 
          {/* <Box maxWidth={1189} maxHeight={47} display="flex" alignItems="center">
          <Image src={vector} width={11} height={16} alt="Location Icon" />
          <Typography ml={1}>Kalamazoo, Michigan USA</Typography>
          </Box> */}
        </Box>

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          width={250}
        >
          <Box style={{position:"relative"}}>
          <Box position="absolute" left="42px" top="2px" color="red"> {favorites.length}</Box>
          <Box>
            <Button onClick={handleClick}>
             
              {/* <Image src={bookMark} width={24} height={24} alt="Favorites" /> */}
              {favorites.length > 0 ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "red" }} />
              )}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "favorites-button",
              }}
            >
              {favorites.length > 0 ? (
                favorites.map((item) => (
                  <MenuItem
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      width:"200px"
                    }}
                  >
                    <Box display="flex" flexDirection="column" width="100%">
                      <img
                        src={item.image}
                        width="100%"
                        height="100%"
                        alt={item.name}
                        style={{ borderRadius: 4 }}
                      />

                      <Box ml={1} flex="1">
                        <Typography fontWeight="bold">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ⭐ {item.rating} · ⏱ {item.time} · 📍{item.distance}
                        </Typography>
                      </Box>
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={() => removeFromFavorites(item.id)}
                        sx={{ alignSelf: "center" }}
                      >
                        Remove
                      </Button>
                    </Box>
                    <Divider sx={{ width: "100%", my: 1 }} />
                  </MenuItem>
                ))
              ) : (
                <MenuItem>
                  <Typography>No items in favorites</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          
          </Box>
          <Box>
            <Image src={active} width={24} height={24} alt="Logo" />
          </Box>
          <Box onClick={handleLogout} sx={{ cursor: "pointer" }}>
            <ExitToAppIcon />
          </Box>
        </Box>

        {/* <Box  width={220} height={47} display="flex" alignItems="center" justifyContent="center" > */}
        {/* <Box>
            <Image src={rectangle} width={34} height={34} alt="Logo" />
            </Box> */}
        {/* <Box paddingTop= {1} paddingLeft= {1} >
            <Typography  width={113}  color="#030900" lineHeight={0}>User Name</Typography>
            <Typography  width={113}  color="#030900">abc@gmail.com</Typography>

            </Box> */}
        {/* </Box> */}
      </Box>
      {/* </Box> */}
      {/* </Toolbar> */}
      {/* </Container> */}
    </AppBar>
  );
}

export default ResponsiveAppBar;
