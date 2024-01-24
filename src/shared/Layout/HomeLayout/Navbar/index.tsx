import MenuIcon from "@mui/icons-material/Menu";
import { Button, ButtonProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import MobileNavbarItem, {
  DesktopNavbarItem,
} from "src/shared/Layout/HomeLayout/Navbar/NavbarItem";
import { theme } from "src/shared/Layout/theme";

interface Props {
  window?: () => Window;
}

/**
 * NavItems.
 */
export const navLinks = [
  { text: "Secteurs d'activités", to: "/zz-engineering/secteurs-activites" },
  { text: "Contact", to: "/zz-engineering/contact" },
  {
    text: "Nos Services",
    to: "",
    children: [
      { text: "Etude HSE", to: "/zz-engineering/etude-hse" },
      {
        text: "Engineering & Design",
        to: "/zz-engineering/engineering-design",
      },
      {
        text: "Éfficacité Énergétique",
        to: "/zz-engineering/energetic-efficiency",
      },
      {
        text: "Certification",
        to: "/zz-engineering/certification",
      },
      {
        text: "Consulting",
        to: "/zz-engineering/consulting",
      },
      { text: "Formation", to: "/zz-engineering/formation" },
    ],
  },
];

/**
 * Navbar Buttons.
 */
const navButtons = [
  {
    text: "FAQs",
    to: "#FAQs",
    variant: "text" as ButtonProps["variant"],
    color: "primary" as ButtonProps["color"],
  },
  {
    text: "Shop now",
    to: "#FAQs",
    variant: "contained" as ButtonProps["variant"],
    color: "secondary" as ButtonProps["color"],
  },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "background.default",
          color: "primary.main",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
                gap: "24px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="h6"
                component={Link}
                sx={{ flexGrow: 1, display: "flex" }}
                to="/zz-engineering/"
              >
                <img
                  src="./assets/logo.svg"
                  alt="Logo"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </Typography>
              <Box sx={{ display: "flex" }}>
                {navLinks.map((link) => (
                  <DesktopNavbarItem key={link.text} navItem={link} />
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
              }}
            >
              {navButtons.map((button) => (
                <Button
                  variant={button.variant}
                  component={Link}
                  to={button.to}
                  color={button.color}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            color: "primary.main",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: 240, md: 450 },
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Link to="/zz-engineering/">
              <Typography
                variant="h6"
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./assets/logo-on-primary.svg"
                  alt="Logo"
                  style={{
                    height: "40px",
                    color: theme.palette.primary.main,
                  }}
                />
              </Typography>
            </Link>
            <Divider />
            {navLinks.map((link) => (
              <MobileNavbarItem key={link.text} navItem={link} />
            ))}
            {navButtons.map((button) => (
              <Button variant={button.variant} component={Link} to={button.to}>
                {button.text}
              </Button>
            ))}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
