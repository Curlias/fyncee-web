import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme
        'dark-bg': '#0A0E27',
        'dark-surface': '#1C1F3A',
        'dark-surface-light': '#2A2D4A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B3C1',
        'text-tertiary': '#6B7280',
        
        // Light Theme
        'light-bg': '#F5F7FA',
        'light-surface': '#FFFFFF',
        'light-surface-light': '#F0F2F5',
        'text-dark-primary': '#1A1A1A',
        'text-dark-secondary': '#6B7280',
        'text-dark-tertiary': '#9CA3AF',
        
        // Accent Colors
        'primary-cyan': '#00D9FF',
        'primary-dark': '#0099CC',
        'income-green': '#00D68F',
        'expense-red': '#FF3B69',
        'warning': '#FFC107',
        'info': '#2196F3',
        
        // Category Colors
        'food': '#FFA726',
        'transport': '#42A5F5',
        'tech': '#66BB6A',
        'clothing': '#FFCA28',
        'health': '#EF5350',
        'travel': '#26C6DA',
        'entertainment': '#AB47BC',
        'general': '#78909C',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'SF Pro', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '0.3px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '0.3px', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', letterSpacing: '0.3px', fontWeight: '700' }],
        'h4': ['22px', { lineHeight: '1.4', letterSpacing: '0.3px', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '500' }],
        'small': ['14px', { lineHeight: '1.6', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '20px',
        'button': '16px',
        'small': '12px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
      },
    },
  },
  plugins: [],
};

export default config;
