"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { useRouter } from 'next/navigation'
// import { toast } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';



export default function Signin() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const router = useRouter()
  


  useEffect(() => {
    
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
  
    const user = getCookie('user'); 
  
    if (user) {
      router.push('/'); 
    }
  }, [router]);


  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    


    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
  
  
    if (!validateInputs()) {
      return;
    }
  
    
    const data = new FormData(event.currentTarget);
    const formData = {
    
      email: data.get("email"),
      password: data.get("password"),
    };
  

try {
  const response = await fetch("http://localhost:3002/users/getUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",      
  });


  if (response.ok) {
    const data = await response.json(); 
    console.log("Response Data:", data);

    document.cookie = `user=${data.userId}; path=/; max-age=86400; SameSite=Lax;`;
        router.push('/')

    
    

    
    toast.success("Signin successfully");
  } else {
    const errorData = await response.json();
    toast.error(errorData.message);
  }
} catch (error) {
  console.error("An error occurred during signin:", error);
  toast.error("An unexpected error occurred");
}
  }
    
  return (
    <>
    <ToastContainer />
    
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{  padding: 2 , height: "470px" }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          height: "550px",
          padding: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        variant="outlined"
      >
        <Typography variant="h5" textAlign="center">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
         
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            name="email"
            placeholder="your@email.com"
            fullWidth
            required
            error={emailError}
            helperText={emailErrorMessage}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="••••••"
            fullWidth
            required
            error={passwordError}
            helperText={passwordErrorMessage}
          />
         
          <Button type="submit" variant="contained" onClick={validateInputs}>
            Sign In
          </Button>
        </Box>
       
        <Typography textAlign="center" variant="body2">
          Don't have an account?{""}
          <Link href="/signup" underline="hover">
            Signup
          </Link>
        </Typography>
      </Card>
      
    </Stack>
    </>
  );
}
