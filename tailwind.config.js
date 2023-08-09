/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      colors: {
        'text-sec': '#878787',
        'bg-sec': 'linear-gradient(95.51deg, #D02129 0%, #750069 100%)',
        'prm-bg':'#161616',
        'sec-bg':'#212121'
      },
      fontFamily: {
        'sec':['var(--font-clash-display)','sans'],
        'prm':['var(--font-grotesque)','sans']
      },
      borderRadius: {
        'prm' : '3px'
      }
    },
  },
  plugins: [],
}
