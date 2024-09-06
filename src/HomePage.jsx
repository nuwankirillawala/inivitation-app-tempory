import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "./assets/logo-b.png"; // Assuming the logo is uploaded here

function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: { xs: "1rem", sm: "2rem" },
      }}
    >
      {/* Lopera Logo */}
      <Box mb={4}>
        <img
          src={logo}
          alt="Lopera International School Logo"
          style={{
            maxWidth: "200px",
            width: "100%",
          }}
        />
      </Box>

      {/* Events List */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "1rem" }}
      >
        Upcoming Events
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Graduation Ceremony"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Opening Day Ceremony"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Musical Concert"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
        </ListItem>
      </List>
    </Container>
  );
}

export default HomePage;
