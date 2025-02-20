"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import ResponsiveAppBar from "@/components/Navbar/Navbar";
import Page from "@/components/footer/Footer";
import FoodI from "../../../assets/food.png";
import CardS from "../../../components/DropDownButton/DropDownButton";

export default function DetailUI() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const categories = ["All", "Fast Food", "Chinese Food", "Seafood", "Sweet"];


  const food = [
  
    { description: "Kids eat free", image: FoodI, name: "Waffle Fries", rating: "3", distance: "10KM", time: "30 min", price: "$10", category: "Fast Food" },
    { description: "Kids eat free", image: FoodI, name: "Chicken Nuggets", rating: "3", distance: "10KM", time: "30 min", price: "$10", category: "Fast Food" },
    { description: "Kids eat free", image: FoodI, name: "Cheeseburger", rating: "3", distance: "10KM", time: "30 min", price: "$10", category: "Fast Food" },
    { description: "Double Cheese Burger", image: FoodI, name: "Double Patty Burger", rating: "4", distance: "6KM", time: "18 min", price: "$9", category: "Fast Food" },
    { description: "Crispy Onion Rings", image: FoodI, name: "Onion Rings", rating: "4", distance: "9KM", time: "20 min", price: "$8", category: "Fast Food" },

  
    { description: "Fresh Grilled Salmon", image: FoodI, name: "Grilled Salmon", rating: "5", distance: "7KM", time: "25 min", price: "$18", category: "Seafood" },
    { description: "Crispy Fried Shrimp", image: FoodI, name: "Fried Shrimp", rating: "4", distance: "8KM", time: "22 min", price: "$15", category: "Seafood" },
    { description: "Lobster Roll", image: FoodI, name: "Lobster Roll", rating: "5", distance: "6KM", time: "20 min", price: "$20", category: "Seafood" },
    { description: "Garlic Butter Crab", image: FoodI, name: "Garlic Crab", rating: "5", distance: "9KM", time: "30 min", price: "$22", category: "Seafood" },
    { description: "Fish and Chips", image: FoodI, name: "Fish & Chips", rating: "4", distance: "10KM", time: "28 min", price: "$14", category: "Seafood" },

  
    { description: "Authentic Chinese", image: FoodI, name: "Kung Pao Chicken", rating: "4", distance: "8KM", time: "25 min", price: "$15", category: "Chinese Food" },
    { description: "Steamed Dumplings", image: FoodI, name: "Dumplings", rating: "5", distance: "7KM", time: "20 min", price: "$13", category: "Chinese Food" },
    { description: "Sweet and Sour Chicken", image: FoodI, name: "Sweet & Sour Chicken", rating: "4", distance: "6KM", time: "22 min", price: "$14", category: "Chinese Food" },
    { description: "Beef Chow Mein", image: FoodI, name: "Chow Mein", rating: "5", distance: "5KM", time: "18 min", price: "$12", category: "Chinese Food" },
    { description: "Spring Rolls", image: FoodI, name: "Spring Rolls", rating: "4", distance: "9KM", time: "24 min", price: "$10", category: "Chinese Food" },

  
    { description: "Chocolate Lava Cake", image: FoodI, name: "Chocolate Lava Cake", rating: "5", distance: "5KM", time: "15 min", price: "$7", category: "Sweet" },
    { description: "Strawberry Cheesecake", image: FoodI, name: "Strawberry Cheesecake", rating: "5", distance: "6KM", time: "18 min", price: "$9", category: "Sweet" },
    { description: "Macarons", image: FoodI, name: "Macarons", rating: "4", distance: "7KM", time: "20 min", price: "$8", category: "Sweet" },
    { description: "Ice Cream Sundae", image: FoodI, name: "Ice Cream Sundae", rating: "4", distance: "8KM", time: "22 min", price: "$6", category: "Sweet" },
    { description: "Tiramisu", image: FoodI, name: "Tiramisu", rating: "5", distance: "9KM", time: "25 min", price: "$10", category: "Sweet" }
];



  
  const categorizedFood = food.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  
  const categoryRefs = Object.keys(categorizedFood).reduce((acc, category) => {
    acc[category] = useRef(null);
    return acc;
  }, {});

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    categoryRefs[category]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  
  const handleClickOpen = (foodItem) => {
    setSelectedFood(foodItem);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFood(null);
  };

  
  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const addToCart = () => {
    if (selectedFood) {
      const updatedCart = [...cart, selectedFood];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      handleClose();
    }
  };

  return (
    <Box>
      <ResponsiveAppBar />

   
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        {categories.map((category) => (
          <Button key={category} variant={selectedCategory === category ? "contained" : "outlined"} onClick={() => handleCategoryClick(category)}>
            {category}
          </Button>
        ))}
      </Box>

      <Box sx={{ width: "100%", backgroundColor: "#F4F4ED", padding: "20px" }}>
   
        <Box sx={{ textAlign: "right", marginBottom: "10px" }}>
          <Button onClick={handleCartClick} sx={{ fontSize: "14px" }}>
            {cart.length} <ShoppingCartIcon fontSize="small" />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCartClose}>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <MenuItem key={index} sx={{ display: "flex", flexDirection: "column" }}>
                  <Image src={item.image} width={100} height={100} alt={item.name} />
                  <Typography>{item.name}</Typography>
                  <Typography variant="body2">Price: {item.price}</Typography>
                  <Button variant="text" color="error" size="small" onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>
                  <Divider sx={{ width: "100%", my: 1 }} />
                </MenuItem>
              ))
            ) : (
              <MenuItem>No items in cart</MenuItem>
            )}
          </Menu>
        </Box>

   
        {Object.keys(categorizedFood).map((category) => (
          <Box key={category} ref={categoryRefs[category]} sx={{ marginBottom: "40px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              {category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {categorizedFood[category].map((item, index) => (
                <Box key={index} onClick={() => handleClickOpen(item)} sx={{ width: "300px", cursor: "pointer" }}>
                  <CardS description={item.description} image={item.image} rating={item.rating} name={item.name} distance={item.distance} time={item.time} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}

   
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            {selectedFood?.name}
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedFood && (
              <Box sx={{ textAlign: "center" }}>
                <Image src={selectedFood.image} alt={selectedFood.name} width={300} height={200} />
                <Typography>{selectedFood.description}</Typography>
                <Typography>Rating: {selectedFood.rating}</Typography>
                <Typography>Distance: {selectedFood.distance}</Typography>
                <Typography>Price: {selectedFood.price}</Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={addToCart}>Add to Cart</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Page />
    </Box>
  );
}

