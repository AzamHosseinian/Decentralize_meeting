// src/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(25, 14, 73, 0.6)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        color: "white",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link href="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </Box>
        <Box>
          <Link href="#about" color="inherit" sx={{ marginRight: 2 }}>
            About
          </Link>
          <Link href="#contact" color="inherit" sx={{ marginRight: 2 }}>
            Contact
          </Link>
          <Link href="#home" color="inherit" sx={{ marginRight: 2 }}>
            Home
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
