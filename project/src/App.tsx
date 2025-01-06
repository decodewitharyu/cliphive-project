import { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from '@/components/error-boundary';
import { LoadingState } from '@/components/loading-state';
import { PageTransition } from '@/components/page-transition';
import { ScrollToTop } from '@/components/scroll-to-top';
import { SEO } from '@/components/seo';
import { VerticalNav } from '@/components/layout/vertical-nav';
import { Hero } from '@/components/hero';
import { Categories } from '@/components/categories';
import { MyWebsite } from '@/components/my-website';
import { PremiumResources } from '@/components/premium-resources';
import { Footer } from '@/components/layout/footer';
import { VideoEditingPage } from '@/components/category-pages/video-editing';
import { PhotoEditingPage } from '@/components/category-pages/photo-editing';
import { SoundEffectsPage } from '@/components/category-pages/sound-effects';
import { ColorGradingPage } from '@/components/category-pages/color-grading';
import { TypographyPage } from '@/components/category-pages/typography';
import { MotionGraphicsPage } from '@/components/category-pages/motion-graphics';
import { AdminPanel } from '@/components/admin/admin-panel';
import { AdminLogin } from '@/components/admin/login';
import { AdminDashboard } from '@/components/admin/dashboard';
import { AuthGuard } from '@/components/admin/auth-guard';
import { ThemeProvider } from '@/components/theme-provider';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const path = window.location.pathname;
    setShowNavbar(!path.includes('/categories/'));

    // Handle hash navigation when returning to home page
    if (path === '/' && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <ErrorBoundary>
          <div className="relative min-h-screen bg-background">
            <SEO />
            <ScrollToTop />
            
            {showNavbar && (
              <VerticalNav
                isCollapsed={isNavCollapsed}
                onCollapsedChange={setIsNavCollapsed}
              />
            )}
            
            <main className={`min-h-screen transition-all duration-300 ${showNavbar ? 'pl-[80px]' : ''}`}>
              <Suspense fallback={<LoadingState />}>
                <AnimatePresence mode="wait">
                  <PageTransition>
                    <Routes location={location} key={location.pathname}>
                      <Route
                        path="/"
                        element={
                          <>
                            <Hero />
                            <Categories />
                            <PremiumResources />
                            <MyWebsite />
                            <Footer />
                          </>
                        }
                      />
                      <Route path="/categories/video-editing" element={<VideoEditingPage />} />
                      <Route path="/categories/photo-editing" element={<PhotoEditingPage />} />
                      <Route path="/categories/sound-effects" element={<SoundEffectsPage />} />
                      <Route path="/categories/color-grading" element={<ColorGradingPage />} />
                      <Route path="/categories/typography" element={<TypographyPage />} />
                      <Route path="/categories/motion-graphics" element={<MotionGraphicsPage />} />
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route path="/admin/dashboard" element={
                        <AuthGuard>
                          <AdminDashboard />
                        </AuthGuard>
                      } />
                      <Route path="/admin" element={<AdminPanel />} />
                    </Routes>
                  </PageTransition>
                </AnimatePresence>
              </Suspense>
            </main>
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}