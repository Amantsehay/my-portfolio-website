import React from 'react';
import Title from '../layouts/Title';
import { malware, twitterClone, webScraper, bettingWebsite } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="EXPLORE MY PROJECTS AND LEAVE YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Malware Development"
          des="Developed a variety of malware targeting specific vulnerabilities for experimentation."
          src={malware}
        />
        <ProjectsCard
          title="Twitter Clone (Work in Progress)"
          des="Building a Twitter clone application with features similar to the original platform."
          src={twitterClone}
        />
        <ProjectsCard
          title="Web Scraper Website"
          des="Designed and implemented a web scraping application to extract data from various websites."
          src={webScraper}
        />
        <ProjectsCard
          title="Betting Website"
          des="Developing a betting website with interactive features and secure payment processing."
          src={bettingWebsite}
        />
      </div>
    </section>
  );
}

export default Projects;
