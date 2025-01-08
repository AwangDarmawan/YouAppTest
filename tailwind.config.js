/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/app/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors : {
        "putih" : "#FFFFFF",
        "pinkw"  :"#F0BCE3",
        'darkgold': '#B8860B',
        'goldenyellow': '#FDB813',
        'gold': '#FDB813',
        
        
    },
    backgroundImage: {
      'bluewarna': 'linear-gradient(to right, #62CDCB, #4599DB)', 
      
    },
    spacing: {
      359: '359px',
      190: '190px',
      99 : '99px',
      50 : '50%'
    },
    borderRadius: {
      'custom-tl': '16px 0 0 0',
    },
    
    
  },
},
  plugins: [],
}
