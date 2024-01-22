// Import necessary modules from Material-UI
import { Container, Grid, Typography, Button } from "@mui/material";

// Create your functional component
const BackgroundCTA = () => {
  return (
    <Container
      maxWidth="md"
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
    >
      {/* Grid container to hold text and buttons */}
      <Grid container spacing={3} alignItems="center">
        {/* Grid item for the text on the left */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Your Title
          </Typography>
          <Typography variant="body1">
            Your text goes here. Customize as needed.
          </Typography>
        </Grid>
        {/* Grid item for the buttons on the right */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* First button */}
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Button 1
              </Button>
            </Grid>
            {/* Second button */}
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                Button 2
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

// Export your component
export default BackgroundCTA;
