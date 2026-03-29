export const fonts = {
  heading: "'Bitter', serif",
  body: "'Instrument Sans', sans-serif",
  accent: "'Caveat', cursive",
  mono: "'Inter', sans-serif",
} as const;

export const textStyles = {
  h1: {
    fontFamily: fonts.heading,
    fontSize: '64px', // Desktop hero
    lineHeight: '1.2',
    fontWeight: '800', // ExtraBold
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: '32px',
    lineHeight: '1.2',
    fontWeight: '700',
  },
  h3: {
    fontFamily: fonts.body,
    fontSize: '24px',
    lineHeight: '1.4',
    fontWeight: '600',
  },
  bodyLarge: {
    fontFamily: fonts.body,
    fontSize: '18px',
    lineHeight: '1.4',
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: fonts.body,
    fontSize: '14px',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  button: {
    fontFamily: fonts.body,
    fontSize: '14px',
    lineHeight: '1',
    fontWeight: '500',
  },
  tagline: {
    fontFamily: fonts.body,
    fontSize: '12px',
    letterSpacing: '4.44px',
    textTransform: 'uppercase' as const,
  }
} as const;
