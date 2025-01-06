import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from 'lucide-react';
import { categoryData } from '@/data/site-content';
import { Button } from './ui/button';

export function PremiumResources() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="premium-resources" className="relative bg-gradient-to-b from-background to-background/50 py-20">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Premium Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Unlock exclusive premium resources to take your projects to the next level
          </motion.p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-4 top-8 flex gap-2 sm:right-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="h-8 w-8 rounded-full"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Horizontal Scrolling Resources */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-6"
        >
          {Object.entries(categoryData).map(([key, category]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-w-[300px] overflow-hidden rounded-xl border border-border/50 bg-card"
            >
              {/* VIP Badge */}
              <motion.div
                className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 p-[1px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-1 rounded-full bg-background/95 px-3 py-1 backdrop-blur">
                  <SparklesIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-bold text-yellow-500">VIP</span>
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${category.thumbnailUrl || '/placeholder.jpg'})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <Button
                  className="group relative w-full overflow-hidden rounded-lg border border-yellow-500/20"
                  onClick={() => window.open(category.downloadUrl, '_blank')}
                >
                  {/* Golden gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20" />
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2 px-4 py-2 font-semibold text-yellow-500">
                    <SparklesIcon className="h-4 w-4" />
                    <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                      Download VIP
                    </span>
                  </div>
                </Button>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transform: 'translateX(-100%)',
                }}
                animate={{
                  transform: ['translateX(-100%)', 'translateX(100%)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
