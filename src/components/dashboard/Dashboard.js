"use client";

import * as React from "react";
import { useState, useContext, useEffect } from "react";


import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import DropdownButton from "../DropDownButton/DropDownButton";

import wifi from "../../assets/wifi.png";
import ac from "../../assets/ac.png";
import events from "../../assets/events.png";
import outdoor from "../../assets/outdoor.png";
import parking from "../../assets/parking.png";
import pet from "../../assets/pet.png";
import Pizza from "../../assets/pizza.png";
import RestaurantCard from "../Scard/page";
import Fcard from "../foodCard/FoodCard";
import Image from "next/image";
import FoodI from "../../assets/food.png";

import Link from "next/link";
import { Label } from "@mui/icons-material";
import { FavoriteItem } from "../../app/context";
import "./page.css"

const restaurants = [
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: 3,
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Gyoza",
  },
];



export default function Main() {
  const { favorites, setFavorites } = useContext(FavoriteItem);
  const [food, setFood] = useState([]); 
  

  useEffect(() => {
  
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:3002/foods/getFood", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); 
        setFood(data); 
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
  
  
    fetchFoods();
  }, []); 
  

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, [setFavorites]);

  console.log("favorites", favorites);

  const onAddToFavorites = (foodItem) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === foodItem.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, foodItem];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };
  
  const CategoryOnlyData = getUniqueData(food, "category");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFood =
    selectedCategory === "All"
      ? food
      : food.filter((item) => item.category === selectedCategory);

return(
  <Box
  component="section"
  sx={{
    height: "100%", 
    width: "100%", 
    display: "flex",
    flexDirection: {
      xs: "column", 
      md: "row", 
    },
    overflowX: "hidden",
  }}
>
  
  <Box
    sx={{
      width: {
        xs: "100%",
       md: "25%", 
      },
      borderRight: "1px solid",
      height: "auto",
      backgroundColor: "#F4F4ED",
      padding: {
        xs: "16px", 
        md: "0", 
      },
    }}
  >
    <Box
      sx={{
        width: "90%", 
        height: "auto",
        backgroundColor: "#F4F4ED",
        margin: "auto",
        position: "relative",
        paddingTop: "20px",

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          pb: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "18px", color: "#030900" }}>
          Menu
        </Typography>
        <Typography>All Items</Typography>
      </Box>

      <Box
        sx={{
          maxHeight: "308px",
          overflowY: "auto",
        }}
      >
        {CategoryOnlyData.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? "#ccc" : "#fff",
              border: "none",
              cursor: "pointer",
              margin: "5px 0",
              padding: "10px",
              textAlign: "left",
              width: "100%",
            }}
          >
            {category}
          </button>
        ))}
      </Box>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        backgroundColor: "#F4F4ED",
        mt: 4,
        pb: 2,
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            description={restaurant.description}
            image={restaurant.image}
            rating={restaurant.rating}
            sales={restaurant.sales}
            discount={restaurant.discount}
          />
        ))}
      </Box>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        mt: 4,
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "18px", color: "#030900" }}>
        Amenities
      </Typography>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      {[wifi, outdoor, pet, parking, ac, events].map((icon, index) => (
        <Image
          key={index}
          src={icon}
          width={80}
          height={80}
          alt={`Icon ${index + 1}`}
          style={{ marginBottom: "10px" }}
        />
      ))}
    </Box>
  </Box>

  
  <Box
    sx={{
      width: {
        xs: "100%", 
        md: "75%", 
      },
      height: "auto",
      backgroundColor: "#F4F4ED",
      padding: "16px",
    }}
  >
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#F4F4ED",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ color: "#030900" }}>
        {selectedCategory} <br />
        {filteredFood.length} Items
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        mt: 4,
        justifyContent: {
          xs: "center", 
          md: "flex-start", 
        },
      }}
    >
      {filteredFood.map((foodItem, index) => (
        <Fcard
          key={index}
          description={foodItem.description}
          image={foodItem.image}
          rating={foodItem.rating}
          name={foodItem.name}
          id={foodItem.id}
          isFavorite={favorites.some((fav) => fav.id === foodItem.id)}
          addToFavorites={() => onAddToFavorites(foodItem)}
        />
      ))}
    </Box>
  </Box>
</Box>

)
}
