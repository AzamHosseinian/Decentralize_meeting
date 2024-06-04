// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#190E49",
      }}
    >
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
};

export default App;
