import { PropsWithChildren } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "src/components/Layout/theme";
import Navbar from "src/components/Layout/HomeLayout/Navbar";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          top: { xs: "56px", sm: "64px" },
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default HomeLayout;
