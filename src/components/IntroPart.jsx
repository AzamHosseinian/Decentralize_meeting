// src/IntroPart.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const IntroPart = () => (
  <Box
    sx={{
      width: "60%",
      height: "50vh",
      background:
        "linear-gradient(180deg, #84FFFF 0%, #D3C4EE 77%, #F8BBD0 100%)",
      borderRadius: "70px",
      boxShadow: `
        0 -33px 24px -5px rgba(132, 255, 255, 0.99),
        0 -123px 26px -74px rgba(132, 255, 255, 0.77),
        0 -175px 70px -98px rgba(132, 255, 255, 0.51)
      `,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      p: 4,
    }}
    mb={4}
  >
    <Typography variant="h4" sx={{ mb: 2 }}>
      Intro Part
    </Typography>
    <Typography>This is the intro part section.</Typography>
  </Box>
);

export default IntroPart;
