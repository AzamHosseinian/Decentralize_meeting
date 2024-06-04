import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        background: "linear-gradient(to right, #190E49, #16151D)", // Linear gradient background
        borderTop: "1px solid #000000",
        color: "white",
      }}
    >
      <Link
        href="https://www.muon.net/"
        target="_blank"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/pion-muon-logo.svg"
          alt="Logo"
          style={{ height: "20px" }} // Removed marginLeft as it's centered now
        />
      </Link>
    </Box>
  );
}

export default Footer;
