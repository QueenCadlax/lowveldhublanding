/**
 * Page Metadata for SEO
 * Define title, description, and OG data for each page
 */

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'LowveldHub | Mpumalanga\'s Premium Digital Ecosystem',
    description: 'Join Africa\'s most exclusive digital platform launching July 2026. Verified businesses, luxury stays, vehicles, real estate, and curated experiences in Mpumalanga.',
    keywords: 'luxury platform, Mpumalanga, digital ecosystem, verified businesses, luxury travel',
    ogImage: 'https://www.lowveldhub.co.za/og-image.jpg',
  },
  vision: {
    title: 'Our Vision | LowveldHub - The Future Defined',
    description: 'Discover LowveldHub\'s vision for transforming Mpumalanga\'s digital future. Excellence, innovation, and luxury reimagined.',
    keywords: 'vision, luxury ecosystem, digital transformation, Mpumalanga innovation',
    ogImage: 'https://www.lowveldhub.co.za/og-vision.jpg',
  },
  ecosystem: {
    title: 'Ecosystem | LowveldHub - Premium Features',
    description: 'Explore LowveldHub\'s ecosystem: verified businesses, luxury stays, exclusive vehicles, premium real estate, and curated experiences.',
    keywords: 'ecosystem, verified businesses, luxury stays, vehicles, real estate, experiences',
    ogImage: 'https://www.lowveldhub.co.za/og-ecosystem.jpg',
  },
  'early-access': {
    title: 'Early Access | LowveldHub - Secure Your Invitation',
    description: 'Request your exclusive early access invitation to LowveldHub. Be among the first to experience Mpumalanga\'s premium digital platform.',
    keywords: 'early access, exclusive invitation, VIP signup, premium platform',
    ogImage: 'https://www.lowveldhub.co.za/og-early-access.jpg',
  },
  careers: {
    title: 'Careers | LowveldHub - Join Our Team',
    description: 'Join LowveldHub\'s team and help build Mpumalanga\'s digital future. Explore career opportunities with Africa\'s most exclusive platform.',
    keywords: 'careers, employment, Mpumalanga, digital platform jobs',
    ogImage: 'https://www.lowveldhub.co.za/og-careers.jpg',
  },
  partners: {
    title: 'Partners | LowveldHub - Business Partnerships',
    description: 'Partner with LowveldHub to expand your reach. Collaboration opportunities for businesses and organizations in Mpumalanga.',
    keywords: 'partnerships, business collaboration, Mpumalanga ventures',
    ogImage: 'https://www.lowveldhub.co.za/og-partners.jpg',
  },
  privacy: {
    title: 'Privacy Policy | LowveldHub',
    description: 'LowveldHub Privacy Policy - Your data protection and privacy rights.',
    keywords: 'privacy policy, data protection, POPIA compliance',
  },
  terms: {
    title: 'Terms of Excellence | LowveldHub',
    description: 'LowveldHub Terms of Excellence - Terms of service and user agreement.',
    keywords: 'terms, terms of service, user agreement',
  },
};

/**
 * Get metadata for a specific page
 */
export function getPageMetadata(page: string): PageMetadata {
  return pageMetadata[page] || pageMetadata.home;
}

/**
 * Update document head metadata dynamically
 * Call this when page changes in App.tsx
 */
export function updatePageMetadata(page: string): void {
  const metadata = getPageMetadata(page);

  // Update title
  document.title = metadata.title;

  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', metadata.description);

  // Update OG title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', metadata.title);

  // Update OG description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', metadata.description);

  // Update OG image if provided
  if (metadata.ogImage) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', metadata.ogImage);
  }

  // Update canonical URL
  const path = page === 'home' ? '/' : `/${page}`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://www.lowveldhub.co.za${path}`);
}
