import React from 'react';
import { Link } from 'react-router-dom'

const Page1 = () => {
  return (
    <div className='main-page'>
    <div className='wrapper'>
    <div className='container-fluid'>
  <div className='row'>
    <div className='col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12'>
    <h1 class="big-heading" data-test-label="landing-header">Learn to code — for free.</h1>
    <p className='big-heading'>Build projects.</p>
    <p className='big-heading' id='bh3'>Earn certifications.</p>
    {/* <h1 className='big-heading'>Learn to code-for free</h1>
      <p className='big-heading'>Build projects.</p>
    <p className='big-heading'>Earn certifications.</p> */}

      <p className='p1p'>
        Since 2014,more than 40,000 freeCodeCamp.org graduates have gotten <br /> jobs at tech companies including 
      </p>
      <div className='p1-icons'>
    <p className='iconp1'><i class="fa-brands fa-apple" style={{color: '#797c81'}}></i></p>
    <p className='iconp1'><i class="fa-brands fa-google" style={{color: '#797c81'}}></i>oogle</p>
    <p className='iconp1'><i class="fa-brands fa-microsoft" style={{color: '#797c81'}}></i>Microsoft</p>
    <p className='iconp1'><i class="fa-brands fa-spotify" style={{color: '#797c81'}}></i>Spotify</p>
    <p className='iconp1'><i class="fa-brands fa-amazon" style={{color: '#797c81'}}></i>amazon.com</p>
      </div>
     
      <Link to='/register'>
      <button className='mbutton'> <h3 className='main-btn'> Get started (it's free)</h3></button>
      </Link>
    </div>
    </div>
  </div>
    </div>
    </div>

    
  )
}

export default Page1
