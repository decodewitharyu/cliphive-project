import { motion } from 'framer-motion';
import { DownloadButton } from './download-button';

interface ResourceCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  downloadUrl: string;
  category: string;
  gradient?: string;
}

export function ResourceCard({
  title,
  description,
  thumbnailUrl,
  downloadUrl,
  category,
  gradient = 'from-blue-500 to-purple-500',
}: ResourceCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden">
        <motion.img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <DownloadButton href={downloadUrl} gradient={gradient} className="w-full" />
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{
          background: `linear-gradient(to right, var(--${gradient.split('-')[2]}-500), var(--${gradient.split('-')[4]}-500))`,
        }}
      />
    </motion.div>
  );
}
