import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const images = [
  {
    url: "./assets/articles/zz.jpg",
    title: "Etude HSE",
    to: "/zz-engineering/etude-hse",
  },
  {
    url: "./assets/articles/engineering.jpg",
    title: "Engineering & Design",
    to: "/zz-engineering/engineering-design",
  },
  {
    url: "./assets/articles/energetic-efficiency.jpg",
    title: "Éfficacité Énergetique",
    to: "/zz-engineering/energetic-efficiency",
  },
  {
    url: "./assets/articles/certification.jpg",
    title: "Certification",
    to: "/zz-engineering/certification",
  },
  {
    url: "./assets/articles/consulting.jpg",
    title: "Consulting",
    to: "/zz-engineering/consulting",
  },
  {
    url: "./assets/articles/formation.png",
    title: "Formation",
    to: "/zz-engineering/formation",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  width: "100%",
  border: "2px solid white",
  transition: "transform .2s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    transform: "scale(1.08)",
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 1,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  opacity: 0,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function BusinessAreas() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "relative",
          marginTop: { xs: "20px", md: "-100px" },
          zIndex: 1,
        }}
      >
        {images.map((image) => (
          <Grid key={image.title} xs={12} sm={4} md={2}>
            <Link to={image.to}>
              <ImageButton focusRipple key={image.title}>
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      textShadow: "1px 1px 2px black",
                      fontWeight: "bold",
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
