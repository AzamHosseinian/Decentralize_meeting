// src/Features.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    title: "Feature 1",
    description: "Sed imperdiet enim ligula, vitae viverra justo.",
    image: "",
  },
  {
    title: "Feature 2",
    description: "Sed imperdiet enim ligula, vitae viverra justo.",
    image: "",
  },
  {
    title: "Feature 3",
    description: "Sed imperdiet enim ligula, vitae viverra justo.",
    image: "",
  },
];

const Features = () => (
  <Box mb={4} sx={{ textAlign: "center", height: "100vh" }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      List of Features
    </Typography>
    <Typography sx={{ mb: 8 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
      urna in justo euismod condimentum.
    </Typography>
    <Grid container justifyContent="center" spacing={2}>
      {featuresData.map((feature, index) => (
        <Grid item key={index}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;
