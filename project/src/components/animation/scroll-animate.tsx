import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  direction?: 'up' | 'down';
  delay?: number;
}

export function ScrollAnimate({ 
  children, 
  direction = 'up', 
  delay = 0
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.02 1"]
  });

  const springConfig = {
    damping: 30,
    stiffness: 60,
    mass: 0.5
  };

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [direction === 'up' ? 30 : -30, 0]
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(8px)', 'blur(0px)']
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        filter,
      }}
      transition={{
        type: "spring",
        ...springConfig,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
