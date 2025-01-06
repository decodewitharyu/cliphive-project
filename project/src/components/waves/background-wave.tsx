import { motion } from 'framer-motion';

export function BackgroundWave() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 h-64 w-[200%] origin-bottom-left"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(var(--primary) / 0.1) 100%)',
        }}
        animate={{
          skewY: [0, 2, 0],
          x: [0, -100, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-48 w-[200%] origin-bottom-left"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(var(--primary) / 0.05) 100%)',
        }}
        animate={{
          skewY: [0, -3, 0],
          x: [0, 100, 0],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
    </div>
  );
}