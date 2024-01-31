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
import { DesktopNavbarItem } from "src/shared/Layout/HomeLayout/Navbar/NavbarItem";
import { theme } from "src/shared/Layout/theme";
import {
  scrollToFAQs,
  scrollToFragaCharm,
  scrollToTheFragaristas,
  scrollToWonderland,
} from "src/shared/Utils";

interface Props {
  window?: () => Window;
}

/**
 * NavItems.
 */
export const navButtons = [
  { text: "FragaCharm", onClick: scrollToFragaCharm },
  {
    text: "Wonderland",
    onClick: scrollToWonderland,
  },
  {
    text: "The Fragaristas",
    onClick: scrollToTheFragaristas,
  },
];

/**
 * Navbar Buttons.
 */
const ctaButtons = [
  {
    text: "FAQs",
    onClick: scrollToFAQs,
    variant: "text" as ButtonProps["variant"],
    color: "primary" as ButtonProps["color"],
  },
  {
    text: "Shop Now",
    onClick: () => {},
    variant: "contained" as ButtonProps["variant"],
    color: "secondary" as ButtonProps["color"],
    style: {
      width: "fit-content",
    },
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
            sx={{ display: { md: "none" } }}
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
                gap: "24px",
              }}
            >
              <Typography
                variant="h6"
                component={Link}
                sx={{ flexGrow: 1, display: "flex" }}
                to="/"
              >
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  style={{ height: "50px" }}
                />
              </Typography>
              {navButtons.map((navButton) => (
                <DesktopNavbarItem key={navButton.text} navButton={navButton} />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
              }}
            >
              {ctaButtons.map((button) => (
                <Button
                  variant={button.variant}
                  onClick={button.onClick}
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
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Link to="/">
              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  style={{
                    height: "50px",
                    color: theme.palette.primary.main,
                  }}
                />
              </Typography>
            </Link>
            <Divider />
            {navButtons.map((button) => (
              <Button
                variant="text"
                onClick={button.onClick}
                sx={{
                  margin: 0,
                  paddingLeft: 0,
                  justifyContent: "flex-start",
                }}
              >
                {button.text}
              </Button>
            ))}
            <Divider />

            {ctaButtons.map((button) => (
              <Button
                variant={button.variant}
                onClick={button.onClick}
                sx={{
                  margin: 0,
                  paddingLeft: button.variant === "text" ? 0 : "auto",
                  width:
                    button.variant === "contained" ? "fit-content" : "auto",
                  justifyContent:
                    button.variant === "text" ? "flex-start" : "center",
                }}
              >
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
