import { Box, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import Navbar from "src/shared/Layout/HomeLayout/Navbar";
import { theme } from "src/shared/Layout/theme";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Navbar />
        <Box
          sx={{
            position: "relative",
            top: { xs: "56px", sm: "64px" },
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomeLayout;
