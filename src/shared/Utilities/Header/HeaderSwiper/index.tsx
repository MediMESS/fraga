import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Box, Button, Typography } from "@mui/material";
import { Navigation, Autoplay } from "swiper/modules";
import "./HeaderSwiper.css";
import { Link } from "react-router-dom";

const slides = [
  {
    buttonText: "En Savoir Plus",
    imgUrl: "./assets/home/header/zzessential.png",
    text: "Z & Z ENGINEERING vous accompagne dans toutes les étapes de votre projet",
    to: "/zz-engineering/contact",
  },
  {
    buttonText: "Consultez nous",
    imgUrl: "./assets/home/header/engineer-team.png",
    text: "Une équipe d'ingénieurs expérimentés qui répond à vos besoins les plus pointus",
    to: "/zz-engineering/contact",
  },
  {
    buttonText: "Cliquez Maintenant",
    imgUrl: "./assets/home/header/gas-factory.png",
    text: "Nous proposons une large gamme d’étude et services pour les unités de chaînes pétrolières et gazières",
    to: "/zz-engineering/contact",
  },
];

const HeaderSwiper: React.FC = () => {
  return (
    <Box sx={{ height: { xs: 250, md: 550 }, zIndex: 0 }}>
      <Swiper
        navigation
        spaceBetween={0}
        slidesPerView={1}
        loop
        modules={[Navigation, Autoplay]}
        style={{ height: "100%" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map(({ text, buttonText, imgUrl, to }) => (
          <SwiperSlide
            key={text}
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="slide-content"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: 2,
                width: { xs: "100%", md: "50%" },
                color: "primary.contrastText",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
                color="inherit"
                gutterBottom
                // sx={{ textAlign: "justify" }}
              >
                {text}
              </Typography>
              <Button component={Link} to={to} variant="contained">
                {buttonText}
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeaderSwiper;
