import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import logo from "./assets/logo-b.png"; // Assuming the logo is uploaded here

// Invitation component for verifying the participation
function InvitationPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [isParticipationRecorded, setIsParticipationRecorded] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // New state to control button disable

  // const navigate = useNavigate(); // To programmatically navigate to another route

  const fadeInStyle = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.95)" },
    config: { duration: 500 },
  });

  const buttonSpring = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: isVerified ? "scale(0.95)" : "scale(1)" },
    reset: true,
    reverse: isVerified,
  });

  const handleVerify = () => {
    setIsVerified(true);
    setIsButtonDisabled(true); // Disable the button after verification
  };

  const handleParticipationRecorded = () => {
    setIsParticipationRecorded(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: isVerified ? "#f5f5f5" : "#f0f8ff",
        padding: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "600px" }}>
        <Box mb={4}>
          <img
            src={logo}
            alt="Lopera International School Logo"
            style={{
              maxWidth: { xs: "100px", md: "150px" },
              width: "100%",
              marginBottom: "1rem",
            }}
          />
        </Box>

        <Card
          sx={{
            padding: { xs: "1rem", md: "2rem" },
            boxShadow: 3,
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
          }}
        >
          <CardContent>
            <animated.div style={fadeInStyle}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: "bold", // Make title bold
                  color: "#DAA520", // Gold color for title
                }}
              >
                Graduation and Opening Day Ceremony
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: "#008C45", // Green (Italian flag color)
                }}
              >
                Lopera International School, Milano, Italy
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  color: "#CD212A", // Red (Italian flag color)
                }}
              >
                Date: 15th September 2024
              </Typography>

              {!isVerified ? (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.75rem" },
                      color: "#DAA520", // Gold color for invitation message
                    }}
                  >
                    You are invited!
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      marginBottom: "1rem",
                    }}
                  >
                    Please verify your participation by clicking the button
                    below.
                  </Typography>
                  <animated.div style={buttonSpring}>
                    <Button
                      variant="contained"
                      disabled={isButtonDisabled} // Button is disabled when isButtonDisabled is true
                      sx={{
                        backgroundColor: isButtonDisabled
                          ? "#C18C35"
                          : "#DAA520", // Change color when disabled
                        color: "#FFF",
                        "&:hover": {
                          backgroundColor: isButtonDisabled
                            ? "#C18C35"
                            : "#C18C35", // No hover effect when disabled
                        },
                        width: { xs: "100%", sm: "auto" },
                        padding: { xs: "0.8rem", md: "1rem" },
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                      onClick={handleVerify}
                    >
                      Approve Participation
                    </Button>
                  </animated.div>
                </>
              ) : (
                <>
                  <Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="success.main"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        color: "#008C45", // Green (Italian flag color for success)
                      }}
                    >
                      You have been verified!
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      Welcome to the Graduation and Opening Day Ceremony!
                    </Typography>
                  </Box>

                  {!isParticipationRecorded ? (
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        backgroundColor: "#008C45", // Green button for participation
                        color: "#FFF",
                        "&:hover": {
                          backgroundColor: "#006C34", // Darker green on hover
                        },
                        width: { xs: "100%", sm: "auto" },
                        marginTop: "1.5rem",
                        padding: { xs: "0.8rem", md: "1rem" },
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                      onClick={handleParticipationRecorded}
                    >
                      Record Participation
                    </Button>
                  ) : (
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{
                        marginTop: "1.5rem",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        color: "#CD212A", // Red (Italian flag color for participation)
                      }}
                    >
                      Your participation is recorded! Enjoy the event.
                    </Typography>
                  )}
                </>
              )}
            </animated.div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

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
        position: "relative",
        backgroundColor: "#f0f8ff", // Light blue background
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
        sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#333" }}
      >
        Upcoming Events
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Graduation Ceremony"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold", color: "#333" }} // Darker font color for the text
            secondaryTypographyProps={{ color: "#555" }} // Muted color for the dates
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Opening Day Ceremony"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold", color: "#333" }}
            secondaryTypographyProps={{ color: "#555" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Musical Concert"
            secondary="15 September 2024"
            primaryTypographyProps={{ fontWeight: "bold", color: "#333" }}
            secondaryTypographyProps={{ color: "#555" }}
          />
        </ListItem>
      </List>

      {/* Hashtags at the bottom */}
      <Box sx={{ position: "absolute", bottom: "20px", textAlign: "center" }}>
        <Typography variant="body1" sx={{ color: "#333", fontStyle: "italic" }}>
          #Be_Smart #Be_Happy
        </Typography>
      </Box>
    </Container>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />

        {/* Route to direct verification page */}
        <Route path="/LOPERA$INVITE2345678912" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE3456789123" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE4567891234" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE5678912345" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE6789123456" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE7891234567" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE8912345678" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE9123456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE0123456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1123456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE2234567891" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE3345678912" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE4456789123" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE5567891234" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE6678912345" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE7789123456" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE8891234567" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE9912345678" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1023456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1123456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1234567890" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE2345678901" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE3456789012" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE4567890123" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE5678901234" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE6789012345" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE7890123456" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE8901234567" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE9012345678" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE0123456789" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1234567801" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE2345678902" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE3456789013" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE4567890124" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE5678901235" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE6789012346" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE7890123457" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE8901234568" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE9012345679" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE0123456781" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE1234567892" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE2345678903" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE3456789014" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE4567890125" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE5678901236" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE6789012347" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE7890123458" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE8901234569" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE9012345670" element={<InvitationPage />} />
        <Route path="/LOPERA$INVITE0123456782" element={<InvitationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
