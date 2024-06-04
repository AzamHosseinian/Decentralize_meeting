// src/FeatureCard.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const randomColor = () => {
  const colors = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const TopRectangle = styled("div")(({ color }) => ({
  height: "55%",
  backgroundColor: color,
  margin: "0 auto",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "16px",
  position: "relative",
  top: "-60px", // Adjust this value to control how much it extends out
}));

const FeatureCard = ({ title, description }) => {
  const color = randomColor();
  return (
    <Box
      sx={{
        width: 320,
        height: 350,
        bgcolor: "white",
        color: "white",
        borderRadius: "10px",
        m: 2,
        p: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "visible",
      }}
    >
      <TopRectangle color={color} />
      <Box sx={{ textAlign: "left", p: 2, position: "relative", top: "-20px" }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          HEADLINE
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button size="small" sx={{ color: "#84FFFF", mt: 1 }}>
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default FeatureCard;
