import { Box, Button, Grid, Typography } from "@mui/material";

// Create your functional component
const BackgroundCTA = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        padding: { xs: "32px 24px", lg: "80px 64px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
        }}
      >
        {/* Grid container to hold text and buttons */}
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          rowGap="20px"
        >
          {/* Grid item for the text on the left */}
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">
              Discover our exquisite fragrance collection
            </Typography>
            <Typography variant="body1">
              Indulge in the captivating scents of Fraga, crafted with precision
              and passion.
            </Typography>
          </Grid>
          {/* Grid item for the buttons on the right */}
          <Grid item xs={12} md={2}>
            {/* First button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginRight: "20px",
              }}
            >
              Shop Now
            </Button>
            <Button variant="contained" color="secondary">
              Visit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Export your component
export default BackgroundCTA;
