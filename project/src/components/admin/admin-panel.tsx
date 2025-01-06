import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, SaveIcon } from 'lucide-react';

interface ResourceForm {
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  downloadUrl: string;
}

const categories = [
  'video-editing',
  'photo-editing',
  'sound-effects',
  'color-grading',
  'typography',
  'motion-graphics',
  'overlays'
];

export function AdminPanel() {
  const [resources, setResources] = useState(() => {
    const saved = localStorage.getItem('resources');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState<ResourceForm>({
    title: '',
    description: '',
    category: categories[0],
    thumbnailUrl: '',
    downloadUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newResource = {
      id: Date.now().toString(),
      ...formData
    };
    const newResources = [...resources, newResource];
    setResources(newResources);
    localStorage.setItem('resources', JSON.stringify(newResources));
    setFormData({
      title: '',
      description: '',
      category: categories[0],
      thumbnailUrl: '',
      downloadUrl: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-muted-foreground">Manage your resources and content</p>
      </div>

      {/* Add Resource Form */}
      <div className="rounded-lg border bg-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Resource</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-3 py-2"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnailUrl"
              value={formData.thumbnailUrl}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Download URL</label>
            <input
              type="url"
              name="downloadUrl"
              value={formData.downloadUrl}
              onChange={handleChange}
              className="w-full rounded-md border bg-background px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <PlusIcon className="h-4 w-4" />
            Add Resource
          </button>
        </form>
      </div>

      {/* Resource List */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Existing Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource: ResourceForm & { id: string }) => (
            <div
              key={resource.id}
              className="rounded-lg border bg-background p-4"
            >
              <img
                src={resource.thumbnailUrl}
                alt={resource.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {resource.category}
                </span>
                <a
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
