/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,cjs}',
  ],
  theme: {
    extend: {
      cursor: {
        'circle': 'url("/images/cusrsor.png"), auto', 
      },
      scrollbar: {
        none: 'none',
      },
      screens: {
        'iphone-14-plus': '428px',   
        'macbook-air': '1280px',    
      },
      margin: {
        'iphone-left-right': '16px',  
        'macbook-left-right': '24px', 
      },
      fontSize: {
        'm-nav': ['40px', 'auto'],
        'm-footer': ['18px', 'auto'],
        'm-body': ['20px', 'auto'],
        'm-projects-name': ['22px', 'auto'],
        'm-projects-description': ['16px', 'auto'],
        'm-title': ['48px', 'auto'],
        'm-heading': ['28px', 'auto'],   
        'logo': ['24px', 'auto'],
        'd-nav': ['14px', 'auto'],
        'd-footer': ['12px', 'auto'],
        'd-body': ['16px', 'auto'],
        'd-heading': ['32px', 'auto'],
        'd-about-heading': ['48px', 'auto'],
        'd-subheading': ['20px', 'auto'],
        'd-skills': ['32px', 'auto'],         
        'd-cta': ['80px', 'auto'],
        'd-about-text': ['56px', 'auto'],
        'd-current-stack-subheading': ['26px', 'auto'],
      },
      fontFamily: {
        primary: ["Didact Gothic", 'sans-serif'],  
        logo: ["Do Hyeon", 'sans-serif'],
      },
      fontWeight: {
        light: 300,    
        regular: 400,  
        medium: 500,   
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic',
      },
      colors: {
        primary: '#FFFFFF',       //white
        secondary: '#131313',    // black
        accent: '#D1D0D4',       //grey
        cta: '#68D8D0',          //violet
        bg: '212121',       
      },
      animation: {
        'expand-circle': 'expand 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      keyframes: {
        expand: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(40)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

