import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "src/shared/Layout/theme";

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
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, The page you're lookin for doesn't exist.
      </Typography>
      <Button component={Link} to="/fraga/" variant="text">
        Go Back Home
      </Button>
    </Container>
  </ThemeProvider>
);

export default NotFound;
