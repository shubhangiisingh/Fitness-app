import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Whyus from './Whyus';
import Courses from './Courses';
import Counters from './Vectors';
import Membership from './Membership';
import Blogs from './Blogs';
import Footer from './Footer';

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Whyus/>
    <Courses/>
    <Counters/>
    <Membership/>
    <Blogs/>
    <Footer/>
    </div>
  );
}

export default App;
