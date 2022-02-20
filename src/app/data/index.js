const HeroData = {
  title: `Hey, i'm Christian!`,
  paragraph: 'I develop web apps',
}

const MetaData = {
  site_title: 'Christian B. Martinez',
  site_description: "Hey, i'm Christian. I am a web developer from Utah.",
  portfolio_title: 'Portfolio',
  portfolio_p:
    'Browse through my recently completed projects. View code or live site for each project.',
  about_title: 'About',
  about_p:
    'I began coding in 2015 with Html, Css, and Javascript. Fast forward to today, i am able to deploy full stack applications. I am currently attending SLCC for my AAS in Computer Science.',
  contact_title: 'Contact',
  contact_p: 'Send me a message and i will respond as soon as possible.',
}

const Skills = [
  'HTML',
  'CSS',
  'JS',
  'NPM',
  'GIT',
  'NODE',
  'EXPRESS',
  'MONGODB',
  'REACT',
  'CMD',
  'ADOBE SUITE',
  'EJS',
  'TAILWIND',
  'APIs',
  'BOOTSTRAP',
  'SHOPIFY',
]

const Services = [
  {
    title: 'Web Development',
    description:
      'I can build, modify, and maintain a modern website for you. While it offers me even more experience, i offer premium work with a money back guarantee!',
  },
  {
    title: 'Custom Apps',
    description:
      'Need an application specific solution? No problem. I can develop a custom application to intregrate with your current one, such as fetching data from an external api to your UI.',
  },
  {
    title: 'E-Commerce',
    description:
      'With years of experience using the platform and even becoming certified, i am able to develop custom upgrades for your shopify store.',
  },
]

const PortfolioData = [
  {
    title: 'Colorfill App',
    img: '/assets/img/projects/colorfillapp.jpeg',
    date: '2/9/2021',
    tech: 'HTML, CSS VARS, JS',
    short_description: 'A desktop tool for real time text fill animations.',
    long_description:
      "With my colorfill project, i wanted to visualize how text fill animations were moving in real time. One thing i love doing when it comes to developing new elements is playing around with the animation duration, colors, and X and Y axis. The problem with that, as you might know, is it's kind of a pain using dev tools or saving after each change to preview the animation. This problem became my colorfill project- A desktop app that allows you to visualize your text fill animation in real time.",
    features:
      'Code generation, copy to clipboard, multiple tags, value reset, any cursor, color picker, custom scrollbar, custom range slider, real time rendering',
    github_link: 'https://github.com/christianbmartinez/colorfill',
    live_link: null,
    npm_link: null,
    codepen_link: 'https://codepen.io/_coderchris/pen/KKgyywR',
  },
  {
    title: 'ColorfillJs',
    img: '/assets/img/projects/colorfilljs.jpeg',
    date: '2/9/2021',
    tech: 'NPM, NPM LINK, NPM PUBLISH, JS',
    short_description: 'A text fill animation library made with javascript.',
    long_description:
      'Colorfilljs is a lightweight text fill animation tool using the power of javascript. It automatically generates your css on whatever pages you wish to include it. Use colorfill on links, titles, or randomly throughout your web app to make your text stand out. ',
    features: 'Css in js, modularity for vanilla js applications',
    github_link: 'https://github.com/christianbmartinez/colorfilljs',
    live_link: null,
    npm_link: 'https://www.npmjs.com/package/colorfilljs',
    codepen_link: null,
  },
  {
    title: 'Mysteryboard',
    img: '/assets/img/projects/mysteryboard.jpeg',
    date: '3/8/2021',
    tech: 'HTML, CSS, BOOTSTRAP 5, JS, EJS, MONGODB, EXPRESS',
    short_description: 'Post content while remaining anonymous.',
    long_description:
      "The user lands on the home page, submits their data via a simple form, and express posts that data to mongodb, where it is stored for subsequent retrieval. When express redirects the user to the mysteryboards view, it renders the data from the database, and the most recent post is at the top. All content is rendered into a unique container with the users fictional name (optional, default is anonymous), text content, and dayjs formatted date. The user can scroll through all other mysteryboard posts from other users. You don't need a username or password to use mysteryboard.",
    features:
      'Full stack application, profanity filtering, dayjs (years ago, months ago, seconds ago, etc), heroku, node, undraw, scroll to top, data filtering, read more, heart/unheart posts, mysterybot',
    github_link: 'https://github.com/christianbmartinez/mysteryboard',
    live_link: 'https://mysteryboard.herokuapp.com/',
    npm_link: null,
    codepen_link: null,
  },
  {
    title: 'MMBC',
    img: '/assets/img/projects/mmbc.jpeg',
    date: '2/12/2022',
    tech: 'REACT, TAILWIND, LOGO DESIGN',
    short_description: 'Business Consulting React SPA for MMBC.',
    long_description:
      'MMBC wanted a site where users can learn and discover their professional services. I delivered a custom solution using react and tailwind, that got all information their customers needed. Using google cloud console and app engine, I created an app.yaml file and pushed their build live after dns re configuration.',
    features:
      'React, Tailwind CSS, Google Cloud Console, Custom Scrollbar, Custom Icons, Logo Design',
    github_link: 'https://github.com/christianbmartinez/mmbc',
    live_link: 'https://www.mmbc.llc/',
    npm_link: null,
    codepen_link: null,
  },
]

const ContactConfig = {
  service_id: `${process.env.REACT_APP_SERVICE_ID}`,
  template_id: `${process.env.REACT_APP_TEMPLATE_ID}`,
  user_id: `${process.env.REACT_APP_USER_ID}`,
}

const Socials = {
  github: 'https://github.com/christianbmartinez',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
  tiktok: 'https://www.tiktok.com/@coderchris',
  twitter: 'https://twitter.com',
  codepen: 'https://codepen.io/_coderchris',
}
export {
  MetaData,
  PortfolioData,
  Skills,
  Services,
  HeroData,
  ContactConfig,
  Socials,
}
