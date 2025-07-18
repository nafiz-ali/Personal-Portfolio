
import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';
import type { Skill } from '../types';
import { SECTION_IDS } from '../constants';

// SVG Icons as React Components
const ReactIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.247a1 1 0 0 0-1 1v1.826a10.033 10.033 0 0 0-4.5 2.129l-1.292-1.292a1 1 0 0 0-1.414 1.414l1.292 1.292A10.033 10.033 0 0 0 3.057 12H1.23a1 1 0 1 0 0 2h1.826a10.033 10.033 0 0 0 2.129 4.5l-1.292 1.292a1 1 0 1 0 1.414 1.414l1.292-1.292A10.033 10.033 0 0 0 11 21.943v1.826a1 1 0 1 0 2 0v-1.826a10.033 10.033 0 0 0 4.5-2.129l1.292 1.292a1 1 0 1 0 1.414-1.414l-1.292-1.292A10.033 10.033 0 0 0 20.943 14h1.826a1 1 0 1 0 0-2h-1.826a10.033 10.033 0 0 0-2.129-4.5l1.292-1.292a1 1 0 0 0-1.414-1.414l-1.292 1.292A10.033 10.033 0 0 0 13 5.073V3.247a1 1 0 0 0-1-1zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>
);
const TSIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.46 16.89h-5.92V7.11h5.92v2.12h-3.54v1.7h3.54v2.12h-3.54v1.72h3.54v2.12zM0 0h24v24H0V0z" fill="none"/><path d="M21.5 0H2.5A2.5 2.5 0 0 0 0 2.5v19A2.5 2.5 0 0 0 2.5 24h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 21.5 0zM14.46 16.89h-5.92V7.11h5.92v2.12h-3.54v1.7h3.54v2.12h-3.54v1.72h3.54v2.12z"/></svg>
);
const NodeIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21.2,10.7l-7.5-5.2c-1-0.7-2.4-0.7-3.4,0L2.8,10.7c-1,0.7-1.6,1.8-1.6,3c0,1.2,0.6,2.3,1.6,3l7.5,5.2 c0.5,0.3,1.1,0.5,1.7,0.5s1.2-0.2,1.7-0.5l7.5-5.2c1-0.7,1.6-1.8,1.6-3S22.2,11.4,21.2,10.7z M12.9,10.3l-2-1.3v5.1l-2-1.2V9 l3-1.8c0.4-0.3,1-0.3,1.4,0l3,1.8v6l-3-1.8V10.3z"/></svg>
);
const TailwindIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
);
const FigmaIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M15,2H9C6.79,2,5,3.79,5,6V18C5,20.21,6.79,22,9,22H15C17.21,22,19,20.21,19,18V6C19,3.79,17.21,2,15,2Z M10,7C10,6.45,10.45,6,11,6H13C13.55,6,14,6.45,14,7V8C14,8.55,13.55,9,13,9H11C10.45,9,10,8.55,10,8V7Z M10,12C10,11.45,10.45,11,11,11H13C13.55,11,14,11.45,14,12C14,12.55,13.55,13,13,13H11C10.45,13,10,12.55,10,12Z M12,17C11.17,17,10.5,16.33,10.5,15.5C10.5,14.67,11.17,14,12,14C12.83,14,13.5,14.67,13.5,15.5C13.5,16.33,12.83,17,12,17Z"/></svg>
);
const GeminiIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 14.19L12 13.5l-2.19 2.69L8 15l4-5 4 5-1.81 1.19zM8 10l4 5 4-5H8z"/></svg>
);


const skills: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TSIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Gemini API', icon: <GeminiIcon /> },
];

const Skills: React.FC = () => {
  return (
    <Section id={SECTION_IDS.skills} title="My Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
