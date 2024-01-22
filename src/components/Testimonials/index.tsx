// Import necessary modules from Material-UI and Swiper
import {
  NavigateBeforeOutlined as NavigateBeforeIcon,
  NavigateNextRounded as NavigateNextIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Create your functional component
const TestimonialSlider = () => {
  // Array of testimonies
  const testimonies = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      author: {
        name: "John Doe",
        job: "Web Developer",
        companyLogo: "company-logo-1.png",
        avatar: "avatar-1.png",
      },
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      author: {
        name: "John Doe",
        job: "Web Developer",
        companyLogo: "company-logo-1.png",
        avatar: "avatar-1.png",
      },
    },
    // Add more testimonies as needed
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4} sx={{ position: "relative" }}>
        {/* Swiper component */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          loop
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
        >
          {/* Map through the testimonies and create SwiperSlides */}
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <Box p={2} border="1px solid #ccc" borderRadius="8px">
                {/* Star rating */}
                <Box mb={2}>
                  {Array.from({ length: testimony.rating }).map(() => (
                    <StarIcon
                      key={`${testimony.author}-${testimony.rating}`}
                      color="primary"
                    />
                  ))}
                </Box>
                {/* Testimony text */}
                <Typography variant="body1" mb={2}>
                  {testimony.text}
                </Typography>
                {/* Author details */}
                <Grid container spacing={2}>
                  {/* First block with author details */}
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={testimony.author.avatar}
                        alt={testimony.author.name}
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimony.author.name}
                        </Typography>
                        <Typography variant="body2">
                          {testimony.author.job}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Vertical line */}
                  <Grid item xs={12} md={6}>
                    <Divider orientation="vertical" />
                  </Grid>
                  {/* Second block with company logo */}
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                    >
                      <img
                        src={testimony.author.companyLogo}
                        alt={`${testimony.author.name}'s Company Logo`}
                        style={{ maxWidth: "100%", maxHeight: "60px" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination */}
        <div
          className="swiper-pagination"
          style={{ bottom: "10px", left: "10px" }}
        ></div>
        {/* Custom navigation buttons */}
        <IconButton
          className="custom-swiper-button-prev"
          style={{
            position: "absolute",
            left: "10px",
            zIndex: 1,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          className="custom-swiper-button-next"
          style={{
            position: "absolute",
            right: "10px",
            zIndex: 1,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

// Export your component
export default TestimonialSlider;
