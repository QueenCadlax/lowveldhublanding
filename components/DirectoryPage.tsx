import React from 'react';
import { Search, MapPin, Briefcase, Users } from 'lucide-react';

interface DirectoryPageProps {
  type: 'services' | 'jobs' | 'businesses';
  onNavigate: (page: string) => void;
}

export const DirectoryPage: React.FC<DirectoryPageProps> = ({ type, onNavigate }) => {
  const configs = {
    services: {
      title: 'Browse Services & Professionals',
      subtitle: 'Find verified service providers across Mpumalanga',
      description: 'Connect with professional service providers in your area. From consulting to maintenance, find the expertise you need.',
      categories: [
        'Professional Services',
        'Plumbing & Maintenance',
        'Electrical Services',
        'Construction & Contractors',
        'Cleaning & Landscaping',
        'Technology & IT',
        'Marketing & Design',
        'Consulting & Advisory'
      ]
    },
    jobs: {
      title: 'Job Opportunities',
      subtitle: 'Find Your Next Career',
      description: 'Explore employment opportunities across Mpumalanga. Post your resume and connect with top employers.',
      categories: [
        'Technology & IT',
        'Sales & Marketing',
        'Engineering & Technical',
        'Administration & Office',
        'Healthcare & Wellness',
        'Education & Training',
        'Finance & Accounting',
        'Hospitality & Tourism'
      ]
    },
    businesses: {
      title: 'Business Directory',
      subtitle: 'Discover Local Businesses',
      description: 'Browse 1000+ verified businesses across Mpumalanga. Find products, services, and partnership opportunities.',
      categories: [
        'Retail & Commerce',
        'Food & Hospitality',
        'Manufacturing & Production',
        'Transportation & Logistics',
        'Finance & Banking',
        'Healthcare & Medicine',
        'Tourism & Recreation',
        'Education & Development'
      ]
    }
  };

  const config = configs[type];

  return (
    <div className="bg-luxury-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 font-playfair">
          {config.title}
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          {config.subtitle}
        </p>
        <p className="text-gray-400 mb-10">
          {config.description}
        </p>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 flex items-center bg-luxury-gold/10 border border-luxury-gold/30 rounded">
            <Search className="w-5 h-5 text-luxury-gold ml-4" />
            <input
              type="text"
              placeholder={`Search ${type}...`}
              className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder-gray-500"
            />
          </div>
          <button className="bg-luxury-gold text-black px-6 py-3 rounded font-bold hover:bg-luxury-goldLight transition-colors">
            Search
          </button>
        </div>

        {/* Location Filter */}
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-luxury-gold" />
          <select className="bg-luxury-gold/10 border border-luxury-gold/30 text-white rounded px-4 py-2 outline-none hover:bg-luxury-gold/20">
            <option>All of Mpumalanga</option>
            <option>Nelspruit</option>
            <option>Mbombela</option>
            <option>Witbank</option>
            <option>Secunda</option>
            <option>Lydenburg</option>
            <option>Phalaborwa</option>
            <option>Middelburg</option>
            <option>Ermelo</option>
          </select>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 px-6 bg-luxury-gold/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-playfair">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {config.categories.map((category) => (
              <div
                key={category}
                className="bg-luxury-gold/10 hover:bg-luxury-gold/20 transition-all border border-luxury-gold/30 hover:border-luxury-gold/60 p-6 rounded cursor-pointer"
              >
                <h3 className="font-semibold text-luxury-gold text-center">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings (Placeholder) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">
          Featured Listings
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Browse our latest {type} across Mpumalanga
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-luxury-gold/5 border border-luxury-gold/30 p-6 rounded">
              <div className="flex items-center gap-3 mb-4">
                {type === 'services' && <Briefcase className="w-6 h-6 text-luxury-gold" />}
                {type === 'jobs' && <Users className="w-6 h-6 text-luxury-gold" />}
                {type === 'businesses' && <MapPin className="w-6 h-6 text-luxury-gold" />}
                <div>
                  <p className="font-semibold">Featured {type === 'jobs' ? 'Position' : 'Listing'} {item}</p>
                  <p className="text-sm text-gray-400">Nelspruit, Mpumalanga</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Professional {type} available in your area. Connect with verified providers and opportunities.
              </p>
              <button className="text-luxury-gold font-semibold hover:text-luxury-goldLight">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-luxury-gold/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-luxury-gold mb-2">1000+</div>
            <p className="text-gray-400">{type === 'jobs' ? 'Open Positions' : 'Active Listings'}</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-luxury-gold mb-2">8</div>
            <p className="text-gray-400">Mpumalanga Cities Covered</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-luxury-gold mb-2">100%</div>
            <p className="text-gray-400">Verified {type === 'jobs' ? 'Employers' : 'Providers'}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            {type === 'jobs' ? 'Ready for Your Next Opportunity?' : 'Ready to List?'}
          </h2>
          <p className="text-gray-300 mb-8">
            {type === 'jobs' 
              ? 'Join thousands finding careers on LowveldHub. Upload your CV and start applying today.'
              : `Join 1000+ verified businesses and professionals on LowveldHub. Reach customers across Mpumalanga.`}
          </p>
          <button
            onClick={() => onNavigate('early-access')}
            className="bg-luxury-gold text-black px-10 py-4 rounded font-bold text-lg hover:bg-luxury-goldLight transition-colors"
          >
            {type === 'jobs' ? 'Browse Jobs' : 'List Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;
