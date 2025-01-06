import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, FolderIcon, UsersIcon, GlobeIcon, ChevronLeftIcon, MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: HomeIcon, label: 'Home', href: '#home', color: '#3b82f6' },
  { icon: FolderIcon, label: 'Resources', href: '#resources', color: '#8b5cf6' },
  { icon: UsersIcon, label: 'Community', href: '#community', color: '#ec4899' },
  { icon: GlobeIcon, label: 'My Website', href: '#my-website', color: '#10b981' },
];

interface VerticalNavProps {
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export function VerticalNav({ isCollapsed, onCollapsedChange }: VerticalNavProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          width: isCollapsed ? 0 : isHovered ? '240px' : '80px',
          x: isCollapsed ? '-100%' : 0,
          opacity: isCollapsed ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => {
          setIsHovered(false);
          setActiveItem(null);
        }}
        className={cn(
          'fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          isCollapsed ? 'pointer-events-none' : 'pointer-events-auto'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <AnimatePresence initial={false}>
            {(!isCollapsed && isHovered) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Logo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              className="relative"
              onHoverStart={() => setActiveItem(item.label)}
              onHoverEnd={() => setActiveItem(null)}
            >
              <motion.div
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-gradient-to-r from-transparent to-transparent'
                )}
                animate={{
                  background: activeItem === item.label
                    ? `linear-gradient(to right, ${item.color}10, ${item.color}30)`
                    : 'linear-gradient(to right, transparent, transparent)',
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r"
                style={{
                  background: `linear-gradient(to right, ${item.color}, ${item.color}00)`,
                }}
                initial={{ width: '0%' }}
                animate={{
                  width: activeItem === item.label ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
              <Button
                variant="ghost"
                className={cn(
                  'relative w-full justify-start gap-4 overflow-hidden rounded-xl border border-transparent px-4',
                  'hover:border-border/50 hover:bg-transparent',
                  !isHovered && 'justify-center'
                )}
                onClick={() => handleNavClick(item.href)}
              >
                <motion.div
                  animate={{
                    scale: activeItem === item.label ? 1.1 : 1,
                    color: activeItem === item.label ? item.color : 'currentColor',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        color: activeItem === item.label ? item.color : 'currentColor',
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="p-4">
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-center rounded-xl border border-transparent',
              'hover:border-border/50 hover:bg-transparent'
            )}
            onClick={() => onCollapsedChange(!isCollapsed)}
          >
            <motion.div
              animate={{
                rotate: isCollapsed ? 180 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </motion.div>
          </Button>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isCollapsed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => onCollapsedChange(false)}
            className="fixed left-4 top-4 z-50 rounded-xl border border-border/50 bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <MenuIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}