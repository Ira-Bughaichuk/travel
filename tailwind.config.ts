import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '320px',
       'xs':'480px',
      'tablet': '768px',
      'maxMobile': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'laptop': {'min': '768px', 'max': '1440px'},
      // => @media (min-width: 768px and max-width: 1440px) { ... }
      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      s: '16px',
      base: '18px',
      slS: "20px",
      slM:"22px",
      slL:"28px",
      m:'32px',
      l:'40px',
      L:'43px',
      xl:'67px',
      xxl:'98px',
    },
    extend: {
      fontFamily: {
        Inter: "Inter",
        Karantina:"Karantina",
      },
      colors: {
        primary: '#FFF',
        secondary: 'rgba(255, 255, 255, 0.20)',
        bgNav: 'rgba(1, 10, 5, 0.75)',
        bgBtn: 'rgba(255, 255, 255, 0.10)',
      },
      backgroundImage: {
        Hero: "url('/assets/images/hero.jpg')",
        About: "url('/assets/images/about-desc.jpg')",
        Services: "url('/assets/images/services-desc01.jpg')",
        Services02: "url('/assets/images/services-desc02.jpg')",
        Career: "url('/assets/images/career-desc.jpg')",
        Gallery: "url('/assets/images/gallery-desc.jpg')",
        Contacts: "url('/assets/images/contacts-desc.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
