import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./Header.css";

const slides = {
  buttonText: "En Savoir Plus",
  imgUrl: "https://via.assets.so/movie.png?id=20&q=95&w=360&h=360&fit=fill",
  text: "Z & Z ENGINEERING vous accompagne dans toutes les étapes de votre projet",
  to: "/zz-engineering/contact",
};

const HeaderSwiper: React.FC = () => {
  const { text, buttonText, imgUrl, to } = slides;
  return (
    <Box
      key={text}
      sx={{
        backgroundImage: `url(${imgUrl})`,
        backgroundColor: "deepskyblue",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "500px", md: "800px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography variant="h3" color="inherit">
        Big Title
      </Typography>
      <Typography variant="body1" color="inherit">
        {text}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Button component={Link} to={to} variant="contained">
          {buttonText}
        </Button>
        <Button component={Link} to={to} variant="outlined">
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderSwiper;
