import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ThumbsUpIcon, MessageSquareIcon, ShareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    content:
      'Just uploaded a new pack of transitions for Premiere Pro! Perfect for travel videos and vlogs. Check it out!',
    likes: 124,
    comments: 18,
    timeAgo: '2h ago',
  },
  {
    id: 2,
    author: {
      name: 'Mark Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    content:
      'Found this amazing sound effects library for horror films. Absolutely game-changing for my latest project!',
    likes: 89,
    comments: 12,
    timeAgo: '4h ago',
  },
];

export function CommunityFeed() {
  return (
    <section className="responsive-section">
      <h2 className="responsive-mb-8 responsive-text-center responsive-text-3xl responsive-font-bold">Community Feed</h2>
      <div className="mx-auto max-w-2xl space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.content}</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUpIcon className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquareIcon className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <ShareIcon className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}