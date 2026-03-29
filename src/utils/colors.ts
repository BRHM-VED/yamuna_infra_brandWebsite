export const colors = {
  primary: '#8D531E', // Characteristic Brand Brown
  secondary: '#5A5550', // Muted Brown/Gray
  accent: '#003171', // Deep Blue CTA
  accentLight: '#E4EEFA', // Light Blue background
  background: '#FEF5E3', // Creamy Background
  surface: '#FFFFFF', // Pure White
  text: {
    primary: '#1B1B1B', // Dark Text
    secondary: '#5A5550', // Muted Text
    tertiary: '#6A6A6A', // Light Muted Text
    onAccent: '#FFFFFF',
    onPrimary: '#FFFFFF',
    brand: '#8D531E',
    link: '#67A8FF', // Footer link blue
  },
  border: {
    primary: '#DAC1AA',
    secondary: '#E9DABA',
    light: 'rgba(0,0,0,0.1)',
    accent: 'rgba(141,83,30,0.2)', // Form choice border
  },
  status: {
    new: '#EED194',
    sold: '#5A5550',
    available: '#8D531E',
  },
  surfaceVariant: '#03377C', // Social icon containers
  gradient: {
    brownBlue: 'linear-gradient(90deg, #E69142 0%, #0E57B7 100%)',
  },
  rhythm: {
    bgLeft: '#E8E8E8',
    beganHere: '#FFB573'
  },
  realityCheck: {
    cardBg: '#1A1814',
    cardText: '#FFFFFF',
    accentText: '#8D531E',
    emphasisBrown: '#946E46'
  }
} as const;
