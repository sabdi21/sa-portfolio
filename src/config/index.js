module.exports = {
  siteTitle: 'Shukri Abdi | Software Engineer',
  siteDescription: 'Shukri Abdi is a software developer based in Miami, Fl.',
  siteKeywords:
    'Shukri Abdi, Shukri, Abdi, software engineer, software developer, front-end developer, web developer, javascript, northwestern',
  siteUrl: 'https://shukriabdi.dev',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Shukri Abdi',
  location: 'Miami, FL',
  email: 'shukria4486@gmail.com',
  github: 'https://github.com/sabdi21',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/sabdi21',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shukri-abdi/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/anamgonzalez',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/anamgonzalezart/',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/an_amria',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@an_amria',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#CEECF2',
  navyColor: '#394D59',
  darkNavyColor: '#142F40',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
