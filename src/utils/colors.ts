export const colors = {
  primary: '#8D531E', // Characteristic Brand Brown
  destinationTag: '#946E46', // Figma: "OUR DESTINATION" text
  secondary: '#5A5550', 
  // Muted Brown/Gray
  tertiary: '#F7DFCA',
  accent: '#003171', // Deep Blue CTA
  /** Mobile navbar bar — #001128 @ 50% (Figma rgba(0, 17, 40, 0.5)) */
  navbarMobileBar: 'rgba(0, 17, 40, 0.5)',
  accentLight: '#E4EEFA', // Light Blue background
  background: '#FEF5E3', // Creamy Background
  surface: '#FFFFFF', // Pure White
  surfaceMuted: '#ECECEC', // Light card placeholder bg (Figma)
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
    light20: 'rgba(0,0,0,0.2)',
    accent: 'rgba(141,83,30,0.2)', // Form choice border
    gray30: 'rgba(153,153,153,0.3)',
    projectSoft: 'rgba(96,80,66,0.1)', // Figma card border
  },
  status: {
    new: '#EED194',
    sold: '#5A5550',
    available: '#8D531E',
  },
  surfaceVariant: '#03377C', // Social icon containers
  gradient: {
    brownBlue: 'linear-gradient(90deg, #E69142 0%, #0E57B7 100%)',
    vrindavanText:
      'radial-gradient(closest-side, rgba(192,181,171,1) 0%, rgba(141,133,125,1) 50%, rgba(116,109,103,1) 75%, rgba(90,85,80,1) 100%)',
  },
  rhythm: {
    bgLeft: '#E8E8E8',
    beganHere: '#FFB573'
  },
  realityCheck: {
    cardBg: '#2D2E24',
    cardText: '#FFFFFF',
    accentText: '#8D531E',
    emphasisBrown: '#946E46'
  },
  ecosystem: {
    bgEnd: '#F7DFCA', // Figma section gradient end
  },
  /** Dotted “verified standards” panel (Figma grey + grid) */
  construction: {
    panelBg: '#F4F4F4',
    dotGrid: '#E8E8E8',
    watermark: '#D9D9D9',
    /** Figma mobile step card large numeral (node 752:2644) */
    stepNumberGold: '#CE8D52',
    /** Desktop step tiles — slightly off-white on dotted panel */
    cardSurface: '#FAFAFA',
    /** Horizontal connector between step numerals */
    connector: '#DAC1AA',
    /** Figma dev: step tile 149×149, 1px #fff border, radial glass fill */
    desktopCardBorder: '#FFFFFF',
    desktopCardGradient:
      'radial-gradient(117.81% 117.81% at 100% 0%, rgba(255,255,255,0.98) 0%, rgba(245,245,245,0.92) 52%, rgba(255,255,255,0.88) 100%)',
  },
  rising: {
    cream: '#FDF7ED',
    navy: '#001737',
    /** Upper graphic panel (same base; image sits on top) */
    navyGraphic: '#001737',
    /** Lower stats band — Figma slightly darker “Rectangle 8” */
    navyStats: '#001226',
    statLine: 'rgba(255,255,255,0.12)',
    /** CTA on dark panel (mobile) — slightly lighter than navy */
    ctaOnDark: '#03377C',
  },
  about: {
    /** Figma mobile button panel behind “Hear from the founder” */
    founderPanel: '#EFAF74',
  },
} as const;
