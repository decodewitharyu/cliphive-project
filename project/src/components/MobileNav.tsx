import { HomeIcon, FolderOpen, Users2, Upload, Settings2, Moon, Sun } from 'lucide-react';
import { Tooltip, TooltipProvider } from './ui/tooltip';
import { useTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';

export function MobileNav() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { icon: <HomeIcon size={20} />, label: "Home", href: "#home" },
    { icon: <FolderOpen size={20} />, label: "Resources", href: "#resources" },
    { icon: <Users2 size={20} />, label: "Community", href: "#community" },
    { icon: <Upload size={20} />, label: "Upload", href: "#upload" },
    { icon: <Settings2 size={20} />, label: "Settings", href: "#settings" },
  ];

  return (
    <TooltipProvider>
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mobile-nav"
      >
        {navItems.map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
        <NavItem 
          icon={theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          label="Theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </motion.nav>
    </TooltipProvider>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function NavItem({ icon, label, onClick }: NavItemProps) {
  return (
    <Tooltip content={label}>
      <motion.button
        className="nav-button high-performance p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        {icon}
      </motion.button>
    </Tooltip>
  );
}
