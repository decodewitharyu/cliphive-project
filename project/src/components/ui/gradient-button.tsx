import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

interface GradientButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function GradientButton({
  href,
  className = '',
  children,
}: GradientButtonProps) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary p-[2px] ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative inline-flex h-12 items-center gap-2 rounded-full bg-background px-6 py-2 text-sm font-medium transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
        {children}
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRightIcon className="h-4 w-4" />
        </motion.span>
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transform: 'translateX(-100%)',
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.a>
  );
}
