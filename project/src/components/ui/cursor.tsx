import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function GlowingCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    setVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        mixBlendMode: 'difference',
      }}
    >
      <motion.div
        className="absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          boxShadow: '0 0 20px 3px rgba(223, 182, 255, 0.31)',
        }}
      />
    </motion.div>
  );
}