/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-100' : '#F2F2F2',
        'gray-200' : '#D9D9D9',
        'gray-300' : '#808080',
        'gray-400' : '#333333',      
        'gray-500' : '#262626',
        'gray-600' : '#1A1A1A',         
        'gray-700' : '#0D0D0D',        
        'blue-400' : '#4EA8DE',
        'blue-600' : '#1E6F9F',
        'purple-200' : '#8284FA',
        'purple-600' : '#5E60CE',
        'danger-400' : '#E25858',        
      },
    },
  },
  plugins: [],
}
