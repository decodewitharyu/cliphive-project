import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  gradient?: string;
  className?: string;
}

export function DownloadButton({
  href,
  gradient = 'from-blue-500 to-purple-500',
  className = '',
}: DownloadButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r p-[1px] ${gradient} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative inline-flex h-10 items-center gap-2 rounded-lg bg-background px-4 py-2 text-sm font-medium transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
        <span>Download Now</span>
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <DownloadIcon className="h-4 w-4" />
        </motion.span>
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transform: 'translateX(-100%)',
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)'],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Sparkle particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            top: '50%',
            left: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0 }}
          whileHover={{
            scale: [0, 1, 0],
            x: [0, (i - 2) * 20],
            y: [0, (i % 2 === 0 ? -1 : 1) * 10],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </motion.a>
  );
}
