import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongo,
  mysql,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'App Development',
    icon: ux,
  },
  {
    title: 'Deployment',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
{
  name: 'MySQL',
  icon: mysql,
},
  // {
  //   name: 'NextJS',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Unwiring  Apps',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2022 - July 2022',
  },
  {
    title: 'Full Stack Developer (reffered  by internship)',
    company_name: 'TradeImex info Solutions Pvt Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2022 - March 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Aspi  Global Pvt Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2023 - April 2024',
  },
  {
    title: 'IT Head/Senior Software Engineer',
    company_name: 'Naman Finlease Pvt Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'SkinLays',
    description: 'A Genz Fasshion Apparel Brands Fully Functional Ecommerce Store.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://skinlays.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Retro Games',
    description:
      'A Gaming App that allows users to play retro games online. with real wallet system.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://retro-games4u.netlify.app/',
  },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  {
    id: 'project-4',
    name: 'JARVIS',
    description: `AI Chatbot that can answer questions and provide information on various topics.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://chatbot-c0jz.onrender.com/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
