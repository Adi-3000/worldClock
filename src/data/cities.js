// Comprehensive Global Cities Database with IANA Timezones and Metadata
export const CITIES_DATA = [
  // India (IST Anchor)
  {
    id: 'mumbai-in',
    city: 'Mumbai',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: true,
    isIST: true,
    accent: '#f97316'
  },
  {
    id: 'delhi-in',
    city: 'New Delhi',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: true,
    isIST: true,
    accent: '#f97316'
  },
  {
    id: 'bangalore-in',
    city: 'Bengaluru',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: true,
    isIST: true,
    accent: '#f97316'
  },
  {
    id: 'chennai-in',
    city: 'Chennai',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: false,
    isIST: true,
    accent: '#f97316'
  },
  {
    id: 'kolkata-in',
    city: 'Kolkata',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: false,
    isIST: true,
    accent: '#f97316'
  },
  {
    id: 'hyderabad-in',
    city: 'Hyderabad',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    popular: false,
    isIST: true,
    accent: '#f97316'
  },

  // North America
  {
    id: 'new-york-us',
    city: 'New York',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    timezone: 'America/New_York',
    continent: 'North America',
    popular: true,
    accent: '#3b82f6'
  },
  {
    id: 'san-francisco-us',
    city: 'San Francisco',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    timezone: 'America/Los_Angeles',
    continent: 'North America',
    popular: true,
    accent: '#6366f1'
  },
  {
    id: 'los-angeles-us',
    city: 'Los Angeles',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    timezone: 'America/Los_Angeles',
    continent: 'North America',
    popular: true,
    accent: '#ec4899'
  },
  {
    id: 'chicago-us',
    city: 'Chicago',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    timezone: 'America/Chicago',
    continent: 'North America',
    popular: false,
    accent: '#06b6d4'
  },
  {
    id: 'austin-us',
    city: 'Austin',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    timezone: 'America/Chicago',
    continent: 'North America',
    popular: false,
    accent: '#f59e0b'
  },
  {
    id: 'toronto-ca',
    city: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    timezone: 'America/Toronto',
    continent: 'North America',
    popular: true,
    accent: '#ef4444'
  },
  {
    id: 'vancouver-ca',
    city: 'Vancouver',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    timezone: 'America/Vancouver',
    continent: 'North America',
    popular: false,
    accent: '#10b981'
  },
  {
    id: 'mexico-city-mx',
    city: 'Mexico City',
    country: 'Mexico',
    countryCode: 'MX',
    flag: '🇲🇽',
    timezone: 'America/Mexico_City',
    continent: 'North America',
    popular: false,
    accent: '#14b8a6'
  },

  // Europe & UK
  {
    id: 'london-gb',
    city: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    timezone: 'Europe/London',
    continent: 'Europe',
    popular: true,
    accent: '#8b5cf6'
  },
  {
    id: 'paris-fr',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    flag: '🇫🇷',
    timezone: 'Europe/Paris',
    continent: 'Europe',
    popular: true,
    accent: '#3b82f6'
  },
  {
    id: 'berlin-de',
    city: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    timezone: 'Europe/Berlin',
    continent: 'Europe',
    popular: true,
    accent: '#eab308'
  },
  {
    id: 'amsterdam-nl',
    city: 'Amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    flag: '🇳🇱',
    timezone: 'Europe/Amsterdam',
    continent: 'Europe',
    popular: false,
    accent: '#f97316'
  },
  {
    id: 'zurich-ch',
    city: 'Zurich',
    country: 'Switzerland',
    countryCode: 'CH',
    flag: '🇨🇭',
    timezone: 'Europe/Zurich',
    continent: 'Europe',
    popular: false,
    accent: '#ef4444'
  },
  {
    id: 'dublin-ie',
    city: 'Dublin',
    country: 'Ireland',
    countryCode: 'IE',
    flag: '🇮🇪',
    timezone: 'Europe/Dublin',
    continent: 'Europe',
    popular: false,
    accent: '#10b981'
  },
  {
    id: 'rome-it',
    city: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    timezone: 'Europe/Rome',
    continent: 'Europe',
    popular: false,
    accent: '#10b981'
  },
  {
    id: 'madrid-es',
    city: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    flag: '🇪🇸',
    timezone: 'Europe/Madrid',
    continent: 'Europe',
    popular: false,
    accent: '#f59e0b'
  },
  {
    id: 'stockholm-se',
    city: 'Stockholm',
    country: 'Sweden',
    countryCode: 'SE',
    flag: '🇸🇪',
    timezone: 'Europe/Stockholm',
    continent: 'Europe',
    popular: false,
    accent: '#0284c7'
  },

  // Asia & Middle East
  {
    id: 'dubai-ae',
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    flag: '🇦🇪',
    timezone: 'Asia/Dubai',
    continent: 'Middle East',
    popular: true,
    accent: '#d97706'
  },
  {
    id: 'singapore-sg',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    flag: '🇸🇬',
    timezone: 'Asia/Singapore',
    continent: 'Asia',
    popular: true,
    accent: '#ef4444'
  },
  {
    id: 'tokyo-jp',
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    flag: '🇯🇵',
    timezone: 'Asia/Tokyo',
    continent: 'Asia',
    popular: true,
    accent: '#e11d48'
  },
  {
    id: 'hong-kong-hk',
    city: 'Hong Kong',
    country: 'Hong Kong',
    countryCode: 'HK',
    flag: '🇭🇰',
    timezone: 'Asia/Hong_Kong',
    continent: 'Asia',
    popular: true,
    accent: '#f43f5e'
  },
  {
    id: 'seoul-kr',
    city: 'Seoul',
    country: 'South Korea',
    countryCode: 'KR',
    flag: '🇰🇷',
    timezone: 'Asia/Seoul',
    continent: 'Asia',
    popular: false,
    accent: '#3b82f6'
  },
  {
    id: 'bangkok-th',
    city: 'Bangkok',
    country: 'Thailand',
    countryCode: 'TH',
    flag: '🇹🇭',
    timezone: 'Asia/Bangkok',
    continent: 'Asia',
    popular: false,
    accent: '#a855f7'
  },
  {
    id: 'riyadh-sa',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    flag: '🇸🇦',
    timezone: 'Asia/Riyadh',
    continent: 'Middle East',
    popular: false,
    accent: '#15803d'
  },
  {
    id: 'doha-qa',
    city: 'Doha',
    country: 'Qatar',
    countryCode: 'QA',
    flag: '🇶🇦',
    timezone: 'Asia/Qatar',
    continent: 'Middle East',
    popular: false,
    accent: '#881337'
  },
  {
    id: 'kuala-lumpur-my',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    countryCode: 'MY',
    flag: '🇲🇾',
    timezone: 'Asia/Kuala_Lumpur',
    continent: 'Asia',
    popular: false,
    accent: '#eab308'
  },
  {
    id: 'shanghai-cn',
    city: 'Shanghai',
    country: 'China',
    countryCode: 'CN',
    flag: '🇨🇳',
    timezone: 'Asia/Shanghai',
    continent: 'Asia',
    popular: false,
    accent: '#dc2626'
  },

  // Oceania & Australia
  {
    id: 'sydney-au',
    city: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    timezone: 'Australia/Sydney',
    continent: 'Oceania',
    popular: true,
    accent: '#0284c7'
  },
  {
    id: 'melbourne-au',
    city: 'Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    timezone: 'Australia/Melbourne',
    continent: 'Oceania',
    popular: false,
    accent: '#6366f1'
  },
  {
    id: 'auckland-nz',
    city: 'Auckland',
    country: 'New Zealand',
    countryCode: 'NZ',
    flag: '🇳🇿',
    timezone: 'Pacific/Auckland',
    continent: 'Oceania',
    popular: true,
    accent: '#059669'
  },

  // South America
  {
    id: 'sao-paulo-br',
    city: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    flag: '🇧🇷',
    timezone: 'America/Sao_Paulo',
    continent: 'South America',
    popular: true,
    accent: '#16a34a'
  },
  {
    id: 'buenos-aires-ar',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    flag: '🇦🇷',
    timezone: 'America/Argentina/Buenos_Aires',
    continent: 'South America',
    popular: false,
    accent: '#38bdf8'
  },

  // Africa
  {
    id: 'cairo-eg',
    city: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    flag: '🇪🇬',
    timezone: 'Africa/Cairo',
    continent: 'Africa',
    popular: false,
    accent: '#eab308'
  },
  {
    id: 'johannesburg-za',
    city: 'Johannesburg',
    country: 'South Africa',
    countryCode: 'ZA',
    flag: '🇿🇦',
    timezone: 'Africa/Johannesburg',
    continent: 'Africa',
    popular: false,
    accent: '#f97316'
  },
  {
    id: 'nairobi-ke',
    city: 'Nairobi',
    country: 'Kenya',
    countryCode: 'KE',
    flag: '🇰🇪',
    timezone: 'Africa/Nairobi',
    continent: 'Africa',
    popular: false,
    accent: '#10b981'
  }
];

export const DEFAULT_USER_CITIES = [
  'mumbai-in',       // IST Anchor
  'london-gb',        // UK
  'new-york-us',      // US Eastern
  'san-francisco-us', // US Pacific
  'dubai-ae',         // UAE
  'singapore-sg',     // Singapore
  'tokyo-jp',         // Japan
  'sydney-au'         // Australia
];

export const CONTINENTS = [
  'All',
  'Popular',
  'Asia',
  'North America',
  'Europe',
  'Middle East',
  'Oceania',
  'South America',
  'Africa'
];
