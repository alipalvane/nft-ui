import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Gallery from "./pages/Gallery";
import Header from "./components/shared/Header";
import NewsLetters from "./components/shared/NewsLetters";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <NewsLetters />
      </main>
      <Footer />
    </>
  );
};

export default App;
