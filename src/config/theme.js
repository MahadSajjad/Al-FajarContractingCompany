
export const colors = {
  // Primary dark — heroes, footer, dark sections.
  'steel-navy': {
    DEFAULT: '#0E1C2B',
    50: '#f2f5f7',
    100: '#e0e6ec',
    200: '#c2cdd8',
    300: '#9aabbb',
    400: '#6c8197',
    500: '#4c6178',
    600: '#3a4d61',
    700: '#2c3c4d',
    800: '#1c2c3d',
    900: '#0E1C2B', // brand
    950: '#070f18',
  },
  // Brand primary — headings, links, key UI.
  'blueprint-blue': {
    DEFAULT: '#1E4E79',
    50: '#eef4fa',
    100: '#d7e5f2',
    200: '#b3cce4',
    300: '#82aad2',
    400: '#4e82ba',
    500: '#2c619a',
    600: '#1E4E79', // brand
    700: '#1a4267',
    800: '#173655',
    900: '#162e47',
    950: '#0d1d2f',
  },
  // Accent — CTAs, active states, key data ONLY (functional, not decorative).
  'safety-orange': {
    DEFAULT: '#EE6C12',
    50: '#fdf2e8',
    100: '#fbddc5',
    200: '#f7bc8e',
    300: '#f29a57',
    400: '#f07e30',
    500: '#EE6C12', // brand
    600: '#d65b0c',
    700: '#b1480d',
    800: '#8d3a11',
    900: '#723111',
    950: '#3e1806',
  },
  // Light surface / section backgrounds.
  concrete: {
    DEFAULT: '#F4F6F8',
    100: '#fafbfc',
    200: '#e9edf1',
    300: '#dbe1e7',
    400: '#c5ced7',
  },
  // NOTE: body text uses Tailwind's built-in `slate` scale (slate-600 === #475569,
  // the brief's slate token), so it is intentionally NOT overridden here.
};

/* ------------------------------------------------------------------ *
 * 2. Typography tokens
 * ------------------------------------------------------------------ */
export const fontFamily = {
  // Display — strong engineered grotesque echoing the bold logo wordmark.
  display: ['Saira', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  // Body — clean and legible.
  body: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  // Utility/data — "spec-sheet" device for stats, eyebrows, labels.
  mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
};

// Fluid display scale (clamp) for the hero/section headings.
export const fontSize = {
  'display-2xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
  'display-xl': ['clamp(2.25rem, 4.6vw, 3.75rem)', { lineHeight: '1.04', letterSpacing: '-0.015em' }],
  'display-lg': ['clamp(1.875rem, 3.4vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
  'display-md': ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
  // Tracked uppercase mono eyebrow.
  eyebrow: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.18em' }],
};

/* ------------------------------------------------------------------ *
 * 3. Radii, shadows, misc
 * ------------------------------------------------------------------ */
export const borderRadius = {
  none: '0',
  sm: '2px',
  DEFAULT: '4px', // squared/industrial default
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px', // kept for avatars/dots only
};

export const boxShadow = {
  card: '0 1px 2px rgba(14,28,43,0.05), 0 6px 18px rgba(14,28,43,0.06)',
  'card-hover': '0 6px 14px rgba(14,28,43,0.08), 0 18px 40px rgba(14,28,43,0.14)',
  'inset-line': 'inset 0 -1px 0 rgba(14,28,43,0.08)',
  focus: '0 0 0 3px rgba(30,78,121,0.35)',
};

/* ------------------------------------------------------------------ *
 * 4. Tailwind bridge — spread into tailwind.config.js theme.extend
 * ------------------------------------------------------------------ */
export const tailwindTheme = {
  colors,
  fontFamily: {
    ...fontFamily,
    // make IBM Plex Sans the default `font-sans`
    sans: fontFamily.body,
  },
  fontSize,
  borderRadius,
  boxShadow,
  letterSpacing: {
    eyebrow: '0.18em',
    wide: '0.05em',
  },
  maxWidth: {
    container: '80rem', // 1280px content container
  },
};

/* ------------------------------------------------------------------ *
 * 5. antd bridge — consumed by <ConfigProvider theme={antdTheme}>
 * ------------------------------------------------------------------ */
export const antdTheme = {
  token: {
    colorPrimary: colors['blueprint-blue'].DEFAULT,
    colorInfo: colors['blueprint-blue'].DEFAULT,
    colorLink: colors['blueprint-blue'].DEFAULT,
    colorLinkHover: colors['blueprint-blue'][500],
    colorTextBase: colors['steel-navy'].DEFAULT,
    colorText: colors['steel-navy'][800],
    colorBgBase: '#FFFFFF',
    colorError: '#dc2626',
    colorSuccess: '#16a34a',
    colorWarning: colors['safety-orange'].DEFAULT,
    borderRadius: 4,
    fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif",
    fontSize: 16,
    controlHeight: 44,
  },
  components: {
    Button: { controlHeight: 48, fontWeight: 600, borderRadius: 4, primaryShadow: 'none' },
    Input: { controlHeight: 48, borderRadius: 4, paddingBlock: 10 },
    InputNumber: { controlHeight: 48, borderRadius: 4 },
    Select: { controlHeight: 48, borderRadius: 4 },
    DatePicker: { controlHeight: 48, borderRadius: 4 },
    Drawer: { paddingLG: 24 },
    Carousel: { dotWidth: 20, dotActiveWidth: 28 },
    Message: { borderRadius: 4 },
  },
};

export default { colors, fontFamily, fontSize, borderRadius, boxShadow, tailwindTheme, antdTheme };
