import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ServicePages from "./pages/ServicesPages";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
// import PricingPage from "./pages/PricingPage";
import Career from "./pages/Career";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Preloader from "./components/Preloader";
import WhebotPage from "./pages/WhebotPage";
import AnimatedCursor from "react-animated-cursor";

// Subtle fade-only transition — no sliding, no layout shift
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

// Wrap each page so only the content fades, not the shell
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [botMinimized, setBotMinimized] = useState(true);
  const isMobile = useRef(window.innerWidth <= 768).current;

  const openBot = () => setBotMinimized(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{ backgroundColor: "#FFFFFF" }}
          outerStyle={{ backgroundColor: "#ffffff3b" }}
        />
      )}

      {/* Preloader fades out once, then never remounts */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app shell — always mounted, never re-animates as a whole */}
      <div className="min-h-screen w-full" style={{ visibility: loading ? "hidden" : "visible" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <LandingPage openBot={openBot} />
                </AnimatedPage>
              }
            />
            <Route
              path="/services"
              element={
                <AnimatedPage>
                  <ServicesPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/blog"
              element={
                <AnimatedPage>
                  <BlogPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <AboutPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/career"
              element={
                <AnimatedPage>
                  <Career />
                </AnimatedPage>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <ContactPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/service/:serviceKey"
              element={
                <AnimatedPage>
                  <ServicePages />
                </AnimatedPage>
              }
            />
            <Route
              path="/privacypolicy"
              element={
                <AnimatedPage>
                  <PrivacyPolicy />
                </AnimatedPage>
              }
            />
            <Route
              path="*"
              element={
                <AnimatedPage>
                  <div className="flex items-center justify-center h-screen text-2xl">
                    404 - Page Not Found
                  </div>
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Bot stays persistent — outside AnimatePresence, never re-renders */}
      {!loading && (
        <WhebotPage
          isMinimized={botMinimized}
          setIsMinimized={setBotMinimized}
        />
      )}
    </>
  );
}

export default App;