import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Crown, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const resources = [
  {
    id: 1,
    title: 'Premium LUTs Collection 2024',
    description: 'Cinematic color grading presets used in Hollywood films',
    category: 'Color Grading',
    downloads: 12634,
    driveLink: 'https://drive.google.com/your-luts-link',
    isVip: true,
    rating: 4.9,
    badge: 'PREMIUM'
  },
  {
    id: 2,
    title: 'Blockbuster SFX Bundle',
    description: 'Professional sound effects from top movie studios',
    category: 'Audio',
    downloads: 8567,
    driveLink: 'https://drive.google.com/your-audio-link',
    isVip: true,
    rating: 4.8,
    badge: 'VIP'
  },
  {
    id: 3,
    title: 'Cinematic Transitions Pro',
    description: 'Seamless transitions used by pro YouTubers',
    category: 'Video',
    downloads: 23415,
    driveLink: 'https://drive.google.com/your-transitions-link',
    isVip: true,
    rating: 5.0,
    badge: 'HOT'
  },
  {
    id: 4,
    title: 'Motion Graphics Pack',
    description: 'After Effects templates for stunning intros',
    category: 'Animation',
    downloads: 15789,
    driveLink: 'https://drive.google.com/your-motion-link',
    isVip: true,
    rating: 4.7,
    badge: 'TRENDING'
  },
  {
    id: 5,
    title: 'Pro Camera Shake Presets',
    description: 'Hollywood-style camera movements and effects',
    category: 'Effects',
    downloads: 9876,
    driveLink: 'https://drive.google.com/your-presets-link',
    isVip: true,
    rating: 4.9,
    badge: 'EXCLUSIVE'
  }
];

export function FeaturedResources() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Crown className="w-8 h-8 text-yellow-500" />
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
          Premium Resources
        </h2>
        <Crown className="w-8 h-8 text-yellow-500" />
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap rounded-xl pb-4">
        <div className="flex space-x-6 p-4">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              className="w-[350px] flex-none"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="h-full backdrop-blur-sm bg-black/40 border border-white/10 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 p-6 relative">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-white">
                      {resource.title}
                    </CardTitle>
                    <Badge variant="outline" className="bg-black/50 border-yellow-500/50 text-yellow-500">
                      {resource.badge}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-yellow-500">{resource.rating}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      {resource.category}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 group"
                    onClick={() => window.open(resource.driveLink, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download VIP Resource
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="bg-white/5" />
      </ScrollArea>
      
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="bg-black/30 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          <Crown className="w-4 h-4 mr-2" />
          View All Premium Resources
        </Button>
      </div>
    </section>
  );
}