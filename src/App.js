import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheMenu from './Navbar'
import Projects from './Projects'
import CurrentProject from './CurrentProject'
import Blog from './Blog'
import Footer from './Footer'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <TheMenu />
      <Projects />
      <CurrentProject />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
