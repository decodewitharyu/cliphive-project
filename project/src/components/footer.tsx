import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}>
      <div className="container py-12">
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 text-center">
          <div className="lg:col-start-1 lg:col-end-2">
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground">About Us</a></li>
              <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
              <li><a href="/careers" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div className="lg:col-start-2 lg:col-end-3">
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/help" className="hover:text-foreground">Help Center</a></li>
              <li><a href="/terms" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="lg:col-start-3 lg:col-end-4">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 ClipHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}