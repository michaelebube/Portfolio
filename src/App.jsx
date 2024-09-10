import React from 'react'
import BgImg from './assets/patternSVG.svg'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {

  
       const pageStyle = {
    position: 'relative',
    backgroundColor: '#171717',
    opacity: 0.9,
    minHeight: '100vh',
    width: '100vw',
  };

  const beforeStyle = {
       content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4, 
    zIndex: -1,
  }





  return (
    <>
      <div style={pageStyle} className='overflow-x-hidden'>
        <div style={beforeStyle} className='overflow-x-hidden'>
          
        </div>
        <Hero />
       <About />
       <Projects />
        
      

      </div>
    </>
  )
}

export default App