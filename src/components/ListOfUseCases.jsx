// src/IntroPart.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ListOfUseCases = () => (
  <Box
    sx={{
      height: "70vh",
      backgroundImage: `url('/Background.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "30px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      p: 6,
      mt: 8,
      boxSizing: "border-box",
    }}
    mb={4}
  >
    <Typography variant="h4" sx={{ mb: 2 }}>
      List Of UseCase
    </Typography>
    <Typography>This is List Of UseCase section.</Typography>
  </Box>
);

export default ListOfUseCases;
