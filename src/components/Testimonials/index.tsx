import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Array of testimonies
const testimonies = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    author: {
      name: "Joanna Celery",
      job: "Yoga Coach",
      companyLogo:
        "https://static.vecteezy.com/system/resources/previews/008/912/556/non_2x/yoga-logo-design-template-free-vector.jpg",
      avatar:
        "https://middletownchristian.org/wp-content/uploads/2016/07/woman-testimonial-sidebar.jpg",
    },
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    author: {
      name: "Pauline Croissant",
      job: "Marketing Agency Manager",
      companyLogo:
        "data:image/jpeg;base64,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",
      avatar:
        "https://media.istockphoto.com/id/1136640630/photo/closeup-headshot-of-a-beautiful-black-woman.jpg?s=612x612&w=0&k=20&c=1P3RPPpGMnNvKCDlugCNWWqtb_tFDtdt9p-023ZG9P8=",
    },
  },
  // Add more testimonies as needed
];

// Create your functional component
const TestimonialSlider = () => {
  return (
    <Box
      sx={{
        padding: { xs: "0 24px", lg: "0 64px" },
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* Swiper component */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          loop
          style={{
            overflowY: "visible",
          }}
          navigation={{
            nextEl: ".testimonials-swiper-button-next",
            prevEl: ".testimonials-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".testimonials-swiper-pagination",
          }}
        >
          {/* Map through the testimonies and create SwiperSlides */}
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "0 auto",
                  maxWidth: "800px",
                }}
              >
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
                <Typography
                  variant="body1"
                  mb={2}
                  sx={{
                    fontSize: { xs: "16px", lg: "18px" },
                    textAlign: "center",
                  }}
                >
                  {testimony.text}
                </Typography>
                {/* Author details */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: { xs: "20px", lg: "32px" },
                  }}
                >
                  {/* First block with author details */}
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={testimony.author.avatar}
                      alt={testimony.author.name}
                      sx={{
                        width: { lg: "56px", xs: "32px" },
                        height: { lg: "56px", xs: "32px" },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: { lg: "12px", xs: "8px" },
                      }}
                    >
                      <Typography variant="body1" fontWeight="bold">
                        {testimony.author.name}
                      </Typography>
                      <Typography variant="body1">
                        {testimony.author.job}
                      </Typography>
                    </Box>
                  </Box>
                  {/* Second block with company logo */}
                  <Divider
                    orientation="vertical"
                    sx={{
                      height: { xs: "32px", lg: "56px" },
                      width: "1px",
                    }}
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={{
                      xs: "24px",
                      lg: "48px",
                    }}
                  >
                    <img
                      src={testimony.author.companyLogo}
                      alt={`${testimony.author.name}'s Company Logo`}
                      height="100%"
                    />
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
          <Box
            sx={{
              marginTop: { xs: "20px", lg: "32px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="testimonials-swiper-pagination"
          ></Box>
        </Swiper>
        {/* Pagination */}
        {/* Custom navigation buttons */}
        <IconButton
          className="testimonials-swiper-button-prev"
          style={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            top: "50%",
            transform: "translateY(-50%)",
            border: `1px solid`,
            borderColor: "primary.main",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          className="testimonials-swiper-button-next"
          style={{
            position: "absolute",
            right: 0,
            zIndex: 1,
            top: "50%",
            transform: "translateY(-50%)",
            border: `1px solid`,
            borderColor: "primary.main",
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

// Export your component
export default TestimonialSlider;
