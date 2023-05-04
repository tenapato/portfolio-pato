import React from 'react';
import Link from 'next/link';
import NavBar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';

const LandingPage = () => {
  return (
    <div>
      <NavBar/>

      <LeftSidebar/>


      <div className="main-container">
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

      <div className='second-container'>
        <div className='flex'>
          <p className="mb-1 ml-1 text-green font-mono text-[clamp(var(--fz-s),5vw,var(--fz-md))] font-normal">
            01.
          </p>
          <p className="mb-1 ml-2 text-light font-mono text-[clamp(20px,6vw,30px)] font-extrabold">
            About
          </p>
        </div>
      </div>


    </div>

    
  );
};

export default LandingPage;
