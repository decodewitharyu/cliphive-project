import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CursorState {
  hover: boolean;
  click: boolean;
  text: string;
}

export function GlowingCursor() {
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    hover: false,
    click: false,
    text: '',
  });

  // Use RAF for smoother performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Ultra-smooth spring config
  const springConfig = { 
    damping: 15,
    stiffness: 900,
    mass: 0.2,
    restSpeed: 0.001,
    restDelta: 0.001
  };
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Memoized handlers for better performance
  const moveCursor = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      cursorXSpring.set(e.clientX - 12);
      cursorYSpring.set(e.clientY - 12);
    });
  }, [cursorXSpring, cursorYSpring]);

  const handleMouseDown = useCallback(() => {
    setCursorState(prev => ({ ...prev, click: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursorState(prev => ({ ...prev, click: false }));
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, input, [data-cursor]')) {
      setCursorState(prev => ({
        ...prev,
        hover: true,
        text: target.getAttribute('data-cursor') || '',
      }));
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorState(prev => ({ ...prev, hover: false, text: '' }));
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [moveCursor, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 select-none will-change-transform"
      style={{
        mixBlendMode: 'difference',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'subpixel-antialiased',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className={`absolute rounded-full transition-[width,height,transform] duration-150 ease-out
            ${cursorState.hover ? 'h-12 w-12' : 'h-6 w-6'}
            ${cursorState.click ? 'scale-75' : 'scale-100'}
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
            before:from-primary/90 before:via-primary-foreground/90 before:to-primary/90 
            before:opacity-90 before:blur-[0.5px] before:transition-opacity before:duration-300
            after:absolute after:inset-[-3px] after:rounded-full after:bg-gradient-to-r 
            after:from-primary/30 after:via-primary-foreground/30 after:to-primary/30 
            after:blur-[2px] after:transition-all after:duration-300
            overflow-hidden backdrop-blur-[0.5px]
          `}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            boxShadow: cursorState.hover 
              ? `
                0 0 30px 8px rgba(var(--primary), 0.4),
                inset 0 0 15px rgba(var(--primary), 0.5),
                0 0 0 1px rgba(var(--primary), 0.3)
              `
              : `
                0 0 20px 4px rgba(var(--primary), 0.3),
                inset 0 0 8px rgba(var(--primary), 0.4),
                0 0 0 1px rgba(var(--primary), 0.2)
              `,
            transform: `translate3d(0,0,0)`,
          }}
          initial={false}
          animate={{
            scale: cursorState.click ? 0.75 : 1,
            transition: {
              type: 'spring',
              damping: 20,
              stiffness: 300,
              mass: 0.2,
              velocity: 2,
            }
          }}
        >
          {/* Inner gradient ring with animation */}
          <motion.div 
            className="absolute inset-[1px] rounded-full bg-gradient-to-r from-primary/50 via-primary-foreground/50 to-primary/50 opacity-90"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Text content with enhanced animation */}
          {cursorState.text && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1], // Custom ease curve
                }
              }}
              exit={{ 
                opacity: 0,
                y: -8,
                transition: { 
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-bold"
              style={{
                color: 'rgb(var(--primary-foreground))',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.03em',
              }}
            >
              {cursorState.text}
            </motion.span>
          )}

          {/* Enhanced glow effect with multiple layers */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.6, 0.3, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary-foreground/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-primary-foreground/30" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}