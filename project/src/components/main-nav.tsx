import { ScissorsIcon, SearchIcon, BellIcon, UserCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MobileNav } from './mobile-nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const categories = [
  { href: '/categories/video-editing', label: 'Video Editing', count: 128 },
  { href: '/categories/photo-editing', label: 'Photo Editing', count: 95 },
  { href: '/categories/sound-effects', label: 'Sound Effects', count: 234 },
  { href: '/categories/color-grading', label: 'Color Grading', count: 67 },
  { href: '/categories/typography', label: 'Typography', count: 89 },
  { href: '/categories/motion-graphics', label: 'Motion Graphics', count: 156 },
  { href: '/categories/overlays', label: 'Overlays', count: 112 },
];

export function MainNav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const handleNotificationClick = () => {
    // Clear notifications when clicked
    setNotifications(0);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        height: isScrolled ? '3.5rem' : '4rem',
        backgroundColor: isScrolled ? 'hsl(var(--background))' : 'transparent',
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container flex h-full items-center">
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Logo */}
          <Button variant="ghost" className="flex items-center space-x-2 px-2 relative group" asChild>
            <a href="/">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <ScissorsIcon className="h-6 w-6" />
              </motion.div>
              <span className="hidden font-bold sm:inline-block ml-2 relative">
                ClipHive
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </a>
          </Button>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Categories Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2">
                    {categories.map((category) => (
                      <motion.li
                        key={category.href}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <NavigationMenuLink asChild>
                          <a
                            href={category.href}
                            className={cn(
                              "flex items-center justify-between rounded-md p-3 text-sm hover:bg-accent",
                              location.pathname === category.href && "bg-accent"
                            )}
                          >
                            <span className="font-medium">{category.label}</span>
                            <span className="text-xs text-muted-foreground">{category.count}</span>
                          </a>
                        </NavigationMenuLink>
                      </motion.li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular Menu Items */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-accent text-accent-foreground': location.pathname === '/'
                  })}
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  data-cursor="Home"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    'bg-accent text-accent-foreground': location.pathname === '/about'
                  })}
                  href="/about"
                  onClick={(e) => handleNavClick(e, '/about')}
                  data-cursor="About"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="ml-2"
              data-cursor="Search"
            >
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:inline-flex relative"
            onClick={handleNotificationClick}
            data-cursor="Notifications"
          >
            <BellIcon className="h-5 w-5" />
            {notifications > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center"
              >
                {notifications}
              </motion.span>
            )}
          </Button>

          {/* Admin Panel */}
          <Button variant="ghost" size="icon" asChild data-cursor="Admin">
            <a href="/admin/login">
              <UserCircle className="h-5 w-5" />
            </a>
          </Button>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}