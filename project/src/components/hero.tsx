import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NoiseTexture } from './ui/noise-texture';

export function Hero() {
  const scrollToCategories = () => {
    const section = document.getElementById('premium-resources');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hero" className="relative min-h-[60vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <NoiseTexture />
      </div>

      {/* Grain Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
            initial={{ x: -100, y: -100 }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }} 
        />

        {/* Animated Grain */}
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundSize: '250px 250px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Discover & Download
            </motion.span>
            <br />
            Premium Resources
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access a curated collection of high-quality resources for video editing,
            photo editing, sound effects, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={scrollToCategories}
              data-cursor="Explore"
            >
              Explore Resources
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}