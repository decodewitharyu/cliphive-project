import { UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function UploadSection() {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold">Share Your Resource</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Resource Name</Label>
              <Input id="title" placeholder="Enter resource name..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video Editing</SelectItem>
                  <SelectItem value="photo">Photo Editing</SelectItem>
                  <SelectItem value="audio">Sound Effects</SelectItem>
                  <SelectItem value="color">Color Grading</SelectItem>
                  <SelectItem value="typography">Typography</SelectItem>
                  <SelectItem value="motion">Motion Graphics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Resource Link</Label>
              <Input id="link" placeholder="https://" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your resource..." />
            </div>

            <div className="space-y-4">
              <Label>Preview Image</Label>
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12">
                <UploadCloud className="mb-4 h-8 w-8 text-muted-foreground" />
                <p className="mb-2 text-sm font-medium">Drag and drop your image here</p>
                <p className="mb-4 text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                <Button variant="secondary" size="sm">Browse Files</Button>
              </div>
            </div>

            <Button className="w-full">Share Resource</Button>
          </div>
        </div>
      </div>
    </section>
  );
}