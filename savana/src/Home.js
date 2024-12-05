import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div className="hero-section">
      <div className="row-content">
        <div className="left-content">
          <div className="one">
            <h2 className="title">SAVANA YOGA</h2>
            <div className="accent-line1"></div>
          </div>
          <h1 className="heading">Bend your mind,<br /> inspire yourself</h1>
          <p className="subtitle">“Your Health, Your Journey - track, improve and thrive everyday.”</p>
          <div className="button-group">
            <div className='button-row'>
              <button className="button">Get Started</button>
              <button className="button-secondary">Contact Us</button>

            </div>
            <div className="line3"></div>
          </div>
        </div>
        <div classNameName='right-content'>
          <img src="/Yoga.png" className="img-thumbnail" alt="." style={{ height: '500px', width: '500px', marginRight: '120px' }} />
        </div>
      </div>
    </div>


  )
}
