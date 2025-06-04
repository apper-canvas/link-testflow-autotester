/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#60A5FA',
          light: '#93C5FD',
          dark: '#3B82F6',
          neon: '#00D4FF'
        },
        secondary: {
          DEFAULT: '#06FFA5',
          light: '#4FFFB0',
          dark: '#00FF87',
          electric: '#00FF41'
        },
        accent: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          dark: '#8B5CF6',
          neon: '#FF00FF'
        },
        ai: {
          blue: '#60A5FA',
          purple: '#A78BFA',
          cyan: '#22D3EE',
          teal: '#2DD4BF',
          indigo: '#818CF8',
          violet: '#A78BFA',
          pink: '#F472B6',
          neural: '#00D4FF'
        },
        surface: {
          50: '#0F0F23',
          100: '#1A1A2E',
          200: '#16213E',
          300: '#0F3460',
          400: '#533A7B',
          500: '#6B46C1',
          600: '#7C3AED',
          700: '#8B5CF6',
          800: '#A78BFA',
          900: '#C4B5FD'
        },
        dark: {
          primary: '#0B0F1A',
          secondary: '#0F172A',
          accent: '#1E293B',
          surface: '#111827',
          border: '#374151'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        'xs': '16px',
        'sm': '18px',
        'base': '18px',
        'lg': '23px',
        'xl': '28px',
        '2xl': '35px',
        '3xl': '44px',
        '4xl': '55px',
        '5xl': '69px'
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(96, 165, 250, 0.4)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      backdropBlur: {
        'xs': '2px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}