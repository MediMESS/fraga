import { Box } from "@mui/material";
import React from "react";
import FAQs from "src/components/FAQs";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import BackgroundCTA from "src/components/Sections/BackgroundCTA";
import FragaStats from "src/components/Sections/FragaStats";
import OverallFragrances from "src/components/Sections/OverallFragrances";
import Shop from "src/components/Shop";
import Team from "src/components/Team";
import Testimonials from "src/components/Testimonials";
import HomeLayout from "src/shared/Layout/HomeLayout";

const Sections = [
  <Header />,
  <OverallFragrances />,
  <FragaStats />,
  <BackgroundCTA />,
  <Testimonials />,
  <Shop />,
  <FAQs />,
  <Team />,
];
export const Home = () => {
  return (
    <HomeLayout>
      {Sections.map((Section) => (
        <React.Fragment key={Section.key}>
          {Section}
          <Box sx={{ height: "80px" }}></Box>
        </React.Fragment>
      ))}
      <Footer />
    </HomeLayout>
  );
};
