import { motion, useAnimationControls } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { useState } from 'react';

export function MyWebsite() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  const particleCount = 12;
  const particles = Array.from({ length: particleCount });

  return (
    <section className="relative overflow-hidden py-20">
      {/* Enhanced Ambient Light Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -inset-[10px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -inset-[10px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-4xl font-bold tracking-tight"
            >
              Hi, I'm Aryan 👋
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Step into my digital portfolio where creativity meets technology. Experience a curated collection of my best work in video editing, motion graphics, and visual storytelling.
            </motion.p>

            {/* Ultra Professional Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => {
                setIsHovered(true);
                controls.start("animate");
              }}
              onHoverEnd={() => {
                setIsHovered(false);
                controls.start("initial");
              }}
              className="relative"
            >
              <motion.a
                href="https://decodewitharyu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex h-14 items-center gap-3 rounded-xl bg-background px-8 transition-colors duration-500 group-hover:bg-transparent">
                  <motion.span
                    animate={controls}
                    initial="initial"
                    variants={{
                      initial: { opacity: 1 },
                      animate: { opacity: 0 }
                    }}
                    className="font-medium text-foreground"
                  >
                    Visit My Portfolio
                  </motion.span>
                  <motion.span
                    animate={controls}
                    initial="initial"
                    variants={{
                      initial: { opacity: 0 },
                      animate: { opacity: 1 }
                    }}
                    className="absolute font-medium text-white"
                  >
                    Visit My Portfolio
                  </motion.span>
                  <motion.div
                    animate={controls}
                    initial="initial"
                    variants={{
                      initial: { opacity: 0, scale: 0.5 },
                      animate: { opacity: 1, scale: 1 }
                    }}
                  >
                    <SparklesIcon className="h-5 w-5 text-white" />
                  </motion.div>
                </span>

                {/* Particle Effects */}
                {isHovered && particles.map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-white"
                    initial={{
                      opacity: 1,
                      scale: 0
                    }}
                    animate={{
                      opacity: 0,
                      scale: 2,
                      x: Math.cos(i * (360 / particleCount) * (Math.PI / 180)) * 50,
                      y: Math.sin(i * (360 / particleCount) * (Math.PI / 180)) * 50,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      times: [0, 1]
                    }}
                  />
                ))}
              </motion.a>
            </motion.div>
          </div>

          {/* Video Container with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-video"
          >
            {/* Floating Elements */}
            <div className="absolute -left-8 -top-8 h-32 w-32 animate-float">
              <div className="absolute h-full w-full rounded-full bg-blue-500/20 blur-xl" />
              <div className="absolute h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-blue-500/20 blur-lg" />
            </div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 animate-float-delay">
              <div className="absolute h-full w-full rounded-full bg-pink-500/20 blur-xl" />
              <div className="absolute h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-pink-500/20 blur-lg" />
            </div>

            {/* Video Frame */}
            <div className="relative z-10 overflow-hidden rounded-2xl">
              {/* Animated Border */}
              <div className="absolute inset-0 animate-border-flow rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="h-full w-full rounded-2xl bg-background" />
              </div>

              {/* Video */}
              <div className="relative z-10 aspect-video overflow-hidden rounded-2xl">
                <div className="relative z-10 h-full w-full">
                  <iframe
                    src="https://decodewitharyu.vercel.app"
                    title="Aryan's Portfolio"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                {/* Overlay for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Corner Accents */}
              <div className="absolute left-0 top-0 h-16 w-16 animate-pulse-slow">
                <div className="absolute h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
                <div className="absolute h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 h-16 w-16 animate-pulse-slow">
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-pink-500 to-transparent" />
                <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-pink-500 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
