/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // Dark & Elegant Color System
      colors: {
        background: {
          primary: '#0A0A0F',
          secondary: '#13131A',
          tertiary: '#1A1A24',
          card: '#1E1E2E',
          hover: '#252538',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          emerald: '#10B981',
          cyan: '#06B6D4',
          pink: '#EC4899',
          blue: '#60A5FA',
          purple: '#A78BFA',
          gold: '#D4AF37',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B4B4C8',
          muted: '#6B6B80',
          accent: '#3B82F6',
        },
        border: {
          DEFAULT: '#2A2A3A',
          light: '#3A3A4A',
          accent: '#3B82F6',
        },
      },
      
      // Typography
      fontFamily: {
        heading: ["Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      
      // Spacing (8px base)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Box Shadows
      boxShadow: {
        'card': '0 8px 32px rgba(10, 10, 15, 0.6)',
        'card-hover': '0 12px 48px rgba(10, 10, 15, 0.8)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.1)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
      },
      
      // Animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInDown': 'fadeInDown 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      
      // Breakpoints
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Background Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E4A9 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #60A5FA 0%, #10B981 100%)',
      },
    },
  },
  plugins: [],
};