/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './welcome.css';

export default function Welcome() {
  return (
    <section id='splash-image' className='hero fullscreen hero-img parallax-img'>
      <div id='learn-more-modal' className='modal modal-animated--zoom-in'>
        <a href='#thisRefsNothing' className='modal-overlay close-button' aria-label='Close'>Nothing Here</a>
        <div className='modal-content' role='document'>
          <div className='modal-header'>
            <NavLink to='#components' className='u-pull-right' aria-label='Close'>
              <span className='icon'>
                <i className='fa fa-wrapper fa-times' />
              </span>
            </NavLink>
            <div className='modal-title'>Unnamed Genealogy App</div>
          </div>
          <div className='modal-body'>
            <h6>What is this app?</h6>
            <p>The Unnamed Genealogy App is a web app that gives you the ability to create a private genealogy for your family. By creating a user account, you can build a family tree for your family. Family members can be invited to view, and if they have auser account, edit the tree.</p>
            <h6>Why did you create the app?</h6>
            <p>The Unnamed Genealogy App was conceived when I first heard that my grandfather had become sick. The idea that I may lose out on learning and knowing stories from his time made me feel quite nostalgic. As a software designer I thought it would be interesting to make an app that can connect families with other family members, sharing stories and building a tree to show how everyone is connected. However, I wanted it to be invite only.</p>
            <h6>Is this a social network?</h6>
            <p>No. I`&apos`m sure that it could become one, but the ides is not to connect users with one another, but to allow users to invite new users to build their network. The closest I can compare it to is something like WhatsApp.</p>
          </div>
        </div>
      </div>
      <div id='hero-body' className='hero-body'>
        <div className='content u-text-center'>
          <h4 className='headline-4 grey title'>
            Unnamed Genealogy App
          </h4>
          <h6 className='grey sub-title'>
            Test out the power of creating a genealogy with your family!
          </h6>
          <div className='btn-group'>
            <NavLink to='#learn-more-modal'>
              <button className='btn-info btn-small plain' type='button'>Learn More</button>
            </NavLink>
            <NavLink to='/register'>
              <button className='btn-success btn-small plain' type='button'>Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
