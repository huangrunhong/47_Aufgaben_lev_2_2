import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Blog from "./assets/pages/Blog";
import DetailsPage from "./assets/pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/detail/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
