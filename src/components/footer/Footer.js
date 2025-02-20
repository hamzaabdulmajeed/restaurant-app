import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import flogo from "../../assets/flogo.png";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import fbook from "../../assets/fbook.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";

export default function page() {
  return (
    <Box
  sx={{
    width: "100%",
    backgroundColor: "#3D691B",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    padding: "50px 20px",
    justifyContent: { xs: "center", md: "space-around" }, // Center items on small screens, space out on larger
  }}
>
  {/* Logo and Social Media Section */}
  <Box
    sx={{
      width: { xs: "100%", md: "400px" },
      marginBottom: { xs: "20px", md: "0" }, // Space below on smaller screens
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
      <Image src={flogo} width={130} height={100} alt="Flogo Icon" />
    </Box>
    <Typography sx={{ color: "white", marginBottom: "20px" }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "15px",
      }}
    >
      <Image src={fbook} width={40} height={40} alt="Facebook Icon" />
      <Image src={apple} width={40} height={40} alt="Apple Icon" />
      <Image src={google} width={40} height={40} alt="Google Icon" />
    </Box>
  </Box>

  {/* Our Menu Section */}
  <Box
    sx={{
      width: { xs: "100%", md: "200px" },
      marginBottom: { xs: "20px", md: "0" }, // Space below on smaller screens
      textAlign: { xs: "center", md: "left" }, // Center text on small screens
    }}
  >
    <Typography sx={{ color: "white", fontWeight: "bold", marginBottom: "20px" }}>
      Our Menu
    </Typography>
    <Typography sx={{ color: "white", lineHeight: "2" }}>
      Home
      <br />
      All Restaurant
      <br />
      Contact Us
      <br />
      Favorites
    </Typography>
  </Box>

  {/* Newsletter Section */}
  <Box
    sx={{
      width: { xs: "100%", md: "400px" },
      textAlign: { xs: "center", md: "left" },
    }}
  >
    <Typography sx={{ color: "white", fontWeight: "bold", marginBottom: "20px" }}>
      Newsletter
    </Typography>
    <Typography sx={{ color: "white", marginBottom: "20px" }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
    <Typography sx={{ color: "white", lineHeight: "2" }}>
      T: 0123456789
      <br />
      E: bestlocaleats@gmail.com
    </Typography>
  </Box>
</Box>

  );
}
