import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { scrollToFAQs, scrollToWonderland } from "src/shared/Utils";
import "swiper/swiper-bundle.css";
import "./Header.css";

const Header = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(./assets/header.png)`,
        backgroundColor: theme.palette.secondary.main,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "500px", md: "800px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: { xs: "0 24px", lg: "0 64px" },

          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: { xs: "20px", lg: "32px" },
            height: "100%",
            width: { xs: "100%", md: "560px" },
            color: "background.default",
          }}
        >
          <Typography variant={isXs ? "h3" : "h1"} color="inherit">
            Discover the Beauty of Fraga fragrances
          </Typography>
          <Typography variant={isXs ? "body1" : "body2"} color="inherit">
            Indulge in the enchanting scents that capture the essence of nature
            and elegance.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              width: "100%",
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              sx={{
                width: "150px",
              }}
              onClick={scrollToWonderland}
            >
              Wonderland
            </Button>
            <Button
              variant="outlined"
              color="info"
              onClick={scrollToFAQs}
              sx={{
                width: "150px",
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
