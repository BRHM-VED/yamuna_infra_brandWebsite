export const fonts = {
  heading: "'Bitter', serif",
  body: "'Instrument Sans', sans-serif",
  serif: "'Instrument Serif', serif",
  accent: "'Caveat', cursive",
  mono: "'Inter', sans-serif",
} as const;

export type TypoSize = {
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
  fontWeight: number | string;
  textTransform?: 'uppercase';
};

export type ResponsiveTypo = {
  desktop: TypoSize;
  mobile: TypoSize;
};

/** Pick desktop or mobile size token from a responsive text style. */
export const pickTextStyle = (token: ResponsiveTypo, mobile: boolean): TypoSize =>
  mobile ? token.mobile : token.desktop;

const responsive = (
  desktop: TypoSize,
  mobile: TypoSize,
): ResponsiveTypo => ({ desktop, mobile });

export const textStyles = {
  h1: {
    fontFamily: fonts.heading,
    fontSize: '64px',
    lineHeight: '1.2',
    fontWeight: '800',
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
  },

  /** Uppercase section label — Figma 3323 / 3329 */
  sectionTag: responsive(
    {
      fontSize: '15px',
      letterSpacing: '3px',
      lineHeight: 'normal',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    {
      fontSize: '12px',
      letterSpacing: '2.4px',
      lineHeight: 'normal',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  ),
  sectionTitle: responsive(
    { fontSize: '48px', lineHeight: 'normal', fontWeight: 500 },
    { fontSize: '28px', lineHeight: 'normal', fontWeight: 500 },
  ),
  sectionDescription: responsive(
    {
      fontSize: '18px',
      letterSpacing: '-0.09px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    {
      fontSize: '14px',
      letterSpacing: '-0.07px',
      lineHeight: '19.6px',
      fontWeight: 400,
    },
  ),
  thesisTag: responsive(
    {
      fontSize: '15px',
      letterSpacing: '3px',
      lineHeight: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    {
      fontSize: '13px',
      letterSpacing: '2.6px',
      lineHeight: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  ),
  thesisTitle: responsive(
    { fontSize: '40px', lineHeight: '52px', fontWeight: 500 },
    { fontSize: '28px', lineHeight: '1.3', fontWeight: 500 },
  ),
  thesisDescription: responsive(
    { fontSize: '18px', lineHeight: '1.4', fontWeight: 500 },
    { fontSize: '14px', lineHeight: '1.4', fontWeight: 500 },
  ),
  laurelValue: responsive(
    {
      fontSize: '40px',
      letterSpacing: '-0.2px',
      lineHeight: '1',
      fontWeight: 700,
    },
    {
      fontSize: '26.016px',
      letterSpacing: '-0.1301px',
      lineHeight: '1',
      fontWeight: 700,
    },
  ),
  laurelLabel: responsive(
    {
      fontSize: '20px',
      letterSpacing: '-0.1px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    {
      fontSize: '13.008px',
      letterSpacing: '-0.065px',
      lineHeight: '15.609px',
      fontWeight: 400,
    },
  ),
  govStampRing: responsive(
    { fontSize: '8.5px', letterSpacing: '1.1px', fontWeight: 600 },
    { fontSize: '7px', letterSpacing: '0.55px', fontWeight: 600 },
  ),
  knowMore: responsive(
    { fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
    { fontSize: '14px', lineHeight: '15.609px', fontWeight: 500 },
  ),
  infraWordmark: responsive(
    { fontSize: '12.048px', letterSpacing: '6.6262px', fontWeight: 500 },
    { fontSize: '7.836px', letterSpacing: '4.3096px', fontWeight: 500 },
  ),
  statValueBold: responsive(
    { fontSize: '32px', lineHeight: 'normal', fontWeight: 700 },
    { fontSize: '28px', lineHeight: 'normal', fontWeight: 700 },
  ),
  statValueRegular: responsive(
    { fontSize: '32px', lineHeight: 'normal', fontWeight: 400 },
    { fontSize: '28px', lineHeight: 'normal', fontWeight: 400 },
  ),
  statCardTitle: responsive(
    { fontSize: '20px', lineHeight: 'normal', fontWeight: 500 },
    { fontSize: '20px', lineHeight: 'normal', fontWeight: 500 },
  ),
  statCardDescription: responsive(
    { fontSize: '16px', lineHeight: '22.4px', fontWeight: 400 },
    { fontSize: '14px', lineHeight: '19.6px', fontWeight: 400 },
  ),
  /** Location / resort subsection title */
  locationResortTitle: responsive(
    { fontSize: '32px', lineHeight: 'normal', fontWeight: 500 },
    { fontSize: '28px', lineHeight: 'normal', fontWeight: 500 },
  ),
  locationResortSubtitle: responsive(
    { fontSize: '18px', lineHeight: '1.2', letterSpacing: '-0.36px', fontWeight: 400 },
    { fontSize: '14px', lineHeight: '1.2', letterSpacing: '-0.28px', fontWeight: 400 },
  ),
  hubCardTime: responsive(
    { fontSize: '20px', letterSpacing: '-0.4px', lineHeight: '1.22', fontWeight: 600 },
    { fontSize: '18px', letterSpacing: '-0.36px', lineHeight: '1.22', fontWeight: 600 },
  ),
  hubCardLabel: responsive(
    { fontSize: '17px', letterSpacing: '-0.34px', lineHeight: '1.2', fontWeight: 400 },
    { fontSize: '13px', letterSpacing: '-0.26px', lineHeight: '1.2', fontWeight: 400 },
  ),
} as const;
