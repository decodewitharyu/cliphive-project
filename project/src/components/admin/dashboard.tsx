import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, LogOutIcon, TrashIcon, BellIcon } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  active: boolean;
}

interface ResourceForm {
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  downloadUrl: string;
  isPremium?: boolean;
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

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('resources');
  const [resources, setResources] = useState(() => {
    const saved = localStorage.getItem('resources');
    return saved ? JSON.parse(saved) : [];
  });
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem('announcements');
    return saved ? JSON.parse(saved) : [];
  });
  const [formData, setFormData] = useState<ResourceForm>({
    title: '',
    description: '',
    category: categories[0],
    thumbnailUrl: '',
    downloadUrl: '',
    isPremium: false
  });
  const [announcementForm, setAnnouncementForm] = useState({
    title: '',
    content: '',
    active: true
  });

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const handleResourceSubmit = (e: React.FormEvent) => {
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
      downloadUrl: '',
      isPremium: false
    });
  };

  const handleAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnnouncement = {
      id: Date.now().toString(),
      ...announcementForm
    };
    const newAnnouncements = [...announcements, newAnnouncement];
    setAnnouncements(newAnnouncements);
    localStorage.setItem('announcements', JSON.stringify(newAnnouncements));
    setAnnouncementForm({
      title: '',
      content: '',
      active: true
    });
  };

  const deleteResource = (id: string) => {
    const newResources = resources.filter((r: any) => r.id !== id);
    setResources(newResources);
    localStorage.setItem('resources', JSON.stringify(newResources));
  };

  const deleteAnnouncement = (id: string) => {
    const newAnnouncements = announcements.filter((a: any) => a.id !== id);
    setAnnouncements(newAnnouncements);
    localStorage.setItem('announcements', JSON.stringify(newAnnouncements));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            <LogOutIcon className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <div className="container py-4">
        <nav className="flex gap-4 border-b">
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 -mb-px ${
              activeTab === 'resources'
                ? 'border-b-2 border-primary font-medium'
                : 'text-muted-foreground'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-2 -mb-px ${
              activeTab === 'announcements'
                ? 'border-b-2 border-primary font-medium'
                : 'text-muted-foreground'
            }`}
          >
            Announcements
          </button>
        </nav>
      </div>

      <main className="container py-8">
        {activeTab === 'resources' ? (
          <>
            {/* Add Resource Form */}
            <div className="rounded-lg border bg-card p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Resource</h2>
              <form onSubmit={handleResourceSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full rounded-md border bg-background px-3 py-2"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full rounded-md border bg-background px-3 py-2"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
                    <input
                      type="url"
                      value={formData.thumbnailUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, thumbnailUrl: e.target.value }))}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Download URL</label>
                    <input
                      type="url"
                      value={formData.downloadUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, downloadUrl: e.target.value }))}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPremium"
                    checked={formData.isPremium}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPremium: e.target.checked }))}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="isPremium" className="text-sm font-medium">
                    Premium Resource
                  </label>
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
                      <div className="flex items-center gap-2">
                        <a
                          href={resource.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Download
                        </a>
                        <button
                          onClick={() => deleteResource(resource.id)}
                          className="p-1 text-destructive hover:bg-destructive/10 rounded"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Add Announcement Form */}
            <div className="rounded-lg border bg-card p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Announcement</h2>
              <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={announcementForm.title}
                    onChange={(e) => setAnnouncementForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full rounded-md border bg-background px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Content</label>
                  <textarea
                    value={announcementForm.content}
                    onChange={(e) => setAnnouncementForm(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full rounded-md border bg-background px-3 py-2"
                    rows={3}
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={announcementForm.active}
                    onChange={(e) => setAnnouncementForm(prev => ({ ...prev, active: e.target.checked }))}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium">
                    Active
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <BellIcon className="h-4 w-4" />
                  Add Announcement
                </button>
              </form>
            </div>

            {/* Announcements List */}
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Current Announcements</h2>
              <div className="space-y-4">
                {announcements.map((announcement: Announcement) => (
                  <div
                    key={announcement.id}
                    className="rounded-lg border bg-background p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          announcement.active
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-gray-500/10 text-gray-500'
                        }`}>
                          {announcement.active ? 'Active' : 'Inactive'}
                        </span>
                        <button
                          onClick={() => deleteAnnouncement(announcement.id)}
                          className="p-1 text-destructive hover:bg-destructive/10 rounded"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
