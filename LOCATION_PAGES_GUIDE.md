# Location Pages Implementation Guide

## Quick Overview
This guide helps you create location-specific landing pages that will dominate local SEO searches for each Mpumalanga city.

## Cities to Target (Priority Order)

| City | Population | Priority | Focus Keywords |
|------|-----------|----------|-----------------|
| Nelspruit | 60,000+ | ⭐⭐⭐ | Services in Nelspruit, Nelspruit businesses, Nelspruit jobs |
| Mbombela | 100,000+ | ⭐⭐⭐ | Mbombela directory, Services Mbombela, Mbombela companies |
| Witbank | 120,000+ | ⭐⭐⭐ | Witbank services, Witbank jobs, Emalahleni businesses |
| Secunda | 80,000+ | ⭐⭐ | Secunda businesses, Services Secunda |
| Middelburg | 75,000+ | ⭐⭐ | Middelburg services, Middelburg directory |
| Phalaborwa | 40,000+ | ⭐⭐ | Services Phalaborwa, Phalaborwa businesses |
| Lydenburg | 15,000+ | ⭐⭐ | Lydenburg services, Local Lydenburg |
| Ermelo | 25,000+ | ⭐ | Services Ermelo, Ermelo directory |

## Location Page Structure

### URL Pattern
```
https://www.lowveldhub.co.za/[city-name]
```

### File Structure
Create a new component for each location in `pages/Locations/`:
```
pages/
  Locations/
    Nelspruit.tsx
    Mbombela.tsx
    Lydenburg.tsx
    etc.
```

### Page Components (Example: Nelspruit)

#### 1. Hero Section
```
Title: "Discover Premium Businesses & Services in Nelspruit"
Subtitle: "Connect with verified companies, professional services, and job opportunities in Nelspruit, Mpumalanga"
```

#### 2. Quick Stats
```
- X verified businesses in Nelspruit
- X job opportunities
- X service categories
- Active community members
```

#### 3. Featured Categories
```
Services:
  - Professional Services
  - Construction & Contractors
  - Restaurants & Hospitality
  - Education
  - Healthcare
  - Retail & Shopping

Jobs:
  - Latest openings in Nelspruit area
  - Featured employers

Businesses:
  - Top rated companies
  - New listings
```

#### 4. Search/Filter Section
```
Filter by:
- Category
- Service type
- Rating
- Recently added
```

#### 5. FAQ Section
```
- "What businesses are in Nelspruit?"
- "How do I list my Nelspruit business?"
- "Who are the top employers in Nelspruit?"
- "What services are available in Nelspruit?"
```

#### 6. Call-to-Action
```
"List Your Nelspruit Business"
"Post a Job in Nelspruit"
"Join the Nelspruit Business Community"
```

#### 7. Bottom Navigation
```
- Related cities: Mbombela, White River, etc.
- More Mpumalanga locations
- Browse all services
- Browse all jobs
```

## React Component Template

```tsx
import React from 'react';
import { MapPin, Building2, Briefcase, Users } from 'lucide-react';

interface LocationPageProps {
  city: {
    name: string;
    region: string;
    population: string;
    description: string;
    keywords: string[];
    businessCount: number;
    jobCount: number;
  };
  onNavigate: (page: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ city, onNavigate }) => {
  return (
    <div className="bg-luxury-black text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover Businesses & Services in {city.name}
        </h1>
        <p className="text-xl text-luxury-gold mb-8">
          Premium local directory for {city.name}, {city.region}
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-4 gap-6 py-16">
        <div>
          <Building2 className="w-8 h-8 text-luxury-gold mb-4" />
          <div className="text-3xl font-bold">{city.businessCount}+</div>
          <div className="text-gray-400">Businesses Listed</div>
        </div>
        <div>
          <Briefcase className="w-8 h-8 text-luxury-gold mb-4" />
          <div className="text-3xl font-bold">{city.jobCount}+</div>
          <div className="text-gray-400">Job Opportunities</div>
        </div>
        <div>
          <Users className="w-8 h-8 text-luxury-gold mb-4" />
          <div className="text-3xl font-bold">{city.population}</div>
          <div className="text-gray-400">Population</div>
        </div>
        <div>
          <MapPin className="w-8 h-8 text-luxury-gold mb-4" />
          <div className="text-3xl font-bold">1</div>
          <div className="text-gray-400">Connected Community</div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Browse Categories</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Category cards */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        {/* FAQ items with schema markup */}
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-luxury-gold/10">
        <h2 className="text-3xl font-bold mb-4">List Your {city.name} Business</h2>
        <p className="mb-8">Join 1000s of businesses already listed on LowveldHub</p>
        <button 
          onClick={() => onNavigate('early-access')}
          className="bg-luxury-gold text-black px-8 py-3 rounded font-bold"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default LocationPage;
```

## SEO Meta Tags Per City

Each location page should have:

**Nelspruit:**
```
<title>Businesses, Services & Jobs in Nelspruit, Mpumalanga | LowveldHub</title>
<meta name="description" content="Find verified businesses, professional services, and job opportunities in Nelspruit. Browse local companies, contractors, restaurants & more on LowveldHub.">
```

**Mbombela:**
```
<title>Mbombela Business Directory & Local Services | LowveldHub</title>
<meta name="description" content="Discover premium businesses and services in Mbombela, Mpumalanga. Connect with verified companies and find job opportunities in Mbombela on LowveldHub.">
```

**Pattern:**
```
{City} (Business Directory | Services | Jobs) | LowveldHub
```

## Internal Linking Strategy

- **Homepage** → Links to all 8 city pages
- **Each city page** → Links to:
  - Related cities
  - Service categories for that city
  - Job listings in that city
  - Back to homepage
- **Category pages** → Links to all city variations
- **Job listings** → Links to relevant city + category pages

## Local Schema for Each City

Add LocalBusiness schema with specific city area served:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LowveldHub Nelspruit",
  "areaServed": "Nelspruit, Mpumalanga, South Africa",
  "url": "https://www.lowveldhub.co.za/nelspruit",
  "telephone": "+27 13 000 0000"
}
```

## Content Calendar

**Week 1:** Create 3 highest-priority city pages (Nelspruit, Mbombela, Witbank)
**Week 2:** Create 3 mid-priority city pages (Secunda, Middelburg, Phalaborwa)  
**Week 3:** Create 2 remaining city pages (Lydenburg, Ermelo)
**Week 4:** Create category landing pages (Services, Jobs, Businesses)

## Performance Tips

1. **Images**: Use high-quality photos of each city
2. **Population data**: Update with actual current figures
3. **Business counts**: Start with estimated numbers, update as you get real data
4. **Schema markup**: Ensure each page has proper LocalBusiness schema
5. **Internal links**: Heavy internal linking between related pages
6. **Content freshness**: Update regularly with new businesses/jobs

## Expected Rankings

After implementation:
- 1-3 for: "Services in [City]", "[City] businesses", "Jobs in [City]"
- 1-5 for: "[City] directory", "[City] local services", "[City] job listings"
- 1-10 for: "[City] companies", "[City] professional services"

---

**Next steps:** Use this template to build out all 8 location pages before launch
