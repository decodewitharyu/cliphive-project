import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ResourceCard } from '@/components/ui/resource-card';
import { categoryData } from '@/data/site-content';

export function TypographyPage() {
  const { typography } = categoryData;

  return (
    <>
      <Helmet>
        <title>Typography Resources - Clip Hive</title>
        <meta
          name="description"
          content="Download professional typography templates, animations, and text effects."
        />
      </Helmet>

      <div className="container py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1
            className="mb-4 text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Typography Resources
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download professional typography templates, animated text effects,
            and kinetic type animations for your videos.
          </motion.p>
        </div>

        {/* Grid of Resources */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typography.resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              thumbnailUrl={resource.thumbnailUrl}
              downloadUrl={resource.downloadUrl}
              category={resource.category}
              gradient={typography.gradient}
            />
          ))}
        </div>
      </div>
    </>
  );
}
