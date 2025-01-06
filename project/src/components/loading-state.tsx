import { motion } from 'framer-motion';

export function LoadingState() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {/* Logo Animation */}
        <motion.div
          className="relative h-16 w-16"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-50" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-purple-600" />
        </motion.div>
        
        {/* Loading Text */}
        <motion.p
          className="text-lg font-medium"
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
