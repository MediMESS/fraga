// Import necessary modules from Material-UI and Swiper
import React from "react";
import { Container, Box, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Navigation, Pagination } from "swiper/modules";

// Create your functional component
const ImageSlider: React.FC = () => {
  // Array of image URLs
  const imageUrls = [
    "https://placekitten.com/600/300",
    "https://placekitten.com/601/300",
    "https://placekitten.com/602/300",
    "https://placekitten.com/603/300",
    "https://placekitten.com/604/300",
    // Add more image URLs as needed
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {/* Swiper component */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
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
        {/* Pagination */}
        <div
          className="swiper-pagination"
          style={{ bottom: "10px", left: "10px" }}
        ></div>
        {/* Navigation buttons */}
        <IconButton
          className="swiper-button-prev"
          style={{ position: "absolute", right: "10px" }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          className="swiper-button-next"
          style={{ position: "absolute", right: "0px" }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

// Export your component
export default ImageSlider;
