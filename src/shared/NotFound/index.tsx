import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "src/components/Layout/theme";

const NotFound = () => (
  <ThemeProvider theme={theme}>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: { xs: 150, md: 250 }, zIndex: 0 }}>
        <img
          src="./assets/not-found.svg"
          alt="factory1"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Typography variant="h4" component="div" gutterBottom>
        404 - Page Introuvable
      </Typography>
      <Typography variant="body1" gutterBottom>
        Désolé, la page que vous recherchez n'existe pas.
      </Typography>
      <Button component={Link} to="/zz-engineering/" variant="text">
        Revenir à l'acceuil
      </Button>
    </Container>
  </ThemeProvider>
);

export default NotFound;
