import React from 'react';
import './ProjectCard.css';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
function ProjectCard({ name, description, screenshot, gitHubUrl, demoUrl }) {
  const onGitClick = (url) => {
    // location.href = url;
    const win = window.open(url, '_blank');
    win.focus();
  };
  const onDemoClick = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };
  return (
    <div className='project-card-container'>
      <div className='project-card-image-container'>
        <img
          className='project-card-image'
          src={screenshot}
          alt='project image'
        />
      </div>
      <div className='project-card-description-container'>
        <div className='project-card-description-top'>
          <h2 className='project-card-description-header'>{name}</h2>
          <div className='project-card-icons'>
            <AiFillGithub
              onClick={() => onGitClick(gitHubUrl)}
              style={{ cursor: 'pointer' }}
            />
            <AiOutlineLink
              onClick={() => onDemoClick(demoUrl)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <p className='project-card-description-text'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
