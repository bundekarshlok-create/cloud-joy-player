import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tumhara custom UrlInputSection component
import UrlInputSection from "./components/UrlInputSection";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast UI */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  {/* Original Index content */}
                  <Index />

                  {/* UrlInputSection with backend URL */}
                  <UrlInputSection backendUrl="https://cloud-joy-backend.bundekarshlok.workers.dev" />
                </>
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
