import { Box, Grid, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FragaCharmID } from "src/shared/Utils";

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
      id={FragaCharmID}
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
              display: "flex",
              borderRadius: "20px",
              justifyContent: "center",
              order: {
                xs: 2,
                md: 1,
              },
            }}
          >
            <AnimatePresence>
              <Box
                component={motion.div}
                className="shadow"
                sx={{
                  backgroundImage: "url(./assets/FragaCharm.png)",
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingTop: { lg: "24px" },
              paddingBottom: { lg: "24px" },
              paddingLeft: { md: "40px", lg: "80px" },
              marginBottom: { xs: "20px", md: "0" },
              order: {
                xs: 1,
                md: 2,
              },
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
                  <Typography variant="h2">
                    The Irresistible FragaCharm Elysian Essence
                  </Typography>
                  <Typography variant="h4">
                    Discover the fragrance that embodies elegance and beauty
                    that Everyone is Talking About.
                  </Typography>
                  <Typography variant="body1">
                    Our main product <b>FragaCharm</b> is a perfect blend of
                    simplicity and sophistication, designed to make you feel
                    confident and alluring. Experience the enchanting scent that
                    will captivate your senses and leave a lasting impression.
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FragaCharm;
