import { useState } from 'react';
import './App.css';
import ProfileCard from './ProfileCard';
import profileImg from './assets/profile-photo.jpg';
import photo2 from './assets/photo2.jpg';
import ProjectCard from './ProjectCard';
import data from './data';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai';

function App() {
  const [projects, setProjects] = useState(data);
  const onGitIconClick = () => {
    const win = window.open('https://github.com/ChandeOk/', '_blank');
    win.focus();
  };

  return (
    <div className='App'>
      <main className='main-section'>
        <div className='triangle'></div>
        <ProfileCard profileImg={profileImg} onGitIconClick={onGitIconClick} />
      </main>
      <h2 className='projects-header'>My Work</h2>
      <section>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            description={project.description}
            screenshot={project.imgUrl}
            gitHubUrl={project.gitHubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </section>
      <footer>
        <div className='contact-info-container'>
          <h2 className='contact-info-header'>Contact me</h2>
          <p className='contact-info-text'>
            Please get in touch if you think our work could be mutually
            beneficial
          </p>
          <p className='contact-info-address'>
            1234 Random Road <br /> Random Town, Randomfolnia 00420
          </p>
          <div className='contact-info-phone-container'>
            <AiOutlinePhone className='contact-info-icon' />
            <p className='contact-info-phone'>555-555-5555</p>
          </div>
          <div className='contact-info-email-container'>
            <AiOutlineMail className='contact-info-icon' />
            <p className='contact-info-email'>rajivqcnstg@gmail.com</p>
          </div>
          <div className='contact-info-icons'>
            <AiOutlineTwitter />{' '}
            <AiFillGithub
              onClick={onGitIconClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className='contact-image-container'>
          <img src={photo2} alt='' className='contact-image' />
        </div>
      </footer>
    </div>
  );
}

export default App;
