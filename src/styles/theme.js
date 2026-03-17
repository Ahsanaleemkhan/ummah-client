export const lightTheme = {
    // Brand Colors
    primary: '#1B6B3A',
    primaryLight: '#2D9B5A',
    primaryDark: '#145230',
    secondary: '#0A4D2E',
    accent: '#E8F5E9',

    // Neutrals
    background: '#FFFFFF',
    backgroundAlt: '#F5F7F5',
    backgroundCard: '#FFFFFF',
    surface: '#F8FAF8',
    text: '#1A1A2E',
    textSecondary: '#5A5A7A',
    textMuted: '#8E8EA0',
    textOnPrimary: '#FFFFFF',

    // UI
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.08)',
    shadowMedium: 'rgba(0, 0, 0, 0.12)',
    overlay: 'rgba(0, 0, 0, 0.5)',

    // Status
    success: '#2D9B5A',
    warning: '#F5A623',
    error: '#E74C3C',
    info: '#3498DB',

    // Gradients
    heroGradient: 'linear-gradient(135deg, #F5F7F5 0%, #E8F5E9 50%, #F5F7F5 100%)',
    primaryGradient: 'linear-gradient(135deg, #1B6B3A 0%, #2D9B5A 100%)',
    cardGradient: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 100%)',
};

export const darkTheme = {
    primary: '#2D9B5A',
    primaryLight: '#3DBB6E',
    primaryDark: '#1B6B3A',
    secondary: '#1B6B3A',
    accent: '#1A2F1E',

    background: '#0D1117',
    backgroundAlt: '#161B22',
    backgroundCard: '#1C2333',
    surface: '#21262D',
    text: '#F0F6FC',
    textSecondary: '#B3B8C0',
    textMuted: '#7A8294',
    textOnPrimary: '#FFFFFF',

    border: '#30363D',
    borderLight: '#21262D',
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowMedium: 'rgba(0, 0, 0, 0.5)',
    overlay: 'rgba(0, 0, 0, 0.7)',

    success: '#3DBB6E',
    warning: '#F5A623',
    error: '#F85149',
    info: '#58A6FF',

    heroGradient: 'linear-gradient(135deg, #0D1117 0%, #1A2F1E 50%, #0D1117 100%)',
    primaryGradient: 'linear-gradient(135deg, #1B6B3A 0%, #2D9B5A 100%)',
    cardGradient: 'linear-gradient(180deg, rgba(13,17,23,0) 0%, rgba(13,17,23,0.95) 100%)',
};

export const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyHeading: "'Playfair Display', 'Georgia', serif",

    // Font sizes
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem',
    '5xl': '3.5rem',

    // Font weights
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,

    // Line heights
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,

    // Letter spacing
    letterSpacingTight: '-0.025em',
    letterSpacingNormal: '0',
    letterSpacingWide: '0.05em',
};

export const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
};

export const borderRadius = {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
};

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
};

export const transitions = {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    spring: '0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
};
