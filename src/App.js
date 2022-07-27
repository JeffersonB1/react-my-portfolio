import React from 'react';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';

function App() {
  return (
    <div>
      <Nav/>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>

    </div>
        
  
    
  );
}

export default App;