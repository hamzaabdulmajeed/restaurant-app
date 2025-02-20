import * as React from "react";
import Box from "@mui/material/Box";
// import CardCover from '@mui/joy/CardCover';
import Button from "@mui/material/Button";
import active from "../../assets/active.png";
import wbback from "../../assets/wbback.jpg";
import wb from "../../assets/wb.png";
import wb1 from "../../assets/wb1.png";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import star from "../../assets/Staricon.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

export default function BoxBasic() {
  return (
   
    <Box
  component="section"
  sx={{
    maxWidth: "100%",
    backgroundColor: "black",
  }}
>
  <Box
    sx={{
      width: "100%",
      height: "400px",
      position: "relative",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
    }}
  >
    {/* Background Image */}
    <Image
      src={wbback}
      alt="background"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "400px",
        position: "absolute",
        // zIndex: -1,
      }}
    />

    {/* Left Side Image with Logo */}
    <Box
      sx={{
        width: { xs: "100%", md: "350px" },
        height: { xs: "200px", md: "255px" },
        margin: { xs: "10px auto", md: "0 50px 0 200px" },
        position: "relative",
      }}
    >
      <Image
        src={wb}
        alt="restaurant"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -70%)",
        }}
      >
        <Image src={wb1} height={67} width={240} alt="logo" />
      </Box>
    </Box>

    {/* Right Side Image with Overlay Details */}
    <Box
      sx={{
        width: { xs: "100%", md: "280px" },
        height: { xs: "200px", md: "255px" },
        position: "relative",
      }}
    >
      <Image
        src={wb}
        alt="details image"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          color: "white",
          width: "80%",
        }}
      >
        {/* Restaurant Name and Rating */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Maru Sushi & Grill
          </Typography>
          <Typography sx={{ marginLeft: "10px" }}>4.5 ★</Typography>
        </Box>

        {/* Contact Details */}
        {[
          { icon: phone, label: "021 *** ****" },
          { icon: email, label: "abc@gmail.com" },
          { icon: location, label: "Kalamazoo, Michigan, USA" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Image
              src={item.icon}
              height={20}
              width={20}
              alt={item.label}
              style={{ marginRight: "10px" }}
            />
            <Typography>{item.label}</Typography>
          </Box>
        ))}

        {/* Map Button */}
        {/* <Button
          sx={{
            marginTop: "10px",
            backgroundColor: "orange",
            color: "white",
            "&:hover": { backgroundColor: "#ff8c00" },
          }}
        >
          Map
        </Button> */}
      </Box>
    </Box>
  </Box>
</Box>


  );
}
