/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // gray-900
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // custom-forest-green
        
        /* Card Colors */
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        
        /* Popover Colors */
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', // custom-surface
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        /* Brand Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', // custom-forest-green
          foreground: 'var(--color-primary-foreground)' // white
        },
        
        /* Secondary Colors */
        secondary: {
          DEFAULT: 'var(--color-secondary)', // custom-secondary-green
          foreground: 'var(--color-secondary-foreground)' // white
        },
        
        /* Accent Colors */
        accent: {
          DEFAULT: 'var(--color-accent)', // custom-accent-green
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        /* State Colors */
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        success: {
          DEFAULT: 'var(--color-success)', // green-500
          foreground: 'var(--color-success-foreground)' // white
        },
        
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)' // white
        },
        
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'smooth': '200ms',
        'success': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}