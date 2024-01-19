import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certification from "src/components/Articles/Certification";
import Consulting from "src/components/Articles/Consulting";
import ContactArticle from "src/components/Articles/ContactArticle";
import EnergeticEfficiency from "src/components/Articles/EnergeticEfficiency";
import EngineeringArticle from "src/components/Articles/EngineeringArticle";
import FormationArticle from "src/components/Articles/Formation";
import HSEArticle from "src/components/Articles/HSE";
import IndustrySectorArticle from "src/components/Articles/IndustrySectorArticle";
import NotFound from "src/components/NotFound";
import { Home } from "src/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routes */}
        <Route path="/zz-enineering/" element={<Home />} />
        <Route path="/zz-engineering/home" element={<Home />} />
        <Route path="/zz-engineering/etude-hse" element={<HSEArticle />} />
        <Route
          path="/zz-engineering/engineering-design"
          element={<EngineeringArticle />}
        />
        <Route
          path="/zz-engineering/energetic-efficiency"
          element={<EnergeticEfficiency />}
        />
        <Route
          path="/zz-engineering/certification"
          element={<Certification />}
        />
        <Route path="/zz-engineering/consulting" element={<Consulting />} />
        <Route
          path="/zz-engineering/formation"
          element={<FormationArticle />}
        />
        <Route
          path="/zz-engineering/secteurs-activites"
          element={<IndustrySectorArticle />}
        />
        <Route path="/zz-engineering/contact" element={<ContactArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
