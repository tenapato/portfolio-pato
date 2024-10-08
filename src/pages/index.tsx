import React from 'react';
import Link from 'next/link';
import NavBar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import ProjectCard from './components/ProjectCard';
import WorkHistoryGithubBranches from '../components/work-history-github-branches';
import CodingProjectsComponent from '../components/coding-projects';

const LandingPage = () => {
    const projects: any[] = [
    {
      title: 'Katanagatari',
      description: 'Indie Fighting Game',
      technologies: 'Unity,C#',
      link: 'https://github.com/tenapato/katanagatari',
      demo: '',
      img: ''
    },{
      title: 'Data Vault',
      description: 'Cloud Storage Service',
      technologies: 'NextJS, R2, Javascript, Workers',
      link: 'https://github.com/tenapato/data-vault-frontend?tab=readme-ov-file',
      demo: 'https://datavaults.app/',
      img: 'https://raw.githubusercontent.com/tenapato/data-vault-frontend/main/docs/Screenshot%202024-02-28%20at%205.50.03%E2%80%AFp.m..png'
    },
    {
      title: 'Kanji App',
      description: 'Kanji Learning App',
      technologies: 'ReactJS, Javascript',
      link: 'https://github.com/tenapato/kanji-app',
      demo: 'https://kanji-qhaltg3be-tenapato.vercel.app/',
      img: 'https://raw.githubusercontent.com/tenapato/kanji-app/main/files/Screenshot%202024-03-05%20at%209.54.31%E2%80%AFp.m..png'
    }
    // Add more projects as needed
  ];
  return (
    <div>
      <NavBar/>

      <LeftSidebar/>


      <div className="main-container">
        <div className="content-wrapper">
          <p className="mb-1 ml-1 text-green font-mono text-[clamp(var(--fz-s),5vw,var(--fz-md))] font-normal">
            Hey, my name is
          </p>
          <p className=" text-lightest-slate font-mono font-bold text-[clamp(40px,8vw,80px)]">
            <a className='text-green'>{"<"}</a>Patricio Tena.<a className='text-green'>{"/>"}</a>
          </p>
          <p className="mb-7 ml-4 text-light-slate font-mono font-bold text-[clamp(40px,6vw,60px)]">
            I'm a Computer Engineer
          </p>
        </div>
        <div className='first-description-box'>
          <p className='text-slate font-mono '>Backend Engineer @ RUUT | Graduado del Tecnológico de Monterrey | Computer Engineer | Python, Javascript, C++ , Docker, MongoDB, SQL, CloudFlare Workers</p>
          
        </div>
      </div>

      <div className='second-container' id='about'>
        <div className='flex'>
          <p className="mb-1 ml-1 text-green font-mono text-[clamp(10px,3vw,25px)] font-normal">
            01.
          </p>
          <p className="mb-1 ml-2 text-lightest-slate font-mono text-[clamp(10px,3vw,25px)] font-extrabold">
            About
          </p>
        </div>
        <div className="inner pt-3">
          <div className="text">
            <p className='mb-1 ml-2 text-lightest-slate pb-3'><a className='text-green'>Computer Technology Engineer</a> with a solid background in software development and information technologies.
            </p><p className='mb-1 ml-2 text-lightest-slate pb-3'>With over <a className='text-green'>3 years of experience</a>. as a Full Stack and Backend Developer, I have developed a wide range of applications and systems using various technologies and platforms.
            </p>
            <p className='mb-1 ml-2 text-lightest-slate pb-3'>
              In addition to my practical experience, I am deeply interested in specializing in the fields of <a className='text-green'>Artificial Intelligence, Cybersecurity, and DevOps</a>. and constantly seeking opportunities to expand my knowledge and skills in these areas.
            </p>
          </div>
          <img src='pp.jpg' alt='Your image description'></img>
        </div>
        
      </div>

    <div className="third-container" id="projects">
          <div className="flex">
            <p className="mb-1 ml-1 text-green font-mono text-[clamp(10px,3vw,25px)] font-normal">02.</p>
            <p className="mb-1 ml-2 text-lightest-slate font-mono text-[clamp(10px,3vw,25px)] font-extrabold">Projects</p>
          </div>
          {/* <div className="inner pt-3"> */}
            {/* {projects.map((project: any, index: number) => (
              <ProjectCard key={index} {...project} />
            ))} */}
          {/* </div> */}
            <CodingProjectsComponent/>
    </div>

    <div className="second-container" id="work">
      <div className="flex">
        <p className="mb-1 ml-1 text-green font-mono text-[clamp(10px,3vw,25px)] font-normal">03.</p>
        <p className="mb-1 ml-2 text-lightest-slate font-mono text-[clamp(10px,3vw,25px)] font-extrabold">Work</p>
      </div>
        {/* {projects.map((project: any, index: number) => (
          <ProjectCard key={index} {...project} />
        ))} */}
        <WorkHistoryGithubBranches/>
    </div>

    </div>

    

    
  );
};

export default LandingPage;
