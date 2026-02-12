// Schema markup generators for SEO

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LowveldHub',
    description: 'Mpumalanga\'s premium digital ecosystem connecting businesses, services, jobs, and opportunities',
    url: 'https://www.lowveldhub.co.za',
    telephone: '+27 (0) 13 000 0000', // Update with actual number
    email: 'hello@lowveldhub.co.za', // Update with actual email
    areaServed: [
      {
        '@type': 'City',
        name: 'Nelspruit'
      },
      {
        '@type': 'City',
        name: 'Mbombela'
      },
      {
        '@type': 'City',
        name: 'Lydenburg'
      },
      {
        '@type': 'City',
        name: 'Phalaborwa'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Mpumalanga'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Mpumalanga',
      addressCountry: 'ZA'
    },
    sameAs: [
      'https://www.facebook.com/lowveldhub',
      'https://www.twitter.com/lowveldhub',
      'https://www.linkedin.com/company/lowveldhub',
      'https://www.instagram.com/lowveldhub'
    ]
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LowveldHub',
    url: 'https://www.lowveldhub.co.za',
    logo: 'https://www.lowveldhub.co.za/logo.png',
    description: 'Premium digital ecosystem for Mpumalanga businesses, services, and professional opportunities',
    sameAs: [
      'https://www.facebook.com/lowveldhub',
      'https://www.twitter.com/lowveldhub',
      'https://www.linkedin.com/company/lowveldhub'
    ]
  };
};

export const generateJobPostingSchema = (job: {
  title: string;
  description: string;
  location: string;
  employmentType: string;
  salary?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: job.location,
        addressCountry: 'ZA'
      }
    },
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'LowveldHub'
    },
    ...(job.salary && {
      baseSalary: {
        '@type': 'PriceSpecification',
        currency: 'ZAR',
        value: job.salary
      }
    })
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getMpumalanganCities = () => [
  { name: 'Nelspruit', population: '60000+', keywords: ['Nelspruit', 'White River', 'Mbombela'] },
  { name: 'Mbombela', population: '100000+', keywords: ['Mbombela', 'Nelspruit', 'Mbombela City'] },
  { name: 'Lydenburg', population: '15000+', keywords: ['Lydenburg', 'Pilgrim\'s Rest'] },
  { name: 'Phalaborwa', population: '40000+', keywords: ['Phalaborwa', 'Kruger Gate'] },
  { name: 'Witbank', population: '120000+', keywords: ['Witbank', 'Emalahleni'] },
  { name: 'Secunda', population: '80000+', keywords: ['Secunda', 'Mpumalanga'] },
  { name: 'Middleburg', population: '75000+', keywords: ['Middelburg', 'Mpumalanga'] },
  { name: 'Ermelo', population: '25000+', keywords: ['Ermelo', 'Highveld'] }
];
