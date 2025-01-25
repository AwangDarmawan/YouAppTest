/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,html}',
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
        customGold: '#94783E',
        customBeige: '#F3EDA6',
        customLightBeige: '#F8FAE5',
        customPeach: '#FFE2BE',
        customBrown: '#D5BE88',
       
        
    },
    backgroundImage: {
      'bluewarna': 'linear-gradient(to right, #62CDCB, #4599DB)', 
      'custom-gradient': 'linear-gradient(to right, #94783E, #F3EDA6, #F8FAE5, #FFE2BE, #D5BE88, #F8FAE5, #D5BE88)',
      
      
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
