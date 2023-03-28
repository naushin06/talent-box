import React from 'react'
import {Link} from "react-router-dom"
const Navbar = (props) => {
  return (
<>

   
<nav id="navbar" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" >
    <img className='logo' src="https://www.freecodecamp.org/news/content/images/2022/07/fcc_primary_large.jpg" alt="height:" />
    <ul className='btn'>
  <Link  className='btn-1' to="/register">
      Sign-In
    </Link >
    <Link className='btn-2' to="/Bye">
      Menu
    </Link>
    
  </ul>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">
      <input id='h-text' type="text" placeholder='Search 8,0000 tutorials' />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" id="logo" href="#">
          <img className='logo' src="https://www.freecodecamp.org/news/content/images/2022/07/fcc_primary_large.jpg" alt="height:" />

          </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <ul className='btn'>
  <Link  className='btn-1' to="/register">
      Sign-In
    </Link >
    <Link className='btn-2' to="/Bye">
      Menu
    </Link>
    
  </ul>
      </form>
    </div>
  </div>
</nav>

{/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
     
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  
      <a className="navbar-brand" />
     <input id='h-text' type="text" placeholder='Search 8,0000 tutorials' />

      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        
        <ul className='btn'>
  <Link  className='btn-1' to="/register">
      Sign-In
    </Link >
    <Link className='btn-2' to="/Bye">
      Menu
    </Link>
    
  </ul>
      </form>
    </div>
  </div>
</nav> */}
{/* <div className="navbar">


  <div className="">
   <input className='h-text' type="text" placeholder='Search 8,0000 tutorials' />
  </div>
  <div className="center">
<img className='logo' src="https://www.freecodecamp.org/news/content/images/2022/07/fcc_primary_large.jpg" alt="height:" />
  </div>
  <div className="right">
  <nav>
  <ul className='btn'>
  <Link  className='btn-1' to="/register">
      Sign-In
    </Link >
    <Link className='btn-2' to="/Bye">
      Menu
    </Link>
    
  </ul>
</nav>

  </div>
</div>
  */}
</>
  )
}

export default Navbar