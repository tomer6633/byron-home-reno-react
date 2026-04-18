import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import "./index.css";

function Footer() {
  return (
    <footer className="bg-[#0a150d] text-slate-500 text-center py-5 text-sm px-4">
      © 2025{" "}
      <span className="text-green-400 font-semibold">Pioneer Handyman & Reno</span>{" "}
      — Serving London & Surrounding Areas ·{" "}
      <a href="tel:5196177146" className="text-green-400 hover:text-green-300">
        (519) 617-7146
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </div>
        <Footer />
        <ContactBar />
      </div>
    </HashRouter>
  );
}
