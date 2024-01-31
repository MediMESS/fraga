import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Link as LinkRouterDOM } from "react-router-dom";
import {
  scrollToFAQs,
  scrollToFragaCharm,
  scrollToTheFragaristas,
  scrollToWonderland,
} from "src/shared/Utils";

const fragaFooterLinks = [
  {
    text: "FragaCharm",
    onClick: scrollToFragaCharm,
  },
  {
    text: "Wonderland",
    onClick: scrollToWonderland,
  },
  {
    text: "The Fragaristas",
    onClick: scrollToTheFragaristas,
  },
  {
    text: "FAQs",
    onClick: scrollToFAQs,
  },
];

const socialIcons = [
  {
    id: "FacebookIcon",
    icon: FacebookIcon,
  },
  {
    id: "InstagramIcon",
    icon: InstagramIcon,
  },
  {
    id: "XIcon",
    icon: XIcon,
  },
  {
    id: "YouTubeIcon",
    icon: YouTubeIcon,
  },
  {
    id: "LinkedInIcon",
    icon: LinkedInIcon,
  },
];

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", lg: "32px" },
            padding: { xs: "20px 24px", lg: "40px 64px" },
            maxWidth: "1440px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "20px", lg: "32px" },
              justifyContent: { xs: "flex-start", lg: "space-between" },
              alignItems: { xs: "flex-start", lg: "center" },
            }}
          >
            {/* Logo Section */}
            <LinkRouterDOM to="/">
              <img
                src="./assets/logo-primary.png"
                alt="Logo"
                style={{
                  height: "60px",
                }}
              />
            </LinkRouterDOM>

            {/* Link Sections */}

            <Box
              sx={{
                display: "flex",
                gap: { xs: "12px", lg: "20px" },
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "flex-start", lg: "space-between" },
              }}
            >
              {fragaFooterLinks.map(({ text, onClick }) => (
                <Button
                  variant="text"
                  key={text}
                  onClick={onClick}
                  sx={{
                    textDecoration: "underline",
                    minWidth: 0,
                    padding: 0,
                  }}
                >
                  {text}
                </Button>
              ))}
            </Box>
            {/* Social */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: "12px", lg: "20px" },
              }}
            >
              {socialIcons.map((SocialIcon) => (
                <a key={SocialIcon.id} href="#">
                  <Button
                    sx={{
                      padding: 0,
                      minWidth: 0,
                    }}
                    variant="text"
                  >
                    <SocialIcon.icon
                      sx={{
                        fontSize: "24px",
                      }}
                    />
                  </Button>
                </a>
              ))}
            </Box>
          </Box>
          <Divider />
          {/* Logo Section */}
          <Typography variant="body1">
            2023 Fraga. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
