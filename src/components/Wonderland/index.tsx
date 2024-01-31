// Import necessary modules from Material-UI and Swiper
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { WonderlandID } from "src/shared/Utils";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Create your functional component
const Wonderland = () => {
  const theme = useTheme();

  // Check if the screen size is below the lg breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Array of image URLs
  const imageUrls = [
    "/assets/Wonderland/Wonderland-0.png",
    "/assets/Wonderland/Wonderland-1.png",
    "/assets/Wonderland/Wonderland-2.png",
    "/assets/Wonderland/Wonderland-3.png",
    "/assets/Wonderland/Wonderland-4.png",
  ];

  return (
    <Box
      id={WonderlandID}
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "20px", lg: "32px" },
        padding: { xs: "0 24px", lg: "0 64px" },
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4">Flower Wonderland</Typography>
      <Typography variant="body1">
        Step into a fragrant world of floral beauty.
      </Typography>

      {/* Swiper component */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={32}
        slidesPerView={isMobile ? 1 : 3}
        loop
        navigation={{
          nextEl: ".Wonderland-swiper-button-next",
          prevEl: ".Wonderland-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".Wonderland-swiper-pagination",
        }}
        style={{
          width: "100%",
        }}
      >
        {/* Map through the image URLs and create SwiperSlides */}
        {imageUrls.map((imageUrl) => (
          <SwiperSlide
            key={imageUrl}
            style={{
              width: "100%",
            }}
          >
            <Box
              className="shadow"
              sx={{
                backgroundImage: `url(${imageUrl})`,
                height: { xs: "300px", lg: "400px" },
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Block with Pagination and Navigation */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {/* Pagination */}
        <Box>
          <div className="Wonderland-swiper-pagination"></div>
        </Box>
        {/* Custom navigation buttons */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "8px", lg: "16px" },
          }}
        >
          <IconButton
            className="Wonderland-swiper-button-prev"
            sx={{
              border: `1px solid`,
              borderColor: "primary.main",
              width: { xs: "32px", lg: "42px" },
              height: { xs: "32px", lg: "42px" },
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: { xs: "20px", lg: "32px" },
              }}
            />
          </IconButton>
          <IconButton
            className="Wonderland-swiper-button-next"
            sx={{
              border: `1px solid`,
              borderColor: "primary.main",
              width: { xs: "32px", lg: "42px" },
              height: { xs: "32px", lg: "42px" },
            }}
          >
            <ArrowForwardIcon
              sx={{
                fontSize: { xs: "20px", lg: "32px" },
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

// Export your component
export default Wonderland;
