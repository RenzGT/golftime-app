import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import EventDetail from "./pages/EventDetail";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/products/search/:search?" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
