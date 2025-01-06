import {
  VideoIcon,
  ImageIcon,
  Music2Icon,
  PaletteIcon,
  TypeIcon,
  LayersIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const categories = [
  {
    title: 'Video Editing',
    icon: VideoIcon,
    description: 'Professional video editing tools and resources',
    color: '#3b82f6',
    path: '/categories/video-editing'
  },
  {
    title: 'Photo Editing',
    icon: ImageIcon,
    description: 'Photo manipulation and enhancement resources',
    color: '#8b5cf6',
    path: '/categories/photo-editing'
  },
  {
    title: 'Sound Effects',
    icon: Music2Icon,
    description: 'High-quality audio and sound effect libraries',
    color: '#ec4899',
    path: '/categories/sound-effects'
  },
  {
    title: 'Color Grading',
    icon: PaletteIcon,
    description: 'LUTs and color grading presets',
    color: '#f59e0b',
    path: '/categories/color-grading'
  },
  {
    title: 'Typography',
    icon: TypeIcon,
    description: 'Fonts and text animation resources',
    color: '#10b981',
    path: '/categories/typography'
  },
  {
    title: 'Motion Graphics',
    icon: LayersIcon,
    description: 'Templates and motion design assets',
    color: '#6366f1',
    path: '/categories/motion-graphics'
  },
];

export function Categories() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleCategoryClick = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <section id="categories" className="responsive-section py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
      >
        Browse Categories
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseMove={onMouseMove}
            onClick={() => handleCategoryClick(category.path)}
            className="group relative cursor-pointer"
          >
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 to-purple-600/50 blur-xl" />
            </div>
            
            <motion.div
              className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at \${mouseX}px \${mouseY}px,
                    ${category.color}20,
                    transparent 80%
                  )
                `,
              }}
            />

            <Card className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-card/30 p-6 transition-all duration-300 group-hover:border-white/20 group-hover:bg-card/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
              {/* Explore Now Button */}
              <motion.div
                className="absolute right-4 top-4 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-1.5 text-sm font-medium text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${category.color}50`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                </motion.button>
              </motion.div>

              {/* Icon Container */}
              <motion.div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <category.icon className="h-6 w-6" />
              </motion.div>

              {/* Content */}
              <div className="space-y-2">
                <motion.h3 
                  className="text-xl font-semibold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, ${category.color}30, transparent)`,
                }}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}