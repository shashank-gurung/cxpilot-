/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        ai: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          violet: '#7c3aed',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(79, 70, 229, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'ai-glow': '0 8px 30px -4px rgba(99, 102, 241, 0.18), 0 0 15px -2px rgba(139, 92, 246, 0.12)',
        'pulse-glow': '0 0 20px rgba(99, 102, 241, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-wave': 'pulseWave 3s ease-in-out infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseWave: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)' },
          '100%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
