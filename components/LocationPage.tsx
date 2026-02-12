import React from 'react';
import { MapPin, Building2, Briefcase, Users, Star } from 'lucide-react';
import { generateLocalBusinessSchema, generateFAQSchema } from '../lib/schema';

export interface LocationData {
  name: string;
  slug: string;
  region: string;
  population: string;
  businessCount: number;
  jobCount: number;
  description: string;
  featuredCategories: string[];
  faqs: { question: string; answer: string }[];
}

interface LocationPageProps {
  location: LocationData;
  onNavigate: (page: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location, onNavigate }) => {
  const schema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(location.faqs);

  React.useEffect(() => {
    // Inject LocalBusiness schema
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify({
      ...schema,
      name: `LowveldHub ${location.name}`,
      areaServed: location.name,
      url: `https://www.lowveldhub.co.za/${location.slug}`
    });
    document.head.appendChild(script1);

    // Inject FAQ schema
    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [location, schema, faqSchema]);

  return (
    <div className="bg-luxury-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <MapPin className="w-12 h-12 text-luxury-gold" />
        </div>
        <h1 className="text-5xl font-bold mb-4 font-playfair">
          Businesses & Services in {location.name}
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          {location.description}
        </p>
        <p className="text-luxury-gold font-semibold">
          {location.region} | {location.population} residents
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-luxury-gold/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Building2 className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{location.businessCount}+</div>
            <div className="text-gray-400">Businesses Listed</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{location.jobCount}+</div>
            <div className="text-gray-400">Job Opportunities</div>
          </div>
          <div className="text-center">
            <Users className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{location.population}</div>
            <div className="text-gray-400">Local Community</div>
          </div>
          <div className="text-center">
            <Star className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">5.0</div>
            <div className="text-gray-400">Trusted Platform</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.featuredCategories.map((category) => (
            <div
              key={category}
              className="bg-luxury-gold/10 hover:bg-luxury-gold/20 transition-colors p-8 rounded-lg cursor-pointer border border-luxury-gold/30 hover:border-luxury-gold/60"
              onClick={() => onNavigate('services')}
            >
              <h3 className="text-xl font-semibold text-luxury-gold mb-2">
                {category}
              </h3>
              <p className="text-gray-400 mb-4">
                Find verified {category.toLowerCase()} in {location.name}
              </p>
              <div className="text-luxury-gold font-semibold hover:text-luxury-goldLight">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-6 bg-luxury-gold/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-playfair">
            Why LowveldHub {location.name}?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold mb-1">Verified Businesses</p>
                <p className="text-gray-400">All businesses on our platform are verified and trusted by the {location.name} community.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold mb-1">Real Jobs</p>
                <p className="text-gray-400">Find genuine employment opportunities from top employers in {location.name}.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold mb-1">Local Support</p>
                <p className="text-gray-400">Support local {location.name} businesses and grow the community ecosystem.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold mb-1">Easy to Use</p>
                <p className="text-gray-400">Simple platform to find services, post jobs, and grow your business in {location.name}.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {location.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-2 border-luxury-gold pl-6 py-2"
            >
              <h3 className="text-lg font-semibold text-luxury-gold mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Ready to List Your {location.name} Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of verified businesses already growing on LowveldHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('early-access')}
              className="bg-luxury-gold text-black px-10 py-4 rounded font-bold text-lg hover:bg-luxury-goldLight transition-colors"
            >
              List Your Business
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="border-2 border-luxury-gold text-luxury-gold px-10 py-4 rounded font-bold text-lg hover:bg-luxury-gold/10 transition-colors"
            >
              Post a Job
            </button>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-16 px-6 bg-luxury-gold/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Explore Other Mpumalanga Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Nelspruit</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Mbombela</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Witbank</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Secunda</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Lydenburg</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Phalaborwa</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Middelburg</p>
            </div>
            <div className="text-center p-4 border border-luxury-gold/30 rounded hover:bg-luxury-gold/10 cursor-pointer transition-colors">
              <p className="font-semibold text-luxury-gold">Ermelo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
