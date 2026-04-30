import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import TenderPortal from "@/pages/TenderPortal";
import QuoteRequest from "@/pages/QuoteRequest";
import ClientPortal from "@/pages/ClientPortal";
import Contact from "@/pages/Contact";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      <Button
        size="icon-lg"
        className="rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-none"
        onClick={() => window.open("https://wa.me/27123456789", "_blank")}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
      <Button
        size="icon-lg"
        className="rounded-full bg-gold hover:bg-charcoal text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-none md:hidden"
        onClick={() => window.location.href = "tel:+27123456789"}
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
      </Button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col font-sans selection:bg-gold selection:text-white">
        <Navbar />
        <main className="flex-1 pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tenders" element={<TenderPortal />} />
            <Route path="/request-quote" element={<QuoteRequest />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTAs />
        <Toaster position="top-right" richColors closeButton />
      </div>
    </Router>
  );
}

export default App;