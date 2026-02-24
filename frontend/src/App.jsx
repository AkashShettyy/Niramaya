import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
