import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  active: boolean;
}

export function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('announcements');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnnouncements(parsed.filter((a: Announcement) => a.active));
    }
  }, []);

  const currentAnnouncement = announcements[currentIndex];
  const showBanner = currentAnnouncement && !dismissed.includes(currentAnnouncement.id);

  const handleDismiss = () => {
    if (currentAnnouncement) {
      setDismissed(prev => [...prev, currentAnnouncement.id]);
      if (currentIndex < announcements.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary"
      >
        <div className="container py-3 px-4 flex items-center justify-between">
          <div className="flex-1 text-primary-foreground">
            <p className="font-medium">{currentAnnouncement.title}</p>
            <p className="text-sm opacity-90">{currentAnnouncement.content}</p>
          </div>
          <button
            onClick={handleDismiss}
            className="ml-4 p-1 hover:bg-white/20 rounded-full text-primary-foreground"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
