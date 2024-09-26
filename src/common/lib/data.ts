import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import aiLawyerImg from '@/../public/images/ai-lawyer.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Heoweb Solutions',
    location: 'Nagpur, India',
    description: `Software Develpoer position. Responsible for design, develop, and test web applications, focusing on creating seamless user experiences and testing usability scenarios`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Dec 2023 - May 2024',
  },
  {
    title: 'Remostart',
    location: 'Remote',
    description: `Designed and developed responsive user interfaces, enhancing user engagement and application usability, while integrating RESTful APIs for seamless backend communication`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'March 2022 - Sept 2022',
  },
  {
    title: 'Volunteer',
    location: 'Maa Foundation',
    description: `Volunteered at an NGO focused on social welfare, supporting initiatives for the education and well-being of underprivileged children.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jun 2023 - Present',
  },
  {
    title: 'B.Tech in Information Technology (IT)',
    location: 'G H Raisoni College of Engineering, Nagpur',
    description: `Graduated with a B.Tech in Information Technology from G H Raisoni College of Engineering, achieving a CGPA of 8.2.`,
    icon: React.createElement(BookIcon),
    date: 'Jun 2020 - Jun 2024',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'TapON',
    description:
      'TapOn is a platform to create, share, and manage digital visiting cards with just few clicks!',
    tags: [
      'React',
      'Javascript',
      'Node.js',
      'Firebase',
      'Redux.js',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/Parthmandhare/TapOn.git',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/Parthmandhare/Portfolio.git',
  },
  {
    title: 'VedaByte - Ecommerce',
    description: `VedaByte is a fully functional e-commerce platform with secure payment integration, allowing users to browse products, manage carts, and complete purchases with real-time order tracking.`,
    tags: [
      'React',
      'Javascript',
      'Node.js',
      'Tailwind',
      'Firebase',
      'Redux.js',
      'Razor Pay',
      'End-to-End Development',
    ],
    imageUrl: aiLawyerImg,
    link: 'https://github.com/Parthmandhare/VedaByte---Ecommerce',
  },
  {
    title: 'BlogSphere',
    description:
      'Welcome BlogSphere! blog platform allowing users to write, publish, and manage articles with features for user authentication and content editing.',
    tags: [
      'React',
      'Javascript',
      'Node.js',
      'Tailwind',
      'MongoDB',
      'Redux.js',
      'End-to-End Development',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/Parthmandhare/Blog-Website.git',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  // ['Framer', '/svgs/framer.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
