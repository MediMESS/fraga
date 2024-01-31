import { Box } from "@mui/material";
import React from "react";
import FAQs from "src/components/FAQs";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import BackgroundCTA from "src/components/Sections/BackgroundCTA";
import FragaCharm from "src/components/Sections/FragaCharm";
import FragaStats from "src/components/Sections/FragaStats";
import Testimonials from "src/components/Testimonials";
import TheFragaristas from "src/components/TheFragaristas";
import Wonderland from "src/components/Wonderland";
import HomeLayout from "src/shared/Layout/HomeLayout";

const Sections = [
  <Header />,
  <FragaCharm />,
  <FragaStats />,
  <BackgroundCTA />,
  <Testimonials />,
  <Wonderland />,
  <FAQs />,
  <TheFragaristas />,
];

export const Home = () => {
  return (
    <HomeLayout>
      {Sections.map((Section) => (
        <React.Fragment key={Section.key}>
          {/* {console.log(`Section ${Section}: ${Section.key}`)} */}
          {Section}
          <Box sx={{ height: { xs: "40px", lg: "80px" } }}></Box>
        </React.Fragment>
      ))}
      <Footer />
    </HomeLayout>
  );
};
