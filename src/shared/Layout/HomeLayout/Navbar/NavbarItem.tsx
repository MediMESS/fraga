import Menu from "@mui/material/Menu";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarItemProp } from "src/components/Layout/HomeLayout/Navbar/Navbar";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { theme } from "src/components/Layout/theme";

export const DesktopNavbarItem = ({ navItem }: NavbarItemProp) => {
  const { text, to, children } = navItem;
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  if (children)
    return (
      <Box>
        <ListItemButton {...bindTrigger(popupState)}>
          <ListItemText primary={text} />
          {popupState.isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItemButton>
        <Menu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <List
            sx={{
              backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.light})`,
              color: "primary.contrastText",
            }}
          >
            {children.map(({ text, to }) => (
              <ListItemButton
                key={text}
                component={Link}
                to={to}
                onClick={popupState.close}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Menu>
      </Box>
    );
  return (
    <ListItemButton component={Link} to={to}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

const MobileNavbarItem = ({ navItem }: NavbarItemProp) => {
  const { text, to, children } = navItem;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <Box>
        <ListItemButton onClick={handleToggle}>
          <ListItemText primary={text} />
          {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ marginLeft: "8px" }}>
            {children.map(({ text, to }) => (
              <ListItemButton
                key={text}
                component={Link}
                to={to}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </Box>
    );
  }

  return (
    <ListItemButton component={Link} to={to}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default MobileNavbarItem;
