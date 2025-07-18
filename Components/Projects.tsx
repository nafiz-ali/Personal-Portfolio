
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import { SECTION_IDS } from '../constants';

const projectData: Project[] = [
  {
    id: 1,
    title: 'Cyber Dashboard',
    description: 'A futuristic data visualization dashboard for monitoring real-time analytics, built with React and D3.js. Features a neon-lit interface and customizable widgets.',
    imageUrl: 'https://picsum.photos/seed/cyber1/600/400',
    tags: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'AI Art Generator',
    description: 'A web application that leverages generative AI to create unique artworks from text prompts. Sleek, minimalist UI with a focus on user experience.',
    imageUrl: 'https://picsum.photos/seed/cyber2/600/400',
    tags: ['Next.js', 'Gemini API', 'Vercel', 'UI/UX'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Retro Game Emulator',
    description: 'A browser-based emulator for classic video games, featuring a retro CRT screen effect and customizable controls. Written in pure JavaScript for performance.',
    imageUrl: 'https://picsum.photos/seed/cyber3/600/400',
    tags: ['JavaScript', 'HTML5 Canvas', 'WebAssembly'],
    repoUrl: '#',
  },
    {
    id: 4,
    title: 'Decentralized Social Network',
    description: 'A concept for a blockchain-based social media platform, focusing on user privacy and data ownership. The interface is designed to be clean and intuitive.',
    imageUrl: 'https://picsum.photos/seed/cyber4/600/400',
    tags: ['Solidity', 'Ethers.js', 'React', 'IPFS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 5,
    title: 'Interactive Portfolio API',
    description: 'A headless CMS and API for managing portfolio content. Built with Node.js and Express, it powers this very website with project and skill data.',
    imageUrl: 'https://picsum.photos/seed/cyber5/600/400',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    repoUrl: '#',
  },
  {
    id: 6,
    title: 'Project Pulsar',
    description: 'A collaborative code editor with real-time editing, chat, and syntax highlighting for various languages. Built with WebSockets for low-latency communication.',
    imageUrl: 'https://picsum.photos/seed/cyber6/600/400',
    tags: ['WebSockets', 'React', 'Monaco Editor', 'Auth0'],
    liveUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id={SECTION_IDS.projects} title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
