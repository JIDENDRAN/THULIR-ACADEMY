import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';

// Code-split other pages for optimized loading
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage').then((m) => ({ default: m.WhyUsPage })));
const Courses = lazy(() => import('./pages/Courses').then((m) => ({ default: m.Courses })));
const CourseDetails = lazy(() => import('./pages/CourseDetails').then((m) => ({ default: m.CourseDetails })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

const PageLoader = () => (
  <div className="d-flex align-items-center justify-content-center py-5 min-vh-50">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading page...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <ScrollToTop />
        <TopBar />
        <Header />
        
        <main className="flex-grow-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetails />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
