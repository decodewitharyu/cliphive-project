import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { Button } from './button';

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
        
        <Button
          className="group relative w-full overflow-hidden rounded-lg border border-yellow-500/20"
          onClick={() => window.open(downloadUrl, '_blank')}
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
