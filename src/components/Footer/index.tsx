import { Container, Grid, Typography, Link, Box } from "@mui/material";
import { Link as LinkRouterDOM } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          marginTop: "30px",
          backgroundColor: "primary.light",
          color: "primary.contrastText",
          padding: "20px 0",
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="flex-start">
            {/* Logo Section */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <img
                  src="./assets/logo.svg"
                  alt="Logo"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </Typography>{" "}
              <Typography variant="body1">
                L'Engineering par Excellence.
              </Typography>
              <Typography variant="subtitle2">
                <Typography
                  component="span"
                  variant="subtitle2"
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Tel:
                </Typography>{" "}
                021 60 91 85
              </Typography>
              <Typography variant="subtitle2">
                <Typography
                  component="span"
                  variant="subtitle2"
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Phone:
                </Typography>{" "}
                06 76 86 77 68
              </Typography>
              <Typography variant="subtitle2">
                Sidi Yahia, Lot4, Hydra 16035 - Alger -
              </Typography>
            </Grid>

            {/* Link Sections */}
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Services</Typography>
              <nav>
                <Link
                  component={LinkRouterDOM}
                  to="/zz-engineering/etude-hse"
                  color="inherit"
                  variant="body2"
                >
                  Etude HSE
                </Link>
                <br />
                <Link
                  component={LinkRouterDOM}
                  to="/zz-engineering/engineering-design"
                  color="inherit"
                  variant="body2"
                >
                  Engineering & Design
                </Link>
                <br />
                <Link
                  component={LinkRouterDOM}
                  to="/zz-engineering/formation"
                  color="inherit"
                  variant="body2"
                >
                  Formation
                </Link>
              </nav>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Secteur d'activités</Typography>
              <nav>
                <Link
                  component={LinkRouterDOM}
                  to="/secteurs-activites"
                  color="inherit"
                  variant="body2"
                >
                  Oil & GAS
                </Link>
              </nav>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Typography variant="body1">Contact</Typography>
              <nav>
                <Link
                  component={LinkRouterDOM}
                  to="/zz-engineering/contact"
                  color="inherit"
                  variant="body2"
                >
                  Contactez-nous
                </Link>
              </nav>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
