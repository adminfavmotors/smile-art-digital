import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import Cennik from "./pages/Cennik";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PolitykaPriv from "./pages/PolitykaPriv";
import PolitykaCookies from "./pages/PolitykaCookies";
import Regulamin from "./pages/Regulamin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-gold focus:text-primary focus:p-3">
          Przejdź do treści
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPriv />} />
          <Route path="/polityka-cookies" element={<PolitykaCookies />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
