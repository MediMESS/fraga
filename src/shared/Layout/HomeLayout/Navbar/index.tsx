import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MobileNavbarItem, {
  DesktopNavbarItem,
} from "src/components/Layout/HomeLayout/Navbar/NavbarItem";
import { Link } from "react-router-dom";
import { theme } from "src/components/Layout/theme";

interface Props {
  window?: () => Window;
}

/**
 * NavItems.
 */
export const navItems = [
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
  { text: "Secteurs d'activités", to: "/zz-engineering/secteurs-activites" },
  { text: "Contact", to: "/zz-engineering/contact" },
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
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={Link}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            to="/zz-engineering/"
          >
            <img
              src="./assets/logo.svg"
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <DesktopNavbarItem key={item.text} navItem={item} />
            ))}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
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
            {navItems.map((item) => (
              <MobileNavbarItem key={item.text} navItem={item} />
            ))}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
