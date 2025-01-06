import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ResourceCard } from '@/components/ui/resource-card';
import { categoryData } from '@/data/site-content';

export function ColorGradingPage() {
  const { colorGrading } = categoryData;

  return (
    <>
      <Helmet>
        <title>Color Grading Resources - Clip Hive</title>
        <meta
          name="description"
          content="Download professional color grading presets, LUTs, and color correction tools."
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
            Color Grading Resources
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download professional color grading presets, LUTs, and color correction
            tools for your videos and photos.
          </motion.p>
        </div>

        {/* Grid of Resources */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colorGrading.resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              thumbnailUrl={resource.thumbnailUrl}
              downloadUrl={resource.downloadUrl}
              category={resource.category}
              gradient={colorGrading.gradient}
            />
          ))}
        </div>
      </div>
    </>
  );
}
