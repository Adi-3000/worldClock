// Comprehensive Global Countries Database with IANA Timezones, Flags & Continents
export const CITIES_DATA = [
  // India (IST Anchor)
  { 
    id: 'india', 
    displayName: 'India', 
    country: 'India', 
    city: 'New Delhi', 
    countryCode: 'IN', 
    flag: '🇮🇳', 
    timezone: 'Asia/Kolkata', 
    continent: 'Asia', 
    popular: true, 
    isIST: true, 
    accent: '#f97316' 
  },

  // North America
  { 
    id: 'usa-eastern', 
    displayName: 'United States (Eastern)', 
    country: 'United States', 
    region: 'Eastern (NY, DC, Miami)', 
    city: 'New York', 
    countryCode: 'US', 
    flag: '🇺🇸', 
    timezone: 'America/New_York', 
    continent: 'North America', 
    popular: true, 
    accent: '#3b82f6' 
  },
  { 
    id: 'usa-pacific', 
    displayName: 'United States (Pacific)', 
    country: 'United States', 
    region: 'Pacific (CA, WA, NV)', 
    city: 'San Francisco', 
    countryCode: 'US', 
    flag: '🇺🇸', 
    timezone: 'America/Los_Angeles', 
    continent: 'North America', 
    popular: true, 
    accent: '#6366f1' 
  },
  { 
    id: 'usa-central', 
    displayName: 'United States (Central)', 
    country: 'United States', 
    region: 'Central (TX, IL)', 
    city: 'Chicago', 
    countryCode: 'US', 
    flag: '🇺🇸', 
    timezone: 'America/Chicago', 
    continent: 'North America', 
    popular: true, 
    accent: '#06b6d4' 
  },
  { 
    id: 'usa-mountain', 
    displayName: 'United States (Mountain)', 
    country: 'United States', 
    region: 'Mountain (CO, AZ)', 
    city: 'Denver', 
    countryCode: 'US', 
    flag: '🇺🇸', 
    timezone: 'America/Denver', 
    continent: 'North America', 
    popular: false, 
    accent: '#8b5cf6' 
  },
  { 
    id: 'canada-eastern', 
    displayName: 'Canada (Eastern)', 
    country: 'Canada', 
    region: 'Ontario, Quebec', 
    city: 'Toronto', 
    countryCode: 'CA', 
    flag: '🇨🇦', 
    timezone: 'America/Toronto', 
    continent: 'North America', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'canada-pacific', 
    displayName: 'Canada (Pacific)', 
    country: 'Canada', 
    region: 'British Columbia', 
    city: 'Vancouver', 
    countryCode: 'CA', 
    flag: '🇨🇦', 
    timezone: 'America/Vancouver', 
    continent: 'North America', 
    popular: true, 
    accent: '#10b981' 
  },
  { 
    id: 'mexico', 
    displayName: 'Mexico', 
    country: 'Mexico', 
    city: 'Mexico City', 
    countryCode: 'MX', 
    flag: '🇲🇽', 
    timezone: 'America/Mexico_City', 
    continent: 'North America', 
    popular: true, 
    accent: '#14b8a6' 
  },

  // Europe & UK
  { 
    id: 'uk', 
    displayName: 'United Kingdom', 
    country: 'United Kingdom', 
    city: 'London', 
    countryCode: 'GB', 
    flag: '🇬🇧', 
    timezone: 'Europe/London', 
    continent: 'Europe', 
    popular: true, 
    accent: '#8b5cf6' 
  },
  { 
    id: 'germany', 
    displayName: 'Germany', 
    country: 'Germany', 
    city: 'Berlin', 
    countryCode: 'DE', 
    flag: '🇩🇪', 
    timezone: 'Europe/Berlin', 
    continent: 'Europe', 
    popular: true, 
    accent: '#eab308' 
  },
  { 
    id: 'france', 
    displayName: 'France', 
    country: 'France', 
    city: 'Paris', 
    countryCode: 'FR', 
    flag: '🇫🇷', 
    timezone: 'Europe/Paris', 
    continent: 'Europe', 
    popular: true, 
    accent: '#3b82f6' 
  },
  { 
    id: 'netherlands', 
    displayName: 'Netherlands', 
    country: 'Netherlands', 
    city: 'Amsterdam', 
    countryCode: 'NL', 
    flag: '🇳🇱', 
    timezone: 'Europe/Amsterdam', 
    continent: 'Europe', 
    popular: true, 
    accent: '#f97316' 
  },
  { 
    id: 'switzerland', 
    displayName: 'Switzerland', 
    country: 'Switzerland', 
    city: 'Zurich', 
    countryCode: 'CH', 
    flag: '🇨🇭', 
    timezone: 'Europe/Zurich', 
    continent: 'Europe', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'ireland', 
    displayName: 'Ireland', 
    country: 'Ireland', 
    city: 'Dublin', 
    countryCode: 'IE', 
    flag: '🇮🇪', 
    timezone: 'Europe/Dublin', 
    continent: 'Europe', 
    popular: true, 
    accent: '#10b981' 
  },
  { 
    id: 'italy', 
    displayName: 'Italy', 
    country: 'Italy', 
    city: 'Rome', 
    countryCode: 'IT', 
    flag: '🇮🇹', 
    timezone: 'Europe/Rome', 
    continent: 'Europe', 
    popular: true, 
    accent: '#10b981' 
  },
  { 
    id: 'spain', 
    displayName: 'Spain', 
    country: 'Spain', 
    city: 'Madrid', 
    countryCode: 'ES', 
    flag: '🇪🇸', 
    timezone: 'Europe/Madrid', 
    continent: 'Europe', 
    popular: true, 
    accent: '#f59e0b' 
  },
  { 
    id: 'sweden', 
    displayName: 'Sweden', 
    country: 'Sweden', 
    city: 'Stockholm', 
    countryCode: 'SE', 
    flag: '🇸🇪', 
    timezone: 'Europe/Stockholm', 
    continent: 'Europe', 
    popular: true, 
    accent: '#0284c7' 
  },
  { 
    id: 'norway', 
    displayName: 'Norway', 
    country: 'Norway', 
    city: 'Oslo', 
    countryCode: 'NO', 
    flag: '🇳🇴', 
    timezone: 'Europe/Oslo', 
    continent: 'Europe', 
    popular: false, 
    accent: '#3b82f6' 
  },
  { 
    id: 'denmark', 
    displayName: 'Denmark', 
    country: 'Denmark', 
    city: 'Copenhagen', 
    countryCode: 'DK', 
    flag: '🇩🇰', 
    timezone: 'Europe/Copenhagen', 
    continent: 'Europe', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'finland', 
    displayName: 'Finland', 
    country: 'Finland', 
    city: 'Helsinki', 
    countryCode: 'FI', 
    flag: '🇫🇮', 
    timezone: 'Europe/Helsinki', 
    continent: 'Europe', 
    popular: false, 
    accent: '#3b82f6' 
  },
  { 
    id: 'poland', 
    displayName: 'Poland', 
    country: 'Poland', 
    city: 'Warsaw', 
    countryCode: 'PL', 
    flag: '🇵🇱', 
    timezone: 'Europe/Warsaw', 
    continent: 'Europe', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'austria', 
    displayName: 'Austria', 
    country: 'Austria', 
    city: 'Vienna', 
    countryCode: 'AT', 
    flag: '🇦🇹', 
    timezone: 'Europe/Vienna', 
    continent: 'Europe', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'belgium', 
    displayName: 'Belgium', 
    country: 'Belgium', 
    city: 'Brussels', 
    countryCode: 'BE', 
    flag: '🇧🇪', 
    timezone: 'Europe/Brussels', 
    continent: 'Europe', 
    popular: false, 
    accent: '#eab308' 
  },
  { 
    id: 'portugal', 
    displayName: 'Portugal', 
    country: 'Portugal', 
    city: 'Lisbon', 
    countryCode: 'PT', 
    flag: '🇵🇹', 
    timezone: 'Europe/Lisbon', 
    continent: 'Europe', 
    popular: false, 
    accent: '#10b981' 
  },
  { 
    id: 'greece', 
    displayName: 'Greece', 
    country: 'Greece', 
    city: 'Athens', 
    countryCode: 'GR', 
    flag: '🇬🇷', 
    timezone: 'Europe/Athens', 
    continent: 'Europe', 
    popular: false, 
    accent: '#0284c7' 
  },
  { 
    id: 'turkey', 
    displayName: 'Turkey', 
    country: 'Turkey', 
    city: 'Istanbul', 
    countryCode: 'TR', 
    flag: '🇹🇷', 
    timezone: 'Europe/Istanbul', 
    continent: 'Europe', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'russia', 
    displayName: 'Russia (Moscow)', 
    country: 'Russia', 
    city: 'Moscow', 
    countryCode: 'RU', 
    flag: '🇷🇺', 
    timezone: 'Europe/Moscow', 
    continent: 'Europe', 
    popular: false, 
    accent: '#ef4444' 
  },

  // Middle East
  { 
    id: 'uae', 
    displayName: 'United Arab Emirates', 
    country: 'United Arab Emirates', 
    city: 'Dubai', 
    countryCode: 'AE', 
    flag: '🇦🇪', 
    timezone: 'Asia/Dubai', 
    continent: 'Middle East', 
    popular: true, 
    accent: '#d97706' 
  },
  { 
    id: 'saudi-arabia', 
    displayName: 'Saudi Arabia', 
    country: 'Saudi Arabia', 
    city: 'Riyadh', 
    countryCode: 'SA', 
    flag: '🇸🇦', 
    timezone: 'Asia/Riyadh', 
    continent: 'Middle East', 
    popular: true, 
    accent: '#15803d' 
  },
  { 
    id: 'qatar', 
    displayName: 'Qatar', 
    country: 'Qatar', 
    city: 'Doha', 
    countryCode: 'QA', 
    flag: '🇶🇦', 
    timezone: 'Asia/Qatar', 
    continent: 'Middle East', 
    popular: true, 
    accent: '#881337' 
  },
  { 
    id: 'kuwait', 
    displayName: 'Kuwait', 
    country: 'Kuwait', 
    city: 'Kuwait City', 
    countryCode: 'KW', 
    flag: '🇰🇼', 
    timezone: 'Asia/Kuwait', 
    continent: 'Middle East', 
    popular: false, 
    accent: '#15803d' 
  },
  { 
    id: 'bahrain', 
    displayName: 'Bahrain', 
    country: 'Bahrain', 
    city: 'Manama', 
    countryCode: 'BH', 
    flag: '🇧🇭', 
    timezone: 'Asia/Bahrain', 
    continent: 'Middle East', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'oman', 
    displayName: 'Oman', 
    country: 'Oman', 
    city: 'Muscat', 
    countryCode: 'OM', 
    flag: '🇴🇲', 
    timezone: 'Asia/Muscat', 
    continent: 'Middle East', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'israel', 
    displayName: 'Israel', 
    country: 'Israel', 
    city: 'Tel Aviv', 
    countryCode: 'IL', 
    flag: '🇮🇱', 
    timezone: 'Asia/Jerusalem', 
    continent: 'Middle East', 
    popular: true, 
    accent: '#0284c7' 
  },

  // Asia & East Asia
  { 
    id: 'japan', 
    displayName: 'Japan', 
    country: 'Japan', 
    city: 'Tokyo', 
    countryCode: 'JP', 
    flag: '🇯🇵', 
    timezone: 'Asia/Tokyo', 
    continent: 'Asia', 
    popular: true, 
    accent: '#e11d48' 
  },
  { 
    id: 'singapore', 
    displayName: 'Singapore', 
    country: 'Singapore', 
    city: 'Singapore', 
    countryCode: 'SG', 
    flag: '🇸🇬', 
    timezone: 'Asia/Singapore', 
    continent: 'Asia', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'south-korea', 
    displayName: 'South Korea', 
    country: 'South Korea', 
    city: 'Seoul', 
    countryCode: 'KR', 
    flag: '🇰🇷', 
    timezone: 'Asia/Seoul', 
    continent: 'Asia', 
    popular: true, 
    accent: '#3b82f6' 
  },
  { 
    id: 'china', 
    displayName: 'China', 
    country: 'China', 
    city: 'Beijing / Shanghai', 
    countryCode: 'CN', 
    flag: '🇨🇳', 
    timezone: 'Asia/Shanghai', 
    continent: 'Asia', 
    popular: true, 
    accent: '#dc2626' 
  },
  { 
    id: 'hong-kong', 
    displayName: 'Hong Kong', 
    country: 'Hong Kong', 
    city: 'Hong Kong', 
    countryCode: 'HK', 
    flag: '🇭🇰', 
    timezone: 'Asia/Hong_Kong', 
    continent: 'Asia', 
    popular: true, 
    accent: '#f43f5e' 
  },
  { 
    id: 'taiwan', 
    displayName: 'Taiwan', 
    country: 'Taiwan', 
    city: 'Taipei', 
    countryCode: 'TW', 
    flag: '🇹🇼', 
    timezone: 'Asia/Taipei', 
    continent: 'Asia', 
    popular: true, 
    accent: '#3b82f6' 
  },
  { 
    id: 'thailand', 
    displayName: 'Thailand', 
    country: 'Thailand', 
    city: 'Bangkok', 
    countryCode: 'TH', 
    flag: '🇹🇭', 
    timezone: 'Asia/Bangkok', 
    continent: 'Asia', 
    popular: true, 
    accent: '#a855f7' 
  },
  { 
    id: 'malaysia', 
    displayName: 'Malaysia', 
    country: 'Malaysia', 
    city: 'Kuala Lumpur', 
    countryCode: 'MY', 
    flag: '🇲🇾', 
    timezone: 'Asia/Kuala_Lumpur', 
    continent: 'Asia', 
    popular: true, 
    accent: '#eab308' 
  },
  { 
    id: 'indonesia', 
    displayName: 'Indonesia', 
    country: 'Indonesia', 
    city: 'Jakarta', 
    countryCode: 'ID', 
    flag: '🇮🇩', 
    timezone: 'Asia/Jakarta', 
    continent: 'Asia', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'philippines', 
    displayName: 'Philippines', 
    country: 'Philippines', 
    city: 'Manila', 
    countryCode: 'PH', 
    flag: '🇵🇭', 
    timezone: 'Asia/Manila', 
    continent: 'Asia', 
    popular: true, 
    accent: '#0284c7' 
  },
  { 
    id: 'vietnam', 
    displayName: 'Vietnam', 
    country: 'Vietnam', 
    city: 'Hanoi / Ho Chi Minh', 
    countryCode: 'VN', 
    flag: '🇻🇳', 
    timezone: 'Asia/Ho_Chi_Minh', 
    continent: 'Asia', 
    popular: true, 
    accent: '#ef4444' 
  },
  { 
    id: 'pakistan', 
    displayName: 'Pakistan', 
    country: 'Pakistan', 
    city: 'Karachi / Islamabad', 
    countryCode: 'PK', 
    flag: '🇵🇰', 
    timezone: 'Asia/Karachi', 
    continent: 'Asia', 
    popular: false, 
    accent: '#15803d' 
  },
  { 
    id: 'bangladesh', 
    displayName: 'Bangladesh', 
    country: 'Bangladesh', 
    city: 'Dhaka', 
    countryCode: 'BD', 
    flag: '🇧🇩', 
    timezone: 'Asia/Dhaka', 
    continent: 'Asia', 
    popular: false, 
    accent: '#15803d' 
  },
  { 
    id: 'sri-lanka', 
    displayName: 'Sri Lanka', 
    country: 'Sri Lanka', 
    city: 'Colombo', 
    countryCode: 'LK', 
    flag: '🇱🇰', 
    timezone: 'Asia/Colombo', 
    continent: 'Asia', 
    popular: false, 
    accent: '#f59e0b' 
  },
  { 
    id: 'nepal', 
    displayName: 'Nepal', 
    country: 'Nepal', 
    city: 'Kathmandu', 
    countryCode: 'NP', 
    flag: '🇳🇵', 
    timezone: 'Asia/Kathmandu', 
    continent: 'Asia', 
    popular: false, 
    accent: '#ef4444' 
  },

  // Oceania & Australia
  { 
    id: 'australia-eastern', 
    displayName: 'Australia (Eastern)', 
    country: 'Australia', 
    region: 'Sydney, Melbourne, Brisbane', 
    city: 'Sydney', 
    countryCode: 'AU', 
    flag: '🇦🇺', 
    timezone: 'Australia/Sydney', 
    continent: 'Oceania', 
    popular: true, 
    accent: '#0284c7' 
  },
  { 
    id: 'australia-western', 
    displayName: 'Australia (Western)', 
    country: 'Australia', 
    region: 'Perth', 
    city: 'Perth', 
    countryCode: 'AU', 
    flag: '🇦🇺', 
    timezone: 'Australia/Perth', 
    continent: 'Oceania', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'new-zealand', 
    displayName: 'New Zealand', 
    country: 'New Zealand', 
    city: 'Auckland / Wellington', 
    countryCode: 'NZ', 
    flag: '🇳🇿', 
    timezone: 'Pacific/Auckland', 
    continent: 'Oceania', 
    popular: true, 
    accent: '#059669' 
  },
  { 
    id: 'fiji', 
    displayName: 'Fiji', 
    country: 'Fiji', 
    city: 'Suva', 
    countryCode: 'FJ', 
    flag: '🇫🇯', 
    timezone: 'Pacific/Fiji', 
    continent: 'Oceania', 
    popular: false, 
    accent: '#0284c7' 
  },

  // South America
  { 
    id: 'brazil', 
    displayName: 'Brazil', 
    country: 'Brazil', 
    city: 'São Paulo / Rio', 
    countryCode: 'BR', 
    flag: '🇧🇷', 
    timezone: 'America/Sao_Paulo', 
    continent: 'South America', 
    popular: true, 
    accent: '#16a34a' 
  },
  { 
    id: 'argentina', 
    displayName: 'Argentina', 
    country: 'Argentina', 
    city: 'Buenos Aires', 
    countryCode: 'AR', 
    flag: '🇦🇷', 
    timezone: 'America/Argentina/Buenos_Aires', 
    continent: 'South America', 
    popular: true, 
    accent: '#38bdf8' 
  },
  { 
    id: 'chile', 
    displayName: 'Chile', 
    country: 'Chile', 
    city: 'Santiago', 
    countryCode: 'CL', 
    flag: '🇨🇱', 
    timezone: 'America/Santiago', 
    continent: 'South America', 
    popular: false, 
    accent: '#ef4444' 
  },
  { 
    id: 'colombia', 
    displayName: 'Colombia', 
    country: 'Colombia', 
    city: 'Bogotá', 
    countryCode: 'CO', 
    flag: '🇨🇴', 
    timezone: 'America/Bogota', 
    continent: 'South America', 
    popular: false, 
    accent: '#eab308' 
  },

  // Africa
  { 
    id: 'egypt', 
    displayName: 'Egypt', 
    country: 'Egypt', 
    city: 'Cairo', 
    countryCode: 'EG', 
    flag: '🇪🇬', 
    timezone: 'Africa/Cairo', 
    continent: 'Africa', 
    popular: true, 
    accent: '#eab308' 
  },
  { 
    id: 'south-africa', 
    displayName: 'South Africa', 
    country: 'South Africa', 
    city: 'Johannesburg / Cape Town', 
    countryCode: 'ZA', 
    flag: '🇿🇦', 
    timezone: 'Africa/Johannesburg', 
    continent: 'Africa', 
    popular: true, 
    accent: '#f97316' 
  },
  { 
    id: 'nigeria', 
    displayName: 'Nigeria', 
    country: 'Nigeria', 
    city: 'Lagos', 
    countryCode: 'NG', 
    flag: '🇳🇬', 
    timezone: 'Africa/Lagos', 
    continent: 'Africa', 
    popular: true, 
    accent: '#16a34a' 
  },
  { 
    id: 'kenya', 
    displayName: 'Kenya', 
    country: 'Kenya', 
    city: 'Nairobi', 
    countryCode: 'KE', 
    flag: '🇰🇪', 
    timezone: 'Africa/Nairobi', 
    continent: 'Africa', 
    popular: true, 
    accent: '#10b981' 
  },
  { 
    id: 'morocco', 
    displayName: 'Morocco', 
    country: 'Morocco', 
    city: 'Casablanca', 
    countryCode: 'MA', 
    flag: '🇲🇦', 
    timezone: 'Africa/Casablanca', 
    continent: 'Africa', 
    popular: false, 
    accent: '#ef4444' 
  }
];

export const DEFAULT_USER_CITIES = [
  'india',            // India (IST Anchor)
  'usa-eastern',      // United States (Eastern)
  'usa-pacific',      // United States (Pacific)
  'uk',               // United Kingdom
  'uae',              // United Arab Emirates
  'singapore',        // Singapore
  'japan',            // Japan
  'germany',          // Germany
  'australia-eastern' // Australia (Eastern)
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
