

import React from 'react';
import './AboutTeam.scss';

const AboutTeam = () => {
  return (
    <div className="about-us-container">
      
       
      <div className="content-section">
      
        <div className="team-section">
        <div className='head'>
        <h1>Our Plan & Working Style
        </h1>
        </div>
          <div className="team-member1">
          <div className='left'>
          <h3>1</h3>
          <p>Step</p>
          </div>
          <div className='content'>
         <h2>Understanding Your Needs</h2>
         <p>We start by listening carefully to your requirements, goals, and challenges. By understanding your unique needs, we can tailor our approach to deliver the best solutions for you.</p>
          </div>
          
          </div>
          <div className="team-member2">
          <div className='left'>
          <h3>2</h3>
          <p>Step</p>

          </div>
         
            <div className='content'>
            <h1>Crafting a Customized Plan</h1>
            <p>Once we have a clear understanding of your needs, we'll develop a customized plan that outlines the steps we'll take to achieve your goals. Our plans are flexible, adaptable, and designed to ensure success.</p>
            </div>
          </div>
          <div className="team-member1">
          <div className='left'>
            <h3>3</h3>
            <p>Step</p>

          </div>
            
            <div className='content'>
          <h1>Collaborative Execution</h1>
          <p>With the plan in place, we'll work closely with you every step of the way to execute it effectively. Through open communication, transparency, and collaboration, we'll ensure that we're always aligned and moving forward together toward success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
