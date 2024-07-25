import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Book from "./components/Book";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="outer">
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="book" element={<Book />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}
