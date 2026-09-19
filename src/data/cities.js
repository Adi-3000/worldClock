// Comprehensive Global Cities Database with IANA Timezones, Countries, Flags & Continents
export const CITIES_DATA = [
  // India (IST Anchor)
  { id: 'mumbai-in', city: 'Mumbai', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: true, isIST: true, accent: '#f97316' },
  { id: 'delhi-in', city: 'New Delhi', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: true, isIST: true, accent: '#f97316' },
  { id: 'bangalore-in', city: 'Bengaluru', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: true, isIST: true, accent: '#f97316' },
  { id: 'hyderabad-in', city: 'Hyderabad', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: true, isIST: true, accent: '#f97316' },
  { id: 'chennai-in', city: 'Chennai', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'kolkata-in', city: 'Kolkata', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'pune-in', city: 'Pune', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'ahmedabad-in', city: 'Ahmedabad', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'jaipur-in', city: 'Jaipur', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'chandigarh-in', city: 'Chandigarh', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },
  { id: 'kochi-in', city: 'Kochi', country: 'India', countryCode: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata', continent: 'Asia', popular: false, isIST: true, accent: '#f97316' },

  // North America - USA
  { id: 'new-york-us', city: 'New York', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/New_York', continent: 'North America', popular: true, accent: '#3b82f6' },
  { id: 'san-francisco-us', city: 'San Francisco', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Los_Angeles', continent: 'North America', popular: true, accent: '#6366f1' },
  { id: 'los-angeles-us', city: 'Los Angeles', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Los_Angeles', continent: 'North America', popular: true, accent: '#ec4899' },
  { id: 'chicago-us', city: 'Chicago', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Chicago', continent: 'North America', popular: true, accent: '#06b6d4' },
  { id: 'seattle-us', city: 'Seattle', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Los_Angeles', continent: 'North America', popular: true, accent: '#059669' },
  { id: 'austin-us', city: 'Austin', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Chicago', continent: 'North America', popular: true, accent: '#f59e0b' },
  { id: 'boston-us', city: 'Boston', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/New_York', continent: 'North America', popular: true, accent: '#ef4444' },
  { id: 'washington-us', city: 'Washington D.C.', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/New_York', continent: 'North America', popular: true, accent: '#3b82f6' },
  { id: 'miami-us', city: 'Miami', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/New_York', continent: 'North America', popular: true, accent: '#06b6d4' },
  { id: 'dallas-us', city: 'Dallas', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Chicago', continent: 'North America', popular: false, accent: '#f59e0b' },
  { id: 'houston-us', city: 'Houston', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Chicago', continent: 'North America', popular: false, accent: '#f59e0b' },
  { id: 'atlanta-us', city: 'Atlanta', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/New_York', continent: 'North America', popular: false, accent: '#ec4899' },
  { id: 'denver-us', city: 'Denver', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Denver', continent: 'North America', popular: false, accent: '#8b5cf6' },
  { id: 'phoenix-us', city: 'Phoenix', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Phoenix', continent: 'North America', popular: false, accent: '#d97706' },
  { id: 'las-vegas-us', city: 'Las Vegas', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Los_Angeles', continent: 'North America', popular: false, accent: '#eab308' },
  { id: 'honolulu-us', city: 'Honolulu', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'Pacific/Honolulu', continent: 'North America', popular: false, accent: '#06b6d4' },
  { id: 'anchorage-us', city: 'Anchorage', country: 'United States', countryCode: 'US', flag: '🇺🇸', timezone: 'America/Anchorage', continent: 'North America', popular: false, accent: '#64748b' },

  // North America - Canada & Mexico
  { id: 'toronto-ca', city: 'Toronto', country: 'Canada', countryCode: 'CA', flag: '🇨🇦', timezone: 'America/Toronto', continent: 'North America', popular: true, accent: '#ef4444' },
  { id: 'vancouver-ca', city: 'Vancouver', country: 'Canada', countryCode: 'CA', flag: '🇨🇦', timezone: 'America/Vancouver', continent: 'North America', popular: true, accent: '#10b981' },
  { id: 'montreal-ca', city: 'Montreal', country: 'Canada', countryCode: 'CA', flag: '🇨🇦', timezone: 'America/Montreal', continent: 'North America', popular: false, accent: '#3b82f6' },
  { id: 'calgary-ca', city: 'Calgary', country: 'Canada', countryCode: 'CA', flag: '🇨🇦', timezone: 'America/Edmonton', continent: 'North America', popular: false, accent: '#f59e0b' },
  { id: 'ottawa-ca', city: 'Ottawa', country: 'Canada', countryCode: 'CA', flag: '🇨🇦', timezone: 'America/Toronto', continent: 'North America', popular: false, accent: '#ef4444' },
  { id: 'mexico-city-mx', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', flag: '🇲🇽', timezone: 'America/Mexico_City', continent: 'North America', popular: true, accent: '#14b8a6' },
  { id: 'cancun-mx', city: 'Cancun', country: 'Mexico', countryCode: 'MX', flag: '🇲🇽', timezone: 'America/Cancun', continent: 'North America', popular: false, accent: '#06b6d4' },

  // Europe & UK
  { id: 'london-gb', city: 'London', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', timezone: 'Europe/London', continent: 'Europe', popular: true, accent: '#8b5cf6' },
  { id: 'manchester-gb', city: 'Manchester', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', timezone: 'Europe/London', continent: 'Europe', popular: false, accent: '#8b5cf6' },
  { id: 'edinburgh-gb', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', timezone: 'Europe/London', continent: 'Europe', popular: false, accent: '#8b5cf6' },
  { id: 'paris-fr', city: 'Paris', country: 'France', countryCode: 'FR', flag: '🇫🇷', timezone: 'Europe/Paris', continent: 'Europe', popular: true, accent: '#3b82f6' },
  { id: 'berlin-de', city: 'Berlin', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', timezone: 'Europe/Berlin', continent: 'Europe', popular: true, accent: '#eab308' },
  { id: 'frankfurt-de', city: 'Frankfurt', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', timezone: 'Europe/Berlin', continent: 'Europe', popular: true, accent: '#eab308' },
  { id: 'munich-de', city: 'Munich', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', timezone: 'Europe/Berlin', continent: 'Europe', popular: false, accent: '#eab308' },
  { id: 'amsterdam-nl', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', timezone: 'Europe/Amsterdam', continent: 'Europe', popular: true, accent: '#f97316' },
  { id: 'zurich-ch', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', flag: '🇨🇭', timezone: 'Europe/Zurich', continent: 'Europe', popular: true, accent: '#ef4444' },
  { id: 'geneva-ch', city: 'Geneva', country: 'Switzerland', countryCode: 'CH', flag: '🇨🇭', timezone: 'Europe/Zurich', continent: 'Europe', popular: false, accent: '#ef4444' },
  { id: 'dublin-ie', city: 'Dublin', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', timezone: 'Europe/Dublin', continent: 'Europe', popular: true, accent: '#10b981' },
  { id: 'rome-it', city: 'Rome', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', timezone: 'Europe/Rome', continent: 'Europe', popular: true, accent: '#10b981' },
  { id: 'milan-it', city: 'Milan', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', timezone: 'Europe/Rome', continent: 'Europe', popular: false, accent: '#10b981' },
  { id: 'madrid-es', city: 'Madrid', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', timezone: 'Europe/Madrid', continent: 'Europe', popular: true, accent: '#f59e0b' },
  { id: 'barcelona-es', city: 'Barcelona', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', timezone: 'Europe/Madrid', continent: 'Europe', popular: true, accent: '#f59e0b' },
  { id: 'lisbon-pt', city: 'Lisbon', country: 'Portugal', countryCode: 'PT', flag: '🇵🇹', timezone: 'Europe/Lisbon', continent: 'Europe', popular: false, accent: '#10b981' },
  { id: 'vienna-at', city: 'Vienna', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', timezone: 'Europe/Vienna', continent: 'Europe', popular: true, accent: '#ef4444' },
  { id: 'brussels-be', city: 'Brussels', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', timezone: 'Europe/Brussels', continent: 'Europe', popular: false, accent: '#eab308' },
  { id: 'stockholm-se', city: 'Stockholm', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', timezone: 'Europe/Stockholm', continent: 'Europe', popular: true, accent: '#0284c7' },
  { id: 'oslo-no', city: 'Oslo', country: 'Norway', countryCode: 'NO', flag: '🇳🇴', timezone: 'Europe/Oslo', continent: 'Europe', popular: false, accent: '#3b82f6' },
  { id: 'copenhagen-dk', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', timezone: 'Europe/Copenhagen', continent: 'Europe', popular: false, accent: '#ef4444' },
  { id: 'helsinki-fi', city: 'Helsinki', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', timezone: 'Europe/Helsinki', continent: 'Europe', popular: false, accent: '#3b82f6' },
  { id: 'warsaw-pl', city: 'Warsaw', country: 'Poland', countryCode: 'PL', flag: '🇵🇱', timezone: 'Europe/Warsaw', continent: 'Europe', popular: false, accent: '#ef4444' },
  { id: 'prague-cz', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', flag: '🇨🇿', timezone: 'Europe/Prague', continent: 'Europe', popular: false, accent: '#3b82f6' },
  { id: 'budapest-hu', city: 'Budapest', country: 'Hungary', countryCode: 'HU', flag: '🇭🇺', timezone: 'Europe/Budapest', continent: 'Europe', popular: false, accent: '#10b981' },
  { id: 'athens-gr', city: 'Athens', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', timezone: 'Europe/Athens', continent: 'Europe', popular: false, accent: '#0284c7' },
  { id: 'istanbul-tr', city: 'Istanbul', country: 'Turkey', countryCode: 'TR', flag: '🇹🇷', timezone: 'Europe/Istanbul', continent: 'Europe', popular: true, accent: '#ef4444' },
  { id: 'moscow-ru', city: 'Moscow', country: 'Russia', countryCode: 'RU', flag: '🇷🇺', timezone: 'Europe/Moscow', continent: 'Europe', popular: false, accent: '#ef4444' },

  // Middle East
  { id: 'dubai-ae', city: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', flag: '🇦🇪', timezone: 'Asia/Dubai', continent: 'Middle East', popular: true, accent: '#d97706' },
  { id: 'abu-dhabi-ae', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', flag: '🇦🇪', timezone: 'Asia/Dubai', continent: 'Middle East', popular: false, accent: '#d97706' },
  { id: 'riyadh-sa', city: 'Riyadh', country: 'Saudi Arabia', countryCode: 'SA', flag: '🇸🇦', timezone: 'Asia/Riyadh', continent: 'Middle East', popular: true, accent: '#15803d' },
  { id: 'doha-qa', city: 'Doha', country: 'Qatar', countryCode: 'QA', flag: '🇶🇦', timezone: 'Asia/Qatar', continent: 'Middle East', popular: true, accent: '#881337' },
  { id: 'kuwait-city-kw', city: 'Kuwait City', country: 'Kuwait', countryCode: 'KW', flag: '🇰🇼', timezone: 'Asia/Kuwait', continent: 'Middle East', popular: false, accent: '#15803d' },
  { id: 'manama-bh', city: 'Manama', country: 'Bahrain', countryCode: 'BH', flag: '🇧🇭', timezone: 'Asia/Bahrain', continent: 'Middle East', popular: false, accent: '#ef4444' },
  { id: 'muscat-om', city: 'Muscat', country: 'Oman', countryCode: 'OM', flag: '🇴🇲', timezone: 'Asia/Muscat', continent: 'Middle East', popular: false, accent: '#ef4444' },
  { id: 'tel-aviv-il', city: 'Tel Aviv', country: 'Israel', countryCode: 'IL', flag: '🇮🇱', timezone: 'Asia/Jerusalem', continent: 'Middle East', popular: true, accent: '#0284c7' },
  { id: 'jerusalem-il', city: 'Jerusalem', country: 'Israel', countryCode: 'IL', flag: '🇮🇱', timezone: 'Asia/Jerusalem', continent: 'Middle East', popular: false, accent: '#0284c7' },
  { id: 'amman-jo', city: 'Amman', country: 'Jordan', countryCode: 'JO', flag: '🇯🇴', timezone: 'Asia/Amman', continent: 'Middle East', popular: false, accent: '#ef4444' },
  { id: 'beirut-lb', city: 'Beirut', country: 'Lebanon', countryCode: 'LB', flag: '🇱🇧', timezone: 'Asia/Beirut', continent: 'Middle East', popular: false, accent: '#10b981' },

  // East & Southeast Asia
  { id: 'singapore-sg', city: 'Singapore', country: 'Singapore', countryCode: 'SG', flag: '🇸🇬', timezone: 'Asia/Singapore', continent: 'Asia', popular: true, accent: '#ef4444' },
  { id: 'tokyo-jp', city: 'Tokyo', country: 'Japan', countryCode: 'JP', flag: '🇯🇵', timezone: 'Asia/Tokyo', continent: 'Asia', popular: true, accent: '#e11d48' },
  { id: 'osaka-jp', city: 'Osaka', country: 'Japan', countryCode: 'JP', flag: '🇯🇵', timezone: 'Asia/Tokyo', continent: 'Asia', popular: false, accent: '#e11d48' },
  { id: 'hong-kong-hk', city: 'Hong Kong', country: 'Hong Kong', countryCode: 'HK', flag: '🇭🇰', timezone: 'Asia/Hong_Kong', continent: 'Asia', popular: true, accent: '#f43f5e' },
  { id: 'seoul-kr', city: 'Seoul', country: 'South Korea', countryCode: 'KR', flag: '🇰🇷', timezone: 'Asia/Seoul', continent: 'Asia', popular: true, accent: '#3b82f6' },
  { id: 'bangkok-th', city: 'Bangkok', country: 'Thailand', countryCode: 'TH', flag: '🇹🇭', timezone: 'Asia/Bangkok', continent: 'Asia', popular: true, accent: '#a855f7' },
  { id: 'kuala-lumpur-my', city: 'Kuala Lumpur', country: 'Malaysia', countryCode: 'MY', flag: '🇲🇾', timezone: 'Asia/Kuala_Lumpur', continent: 'Asia', popular: true, accent: '#eab308' },
  { id: 'jakarta-id', city: 'Jakarta', country: 'Indonesia', countryCode: 'ID', flag: '🇮🇩', timezone: 'Asia/Jakarta', continent: 'Asia', popular: true, accent: '#ef4444' },
  { id: 'bali-id', city: 'Bali', country: 'Indonesia', countryCode: 'ID', flag: '🇮🇩', timezone: 'Asia/Makassar', continent: 'Asia', popular: false, accent: '#f59e0b' },
  { id: 'manila-ph', city: 'Manila', country: 'Philippines', countryCode: 'PH', flag: '🇵🇭', timezone: 'Asia/Manila', continent: 'Asia', popular: true, accent: '#0284c7' },
  { id: 'hanoi-vn', city: 'Hanoi', country: 'Vietnam', countryCode: 'VN', flag: '🇻🇳', timezone: 'Asia/Ho_Chi_Minh', continent: 'Asia', popular: false, accent: '#ef4444' },
  { id: 'ho-chi-minh-vn', city: 'Ho Chi Minh City', country: 'Vietnam', countryCode: 'VN', flag: '🇻🇳', timezone: 'Asia/Ho_Chi_Minh', continent: 'Asia', popular: false, accent: '#ef4444' },
  { id: 'taipei-tw', city: 'Taipei', country: 'Taiwan', countryCode: 'TW', flag: '🇹🇼', timezone: 'Asia/Taipei', continent: 'Asia', popular: true, accent: '#3b82f6' },
  { id: 'shanghai-cn', city: 'Shanghai', country: 'China', countryCode: 'CN', flag: '🇨🇳', timezone: 'Asia/Shanghai', continent: 'Asia', popular: true, accent: '#dc2626' },
  { id: 'beijing-cn', city: 'Beijing', country: 'China', countryCode: 'CN', flag: '🇨🇳', timezone: 'Asia/Shanghai', continent: 'Asia', popular: true, accent: '#dc2626' },
  { id: 'shenzhen-cn', city: 'Shenzhen', country: 'China', countryCode: 'CN', flag: '🇨🇳', timezone: 'Asia/Shanghai', continent: 'Asia', popular: false, accent: '#dc2626' },
  { id: 'guangzhou-cn', city: 'Guangzhou', country: 'China', countryCode: 'CN', flag: '🇨🇳', timezone: 'Asia/Shanghai', continent: 'Asia', popular: false, accent: '#dc2626' },

  // South Asia
  { id: 'karachi-pk', city: 'Karachi', country: 'Pakistan', countryCode: 'PK', flag: '🇵🇰', timezone: 'Asia/Karachi', continent: 'Asia', popular: false, accent: '#15803d' },
  { id: 'lahore-pk', city: 'Lahore', country: 'Pakistan', countryCode: 'PK', flag: '🇵🇰', timezone: 'Asia/Karachi', continent: 'Asia', popular: false, accent: '#15803d' },
  { id: 'dhaka-bd', city: 'Dhaka', country: 'Bangladesh', countryCode: 'BD', flag: '🇧🇩', timezone: 'Asia/Dhaka', continent: 'Asia', popular: false, accent: '#15803d' },
  { id: 'colombo-lk', city: 'Colombo', country: 'Sri Lanka', countryCode: 'LK', flag: '🇱🇰', timezone: 'Asia/Colombo', continent: 'Asia', popular: false, accent: '#f59e0b' },
  { id: 'kathmandu-np', city: 'Kathmandu', country: 'Nepal', countryCode: 'NP', flag: '🇳🇵', timezone: 'Asia/Kathmandu', continent: 'Asia', popular: false, accent: '#ef4444' },

  // Oceania & Australia
  { id: 'sydney-au', city: 'Sydney', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', timezone: 'Australia/Sydney', continent: 'Oceania', popular: true, accent: '#0284c7' },
  { id: 'melbourne-au', city: 'Melbourne', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', timezone: 'Australia/Melbourne', continent: 'Oceania', popular: true, accent: '#6366f1' },
  { id: 'brisbane-au', city: 'Brisbane', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', timezone: 'Australia/Brisbane', continent: 'Oceania', popular: false, accent: '#f59e0b' },
  { id: 'perth-au', city: 'Perth', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', timezone: 'Australia/Perth', continent: 'Oceania', popular: false, accent: '#ef4444' },
  { id: 'adelaide-au', city: 'Adelaide', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', timezone: 'Australia/Adelaide', continent: 'Oceania', popular: false, accent: '#10b981' },
  { id: 'auckland-nz', city: 'Auckland', country: 'New Zealand', countryCode: 'NZ', flag: '🇳🇿', timezone: 'Pacific/Auckland', continent: 'Oceania', popular: true, accent: '#059669' },
  { id: 'wellington-nz', city: 'Wellington', country: 'New Zealand', countryCode: 'NZ', flag: '🇳🇿', timezone: 'Pacific/Auckland', continent: 'Oceania', popular: false, accent: '#059669' },
  { id: 'suva-fj', city: 'Suva', country: 'Fiji', countryCode: 'FJ', flag: '🇫🇯', timezone: 'Pacific/Fiji', continent: 'Oceania', popular: false, accent: '#0284c7' },

  // South America
  { id: 'sao-paulo-br', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', flag: '🇧🇷', timezone: 'America/Sao_Paulo', continent: 'South America', popular: true, accent: '#16a34a' },
  { id: 'rio-de-janeiro-br', city: 'Rio de Janeiro', country: 'Brazil', countryCode: 'BR', flag: '🇧🇷', timezone: 'America/Sao_Paulo', continent: 'South America', popular: true, accent: '#16a34a' },
  { id: 'buenos-aires-ar', city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', timezone: 'America/Argentina/Buenos_Aires', continent: 'South America', popular: true, accent: '#38bdf8' },
  { id: 'santiago-cl', city: 'Santiago', country: 'Chile', countryCode: 'CL', flag: '🇨🇱', timezone: 'America/Santiago', continent: 'South America', popular: false, accent: '#ef4444' },
  { id: 'bogota-co', city: 'Bogotá', country: 'Colombia', countryCode: 'CO', flag: '🇨🇴', timezone: 'America/Bogota', continent: 'South America', popular: false, accent: '#eab308' },
  { id: 'lima-pe', city: 'Lima', country: 'Peru', countryCode: 'PE', flag: '🇵🇪', timezone: 'America/Lima', continent: 'South America', popular: false, accent: '#ef4444' },

  // Africa
  { id: 'cairo-eg', city: 'Cairo', country: 'Egypt', countryCode: 'EG', flag: '🇪🇬', timezone: 'Africa/Cairo', continent: 'Africa', popular: true, accent: '#eab308' },
  { id: 'johannesburg-za', city: 'Johannesburg', country: 'South Africa', countryCode: 'ZA', flag: '🇿🇦', timezone: 'Africa/Johannesburg', continent: 'Africa', popular: true, accent: '#f97316' },
  { id: 'cape-town-za', city: 'Cape Town', country: 'South Africa', countryCode: 'ZA', flag: '🇿🇦', timezone: 'Africa/Johannesburg', continent: 'Africa', popular: true, accent: '#0284c7' },
  { id: 'nairobi-ke', city: 'Nairobi', country: 'Kenya', countryCode: 'KE', flag: '🇰🇪', timezone: 'Africa/Nairobi', continent: 'Africa', popular: true, accent: '#10b981' },
  { id: 'lagos-ng', city: 'Lagos', country: 'Nigeria', countryCode: 'NG', flag: '🇳🇬', timezone: 'Africa/Lagos', continent: 'Africa', popular: true, accent: '#16a34a' },
  { id: 'casablanca-ma', city: 'Casablanca', country: 'Morocco', countryCode: 'MA', flag: '🇲🇦', timezone: 'Africa/Casablanca', continent: 'Africa', popular: false, accent: '#ef4444' },
  { id: 'addis-ababa-et', city: 'Addis Ababa', country: 'Ethiopia', countryCode: 'ET', flag: '🇪🇹', timezone: 'Africa/Addis_Ababa', continent: 'Africa', popular: false, accent: '#eab308' },
  { id: 'accra-gh', city: 'Accra', country: 'Ghana', countryCode: 'GH', flag: '🇬🇭', timezone: 'Africa/Accra', continent: 'Africa', popular: false, accent: '#f59e0b' }
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
