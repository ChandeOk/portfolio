import React from 'react';
import './ProfileCard.css';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

function ProfileCard({ profileImg, onGitIconClick }) {
  return (
    <div className='profile-card'>
      <div className='profile-image-container'>
        <img className='profile-image' src={profileImg} alt='profile-image' />
        <h2 className='profile-name'>Someone Here</h2>
      </div>
      <div className='profile-card-text'>
        <h2 className='profile-card-text-header'>About me</h2>
        <p className='profile-card-text-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          deserunt hic, quis odit quam officia nulla error soluta repudiandae
          quas delectus illo autem consequatur. Vel fugit excepturi quae dolorem
          iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus omnis expedita sunt. Quis reiciendis qui amet cumque eaque
          unde cum eos numquam dolorem quae necessitatibus animi ea accusantium,
          quam enim?
        </p>
        <div className='icons-container'>
          <AiFillGithub
            className='icon'
            onClick={onGitIconClick}
            style={{ cursor: 'pointer' }}
          />
          <AiOutlineTwitter />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
