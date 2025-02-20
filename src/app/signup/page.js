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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useEffect } from 'react';


export default function SignUp() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const router = useRouter()

  useEffect(() => {
    // Helper function to get cookies
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
  
    const user = getCookie('user'); // Replace 'user' with your cookie name
  
    if (user) {
      router.push('/'); // Redirect to signin if user is not authenticated
    }
  }, [router]);

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name");


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

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
  
  
    if (!validateInputs()) {
      return;
    }
  
    // Collect form data.
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
  
    try {
      
      const response = await fetch("http://localhost:3002/users/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //  console.log("response", response)
      if (response.ok) {
        router.push('/signin')
        toast.success("Signup successfully");
      } else {
      
        const errorData = await response.json();
        toast.error(errorData.message); // Correct
        

      }
    } catch (error) {
      console.log("error", error)
      // console.error("An error occurred during signup:", error);
      toast.error("unexpected error")
    }
  };

  return (
    <>
    <ToastContainer/>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{  padding: 2 }}
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3,  }}>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <TextField
          
           
            id="name"
            name="name"
            placeholder="Jon Snow"
            fullWidth
            required
            error={nameError}
            helperText={nameErrorMessage}
          />
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
            Sign up
          </Button>
        </Box>
        
        <Typography textAlign="center" variant="body2">
          Already have an account?{" "}
          <Link href="/signin" underline="hover">
            Sign in
          </Link>
        </Typography>
      </Card>
    </Stack>
    </>
 
  );
}

// }
// "use client"
// import { FormEvent } from 'react'
// import { useRouter } from 'next/navigation'
 
// export default function LoginPage() {
//   const router = useRouter()
 
//   async function handleSubmit(event) {
//     event.preventDefault()
 
//     const formData = new FormData(event.currentTarget)
//     const email = formData.get('email')
//     const password = formData.get('password')
 
//     const response = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     })
 
//     if (response.ok) {
//       router.push('/profile')
//     } else {
//       // Handle errors
//     }
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   )
// }
