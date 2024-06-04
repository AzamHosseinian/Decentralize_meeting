// src/Main.js
import React from "react";
import Box from "@mui/material/Box";
import HeroSection from "./HeroSection";
import Features from "./Features";
import IntroPart from "./IntroPart";
import ListOfUseCases from "./ListOfUseCases";

const Main = () => {
  return (
    <Box sx={{ backgroundColor: "#190E49", color: "white", p: 4 }}>
      <HeroSection />
      <Features />
      <IntroPart />
      <ListOfUseCases />
    </Box>
  );
};

export default Main;
