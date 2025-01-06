import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SearchIcon, BellIcon, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/categories/video-editing', label: 'Video Editing', count: 128 },
  { href: '/categories/photo-editing', label: 'Photo Editing', count: 95 },
  { href: '/categories/sound-effects', label: 'Sound Effects', count: 234 },
  { href: '/categories/color-grading', label: 'Color Grading', count: 67 },
  { href: '/categories/typography', label: 'Typography', count: 89 },
  { href: '/categories/motion-graphics', label: 'Motion Graphics', count: 156 },
  { href: '/categories/overlays', label: 'Overlays', count: 112 },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const notifications = 3;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      window.location.href = href;
      return;
    }
    
    // Extract section ID from href
    const sectionId = href.split('#')[1];
    if (sectionId) {
      scrollToSection(sectionId);
    } else if (href === '/') {
      scrollToSection('hero');
    }
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-2">
        {/* Search Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowSearch(!showSearch)}
        >
          <SearchIcon className="h-5 w-5" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="h-5 w-5" />
          {notifications > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center"
            >
              {notifications}
            </motion.span>
          )}
        </Button>

        {/* Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className={`h-6 w-6 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <XIcon className={`absolute h-6 w-6 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      <AnimatePresence>
        {/* Search Bar */}
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute left-0 right-0 top-[4rem] border-b bg-background px-4 py-3 shadow-lg"
          >
            <Input
              type="search"
              placeholder="Search..."
              className="w-full"
            />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="fixed top-0 right-0 z-40 h-full w-[280px] bg-background border-l"
            >
              <nav className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto py-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-6 py-3 text-sm transition-colors hover:bg-muted",
                        location.pathname === item.href
                          ? 'bg-muted font-medium text-foreground'
                          : 'text-muted-foreground'
                      )}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span>{item.label}</span>
                      {'count' in item && (
                        <span className="text-xs text-muted-foreground">{item.count}</span>
                      )}
                    </a>
                  ))}
                </div>

                {/* Bottom section */}
                <div className="border-t p-4">
                  <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                    <a href="/admin/login" onClick={() => setIsOpen(false)}>
                      <UserCircle className="h-5 w-5 mr-2" />
                      Admin Panel
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
