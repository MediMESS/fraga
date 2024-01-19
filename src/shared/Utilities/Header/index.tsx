import { Box } from "@mui/material";
import HeaderSwiper from "src/components/HeaderSwiper";
import BusinessAreas from "src/components/BusinessAreas";

const Header = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* HeaderSwiper component */}
      <HeaderSwiper />

      {/* Business areas overlay */}
      <BusinessAreas />
    </Box>
  );
};

export default Header;
