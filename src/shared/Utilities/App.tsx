import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "src/shared/NotFound";
import { Home } from "src/shared/Utilities/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routes */}
        <Route path="/zz-enineering/" element={<Home />} />
        <Route path="/zz-engineering/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
