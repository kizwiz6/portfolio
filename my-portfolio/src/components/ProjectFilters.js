// src/components/ProjectFilters.js
import React from 'react';
import { Search } from 'lucide-react';

const ProjectFilters = ({ filters, setFilters }) => {
  const categories = ['All', 'Personal Project', 'Work at iGO4', 'Work at Acticheck', 'University Project'];

  return (
    <div className="mb-8">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-colors ${
              filters.category === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilters(prev => ({ ...prev, category: category }))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;