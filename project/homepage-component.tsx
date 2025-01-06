import React, { useState } from 'react';
import { Download, Upload, Search, Star } from 'lucide-react';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredResources] = useState([
    {
      id: 1,
      title: 'Cinematic Transitions Pack',
      downloads: 1234,
      rating: 4.8,
      category: 'Transitions',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Sound Effects Bundle',
      downloads: 856,
      rating: 4.6,
      category: 'Audio',
      thumbnail: '/api/placeholder/300/200'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empower Your Edits with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> ClipHive</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover and share premium editing resources. Free forever.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-4 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for transitions, effects, presets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Download className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-gray-600">Downloads</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Upload className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Resources</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={resource.thumbnail}
                alt={resource.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Download className="w-4 h-4 mr-1" />
                    <span>{resource.downloads}</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1 text-gray-600">{resource.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;