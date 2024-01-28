// Import necessary modules from Material-UI and Swiper
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Create your functional component
const Shop = () => {
  const theme = useTheme();

  // Check if the screen size is below the lg breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Array of image URLs
  const imageUrls = [
    "/assets/shop/Image-0.png",
    "/assets/shop/Image-1.png",
    "/assets/shop/Image-2.png",
    "/assets/shop/Image-3.png",
    "/assets/shop/Image-4.png",
  ];

  return (
    <Box
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
          nextEl: ".shop-swiper-button-next",
          prevEl: ".shop-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".shop-swiper-pagination",
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
          <div className="shop-swiper-pagination"></div>
        </Box>
        {/* Custom navigation buttons */}
        <Box>
          <IconButton className="shop-swiper-button-prev">
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton className="shop-swiper-button-next">
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

// Export your component
export default Shop;
