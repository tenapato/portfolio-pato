// components/LeftSidebar.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftSidebar = () => {
  return (
    <div className="flex">
      <div className="social-icons">
        <a href="https://github.com/tenapato" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/tenapatricio/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
