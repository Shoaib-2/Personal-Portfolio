// Typography System
export const typography = {
  // Font families
  fonts: {
    heading: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },
  
  // Font sizes with responsive scaling
  sizes: {
    // Headings
    h1: {
      desktop: '4.5rem',    // 72px
      tablet: '3.5rem',     // 56px
      mobile: '2.5rem',     // 40px
    },
    h2: {
      desktop: '3.5rem',    // 56px
      tablet: '2.75rem',    // 44px
      mobile: '2rem',       // 32px
    },
    h3: {
      desktop: '2.5rem',    // 40px
      tablet: '2rem',       // 32px
      mobile: '1.75rem',    // 28px
    },
    h4: {
      desktop: '2rem',      // 32px
      tablet: '1.75rem',    // 28px
      mobile: '1.5rem',     // 24px
    },
    h5: {
      desktop: '1.5rem',    // 24px
      tablet: '1.25rem',    // 20px
      mobile: '1.125rem',   // 18px
    },
    
    // Body text
    xl: '1.25rem',          // 20px
    lg: '1.125rem',         // 18px
    base: '1rem',           // 16px
    sm: '0.875rem',         // 14px
    xs: '0.75rem',          // 12px
  },
  
  // Font weights
  weights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export default typography;
