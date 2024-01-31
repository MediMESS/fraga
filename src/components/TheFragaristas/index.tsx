// Import necessary modules from Material-UI and Swiper
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TheFragaristasID } from "src/shared/Utils";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const theFragaristas = [
  {
    name: "Isabella Rossi",
    avatar: "./assets/TheFragaristas/TheFragaristas-0.png",
    job: "Head Perfumer",
    description:
      "Master of Elegance, blending sophistication into every fragrance with an artistry that speaks to the refined tastes of our clients.",
  },
  {
    name: "Sophie Laurent",
    avatar: "./assets/TheFragaristas/TheFragaristas-1.png",
    job: "Customer Experience Specialist",
    description:
      "The Heartbeat of Hospitality, infusing warmth and charm into every interaction, ensuring our customers feel pampered and valued.",
  },
  {
    name: "Olivia Harper",
    avatar: "./assets/TheFragaristas/TheFragaristas-2.png",
    job: "Marketing Maven",
    description:
      "Strategic Allure, crafting enchanting narratives that bring our fragrances to life, making each one a story waiting to be told.",
  },
  {
    name: "Victoria Sterling",
    job: "Style Consultant",
    avatar: "./assets/TheFragaristas/TheFragaristas-3.png",
    description:
      "Elegance Personified, guiding our clients with a keen eye for sophistication, helping them discover scents that complement their unique style.",
  },
];
// Create your functional component
const TheFragaristas = () => {
  const theme = useTheme();

  // Check if the screen size is below the lg breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id={TheFragaristasID}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "20px", lg: "32px" },
        padding: { xs: "0 24px", lg: "0 64px" },
        maxWidth: "1440px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Typography variant="h2">The Fragaristas</Typography>
      <Typography variant="body1">
        Meet the fragasitas that are dedicated for catering every woman's unique
        scent.
      </Typography>

      {/* Swiper component */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={32}
        slidesPerView={isMobile ? 1 : 3}
        loop
        navigation={{
          nextEl: ".TheFragaristas-swiper-button-next",
          prevEl: ".TheFragaristas-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".TheFragaristas-swiper-pagination",
        }}
        style={{
          width: "100%",
        }}
      >
        {/* Map through the image URLs and create SwiperSlides */}
        {theFragaristas.map(({ avatar, name, job, description }) => (
          <SwiperSlide key={avatar}>
            <Box
              className="shadow"
              sx={{
                backgroundImage: `url(${avatar})`,
                height: { xs: "300px", lg: "400px" },
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: {
                  xs: "top right",
                  lg: "center center",
                },
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="body1">
                {/* Your text goes here. Customize as needed. */}
                {job}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.light",
                }}
              >
                {description}
                {/* Your text goes here. Customize as needed. */}
              </Typography>
            </Box>
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
          <div className="TheFragaristas-swiper-pagination"></div>
        </Box>
        {/* Custom navigation buttons */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "8px", lg: "16px" },
          }}
        >
          <IconButton
            className="TheFragaristas-swiper-button-prev"
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
            className="TheFragaristas-swiper-button-next"
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", lg: "32px" },
        }}
      >
        <Typography variant="h4">We're Hiring!</Typography>
        <Typography variant="body1">
          Do you want to spread your creative unique scent.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
          }}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  );
};

// Export your component
export default TheFragaristas;
