import Header from "src/components/Header";
import HomeLayout from "src/shared/Layout/HomeLayout";
import References from "src/components/References";
import IndustrySectors from "src/components/IndustrySectors";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";

export const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <IndustrySectors />
      <References />
      <Contact />
      <Footer />
    </HomeLayout>
  );
};
