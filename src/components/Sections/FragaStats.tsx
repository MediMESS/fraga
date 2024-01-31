import { Box, Grid, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FragaCharm = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: "1440px",
        paddingRight: { xs: "24px", lg: "64px" },
        paddingLeft: { xs: "24px", lg: "64px" },
        margin: "0 auto",
      }}
    >
      {inView && (
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingTop: { lg: "24px" },
              paddingBottom: { lg: "24px" },
              paddingRight: { md: "40px", lg: "80px" },
              marginBottom: { xs: "20px", md: "0" },
            }}
          >
            <AnimatePresence>
              <motion.div
                key="text"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
                transition={{ duration: 1.5 }}
                exit="hidden"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: { xs: "20px", lg: "32px" },
                  }}
                >
                  <Typography variant="h2">Magic is in the Air...</Typography>
                  <Typography variant="body1">
                    At Fraga, we pride ourselves on the popularity and customer
                    satisfaction of our fragrances. Our scents are loved by
                    thousands of customers who can't get enough of our unique
                    and captivating blends. Experience the magic for yourself
                    and find your signature scent today.
                  </Typography>

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
                          of customers recommend Fraga to their friends and
                          family.
                        </Typography>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <AnimatePresence>
              <Box
                component={motion.div}
                className="shadow"
                sx={{
                  backgroundImage: "url(./assets/fragrances.png)",
                  height: { xs: "300px", lg: "520px" },
                  width: "100%",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  backgroundPosition: "bottom 0px center",
                  backgroundRepeat: "no-repeat",
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
                transition={{ duration: 1.5 }}
                exit="hidden"
              />
            </AnimatePresence>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FragaCharm;
