import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#FFFFFF' }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="/Small.png" alt="" width="200" height="150" style={{ marginLeft: "20px", marginTop: "10px" }} /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav mx-auto mb-1 mb-lg-0" style={{ gap: '20px' }}>
            <li className="nav-item  ">
              <a class=" nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active  " aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active  " aria-current="page" href="#">Courses</a>
            </li>

            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
          <div class="d-flex" style={{ gap: '20px', marginRight: '150px' }}>
            <img src="/facebook.png" alt="" width="40" height="40" />
            <img src="/twitter.png" alt="" width="40" height="40" />
            <img src="/linkedin.png" alt="" width="40" height="40" />

          </div>
        </div>
      </div>
    </nav>
  )
}


