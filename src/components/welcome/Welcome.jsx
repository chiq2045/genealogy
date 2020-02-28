import React from 'react';
import './welcome.css';

export default function Welcome() {
  return (
    <section id='splash-image' className='hero fullscreen hero-img parallax-img'>
      <div id='hero-body' className='hero-body'>
        <div className='content u-text-center'>
          <h3 className='headline-3 white title'>
            Unnamed Genealogy App
          </h3>
          <h6 className='white sub-title'>
            Test out the power of creating a genealogy with your family!
          </h6>
        </div>
      </div>
    </section>
  );
}
