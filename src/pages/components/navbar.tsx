import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between items-center relative w-full text-lightest-slate font-mono z-12 pt-5 pb-5'>
          <nav className="kFCHyX">
            <h1 className="pl-10 pt-2 font-bold text-xl">
                <span className='font-bold text-xl pr-2'>{"{"}</span>
                 <span className="text-green cursor-pointer">Name :</span> 
                 <a href="/"> Patricio Tena</a>
                 <span className='font-bold text-xl pl-2'>{"}"}</span>
                 </h1>
            <ul className="flex space-x-4 buZqzj-ol">
              <span className='buZqzj-ol-li'>{"{"}</span>
              <li className="buZqzj-ol-li">
                <Link href="/">
                  <span className="numbers-ol-li cursor-pointer">01 :</span>
                  <span className="buZqzj-ol-li-a cursor-pointer">Home,</span>
                </Link>
              </li>
              <li className="buZqzj-ol-li">
                <Link href="/about">
                  <span className="numbers-ol-li cursor-pointer">02 :</span>
                  <span className="buZqzj-ol-li-a cursor-pointer">About,</span>
                </Link>
              </li>
              <li className="buZqzj-ol-li">
                <Link href="/work">
                  <span className="numbers-ol-li cursor-pointer">03 :</span>
                  <span className="buZqzj-ol-li-a cursor-pointer">Work</span>
                </Link>
              </li>
              <span className='buZqzj-ol-li'>{"}"}</span>
              <li>
                <button className="buZqzj-button">
                  Download Resume
                </button>
              </li>
            </ul>
          </nav>
        </div>
    </div>

    
  );
};

export default NavBar;