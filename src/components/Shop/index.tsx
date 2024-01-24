// Import necessary modules from Material-UI and Swiper
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Container,
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
    "https://placekitten.com/600/300",
    "https://placekitten.com/601/300",
    "https://placekitten.com/602/300",
    "https://placekitten.com/603/300",
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4} position="relative">
        <Typography variant="h4" gutterBottom>
          Shop
        </Typography>
        <Typography variant="body1">
          Your text goes here. Customize as needed.
        </Typography>

        {/* Swiper component */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
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
        >
          {/* Map through the image URLs and create SwiperSlides */}
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%" }}
              />
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
            <IconButton className="cuasdfstom-swiper-button-prev">
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton className="shop-swiper-button-next">
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

// Export your component
export default Shop;
