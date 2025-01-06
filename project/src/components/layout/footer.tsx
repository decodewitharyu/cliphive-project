import { motion } from 'framer-motion';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, HeartIcon } from 'lucide-react';

const socialLinks = [
  {
    icon: GithubIcon,
    href: 'YOUR_GITHUB_URL',
    label: 'GitHub',
    color: '#333',
  },
  {
    icon: TwitterIcon,
    href: 'YOUR_TWITTER_URL',
    label: 'Twitter',
    color: '#1DA1F2',
  },
  {
    icon: LinkedinIcon,
    href: 'YOUR_LINKEDIN_URL',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    icon: InstagramIcon,
    href: 'YOUR_INSTAGRAM_URL',
    label: 'Instagram',
    color: '#E4405F',
  },
];

const footerLinks = [
  {
    title: 'Resources',
    links: [
      { label: 'Video Editing', href: '/categories/video-editing' },
      { label: 'Photo Editing', href: '/categories/photo-editing' },
      { label: 'Sound Effects', href: '/categories/sound-effects' },
      { label: 'Color Grading', href: '/categories/color-grading' },
      { label: 'Typography', href: '/categories/typography' },
      { label: 'Motion Graphics', href: '/categories/motion-graphics' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: '#' },
      { label: 'Forums', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'License', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Ambient Light */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-t from-primary/10 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Logo and Description */}
          <div className="space-y-4">
            <motion.div
              className="relative cursor-pointer overflow-hidden"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  hover: { x: -100, opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold"
              >
                CH
              </motion.div>
              <motion.div
                variants={{
                  initial: { x: 100, opacity: 0 },
                  hover: { x: 0, opacity: 1 }
                }}
                initial="initial"
                className="absolute left-0 top-0 text-xl font-bold text-primary"
              >
                Decode AI
              </motion.div>
            </motion.div>
            <p className="max-w-md text-sm text-muted-foreground">
              Your one-stop destination for high-quality creative resources. Elevate your projects with our curated collection of tools and assets.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-2 transition-colors hover:bg-accent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                  <span className="sr-only">{social.label}</span>
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity group-hover:opacity-50"
                    style={{ backgroundColor: social.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-2 text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            Made with <HeartIcon className="h-4 w-4 text-red-500" /> by Your Name
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
