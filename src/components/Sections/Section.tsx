// Import necessary modules
import { motion } from "framer-motion";
import { Container, Grid, Typography } from "@mui/material";

// Create your functional component
const OverallFragrances = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container maxWidth="md">
      {/* Grid container to hold image and text */}
      <Grid container spacing={3} alignItems="center">
        {/* Grid item for the image with framer-motion animation */}
        <Grid item xs={12} md={6}>
          <motion.img
            src="your-image-url.jpg" // Replace with your image URL
            alt="Your Image"
            style={{ width: "100%", borderRadius: "8px" }}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 1.5 }}
          />
        </Grid>
        {/* Grid item for the text with framer-motion animation */}
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

// Export your component
export default OverallFragrances;
