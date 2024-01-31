import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Menu from "@mui/material/Menu";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useState } from "react";
import { NavbarItemProp } from "src/shared/Layout/HomeLayout/Navbar/Navbar";

export const DesktopNavbarItem = ({ navButton }: NavbarItemProp) => {
  const { text, onClick, children } = navButton;
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  if (children)
    return (
      <Box
        sx={{
          backgroundColor: "background.default",
          color: "primary.main",
        }}
      >
        <ListItemButton {...bindTrigger(popupState)}>
          <ListItemText primary={text} />
          {popupState.isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItemButton>
        <Menu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <List>
            {children.map(({ text, onClick }) => (
              <ListItemButton
                key={text}
                onClick={() => {
                  popupState.close();
                  onClick();
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Menu>
      </Box>
    );
  return (
    <ListItemButton onClick={onClick}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

const MobileNavbarItem = ({ navButton }: NavbarItemProp) => {
  const { text, onClick, children } = navButton;
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
            {children.map(({ text, onClick }) => (
              <ListItemButton
                key={text}
                sx={{ paddingLeft: 0 }}
                onClick={() => {
                  setOpen(false);
                  if (onClick) onClick();
                }}
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
    <ListItemButton onClick={onClick} sx={{ paddingLeft: 0 }}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default MobileNavbarItem;
