import { Box } from "@mui/material";
import HeaderSwiper from "src/shared/Utilities/Header/HeaderSwiper";
import BusinessAreas from "src/shared/Utilities/Header/BusinessAreas";

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
