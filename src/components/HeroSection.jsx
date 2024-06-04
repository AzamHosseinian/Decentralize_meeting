// src/HeroSection.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const GradientText = styled("span")({
  background:
    "linear-gradient(to bottom, #B2EBF2 0%, #D1C4E9 65%, #F8BBD0 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  fontWeight: "bold",
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          mb: 2,
          display: "inline",
          fontWeight: "bold",
        }}
      >
        Lorem ipsom dolor sitam <GradientText>consecteture</GradientText>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#84FFFF",
            borderRadius: "10px",
            padding: "16px 28px",
            color: "black",
          }}
        >
          Start Meeting
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#190E49",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "16px 28px",
            color: "white",
          }}
        >
          Read Documentation
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
