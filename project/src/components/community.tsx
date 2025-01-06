import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  Instagram, 
  Github, 
  Linkedin,
  MessageSquare,
  Youtube,
  Twitter
} from 'lucide-react';

interface SocialCard {
  name: string;
  icon: React.ElementType;
  link: string;
  color: string;
  description: string;
}

const socialCards: SocialCard[] = [
  {
    name: 'WhatsApp Group',
    icon: MessageCircle,
    link: 'https://whatsapp.com/group-invite-link',
    color: '#25D366',
    description: 'Join our WhatsApp community for daily updates and discussions'
  },
  {
    name: 'Telegram',
    icon: Send,
    link: 'https://t.me/your-group',
    color: '#0088cc',
    description: 'Get instant notifications and resources on Telegram'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    link: 'https://instagram.com/your-handle',
    color: '#E4405F',
    description: 'Follow us for visual inspiration and behind-the-scenes'
  },
  {
    name: 'GitHub',
    icon: Github,
    link: 'https://github.com/your-org',
    color: '#181717',
    description: 'Contribute to our open-source projects'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://linkedin.com/company/your-company',
    color: '#0A66C2',
    description: 'Connect with us professionally'
  },
  {
    name: 'Discord',
    icon: MessageSquare,
    link: 'https://discord.gg/your-server',
    color: '#5865F2',
    description: 'Join our Discord server for real-time chat'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    link: 'https://youtube.com/@your-channel',
    color: '#FF0000',
    description: 'Watch our tutorials and showcases'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: 'https://twitter.com/your-handle',
    color: '#1DA1F2',
    description: 'Follow us for the latest updates'
  }
];

export function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50 py-20">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Join Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connect with us across various platforms and be part of our growing community
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {socialCards.map((card, index) => (
            <motion.a
              key={card.name}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-border"
              style={{
                background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9))'
              }}
            >
              {/* Animated background gradient */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(45deg, ${card.color}50, transparent)`
                }}
              />

              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ 
                  background: [
                    `linear-gradient(0deg, ${card.color}00, ${card.color}20)`,
                    `linear-gradient(180deg, ${card.color}00, ${card.color}20)`,
                    `linear-gradient(360deg, ${card.color}00, ${card.color}20)`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Icon */}
              <div className="mb-4 flex items-center justify-between">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: card.color }}
                  className="rounded-full bg-card/50 p-2"
                >
                  <card.icon className="h-6 w-6" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium text-muted-foreground"
                >
                  Join Now →
                </motion.div>
              </div>

              {/* Content */}
              <h3 
                className="mb-2 text-lg font-semibold"
                style={{ color: card.color }}
              >
                {card.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transform: 'translateX(-100%)',
                }}
                animate={{
                  transform: ['translateX(-100%)', 'translateX(100%)'],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
