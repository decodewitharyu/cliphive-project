import { motion } from 'framer-motion';
import { premiumResources } from '@/data/site-content';
import { DownloadButton } from './ui/download-button';

export function PremiumResources() {
  return (
    <section className="container py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Premium Resources
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Unlock exclusive premium resources to take your creative projects to the next level.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(premiumResources).map((resource, index) => (
            <motion.div
              key={resource.title}
              className="group relative overflow-hidden rounded-2xl bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{resource.icon}</div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{resource.description}</p>

              {/* Download Button */}
              <DownloadButton href={resource.downloadUrl} gradient={resource.gradient} />

              {/* Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                style={{
                  background: `linear-gradient(to right, var(--${resource.gradient.split('-')[2]}-500), var(--${resource.gradient.split('-')[4]}-500))`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
