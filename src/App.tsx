/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

import { useLenis } from "@/src/hooks/useLenis";
import GlobalNav from "@/src/components/layout/GlobalNav";
import GlobalFooter from "@/src/components/layout/GlobalFooter";
import PageTransition from "@/src/components/layout/PageTransition";
import SEOMeta from "@/src/components/layout/SEOMeta";

const Home = lazy(() => import("@/src/pages/Home"));
const About = lazy(() => import("@/src/pages/About"));
const Services = lazy(() => import("@/src/pages/Services"));
const Films = lazy(() => import("@/src/pages/Films"));
const Gallery = lazy(() => import("@/src/pages/Gallery"));
const Book = lazy(() => import("@/src/pages/Book"));
const Contact = lazy(() => import("@/src/pages/Contact"));
const Privacy = lazy(() => import("@/src/pages/Privacy"));
const NotFound = lazy(() => import("@/src/pages/NotFound"));

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0A0707] flex items-center justify-center">
       <div className="w-12 h-12 border border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* @ts-ignore: key is required by AnimatePresence but not in RoutesProps */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Suspense fallback={<PageLoader />}><Home /></Suspense></PageTransition>} />
        <Route path="/about" element={<PageTransition><Suspense fallback={<PageLoader />}><About /></Suspense></PageTransition>} />
        <Route path="/services" element={<PageTransition><Suspense fallback={<PageLoader />}><Services /></Suspense></PageTransition>} />
        <Route path="/films" element={<PageTransition><Suspense fallback={<PageLoader />}><Films /></Suspense></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Suspense fallback={<PageLoader />}><Gallery /></Suspense></PageTransition>} />
        <Route path="/book" element={<PageTransition><Suspense fallback={<PageLoader />}><Book /></Suspense></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Suspense fallback={<PageLoader />}><Contact /></Suspense></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Suspense fallback={<PageLoader />}><Privacy /></Suspense></PageTransition>} />
        <Route path="*" element={<PageTransition><Suspense fallback={<PageLoader />}><NotFound /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageLayout() {
  useLenis();
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-base)] text-[var(--color-ivory)] selection:bg-[var(--color-brand-gold)] selection:text-[var(--color-brand-maroon)]">
      <SEOMeta />
      <GlobalNav />
      <div className="flex-grow">
        <AnimatedRoutes />
      </div>
      <GlobalFooter />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PageLayout />
      </Router>
    </HelmetProvider>
  );
}
