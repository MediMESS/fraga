import Header from "src/components/Header";
import HomeLayout from "src/shared/Layout/HomeLayout";
import Footer from "src/components/Footer";
import { Box } from "@mui/material";
import OverallFragrances from "src/components/Sections/OverallFragrances";
import FragaStats from "src/components/Sections/FragaStats";
import BackgroundCTA from "src/components/Sections/BackgroundCTA";
import FAQs from "src/components/FAQs";
import Testimonials from "src/components/Testimonials";

export const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <Box sx={{ height: "80px" }}></Box>
      <OverallFragrances />
      <Box sx={{ height: "80px" }}></Box>
      <FragaStats />
      <Box sx={{ height: "80px" }}></Box>
      <BackgroundCTA />
      <Box sx={{ height: "80px" }}></Box>
      <Testimonials />
      <Box sx={{ height: "80px" }}></Box>
      <FAQs />
      <Footer />
    </HomeLayout>
  );
};
