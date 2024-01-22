// Import necessary modules
import { motion } from "framer-motion";
import { Container, Grid, Typography } from "@mui/material";

// Create your functional component
const FragaStats = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container maxWidth="md">
      {/* Grid container to hold image and text */}
      <Grid container spacing={3} alignItems="center">
        {/* Grid item for the text with framer-motion animation */}
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 1.5 }}
          >
            <Typography variant="h4" gutterBottom>
              Your Title
            </Typography>
            <Typography variant="body1">
              Your text goes here. Customize as needed.
            </Typography>
          </motion.div>

          {/* Stats */}
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} sx={{ padding: 0 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" gutterBottom>
                  90%
                </Typography>
                <Typography variant="body1">
                  of customers rate our fragrances as their favorite.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: 0 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" gutterBottom>
                  100%
                </Typography>
                <Typography variant="body1">
                  of customers recommend Fraga to their friends and family.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        {/* Grid item for the image with framer-motion animation */}
        <Grid item xs={12} md={6}>
          <motion.img
            src="https://via.assets.so/movie.png?id=34&q=95&w=360&h=360&fit=fill" // Replace with your image URL
            alt="Your Image"
            style={{ width: "100%", borderRadius: "8px" }}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 1.5 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

// Export your component
export default FragaStats;
