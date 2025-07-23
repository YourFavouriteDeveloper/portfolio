import React, { useRef } from 'react';  
import Nav from './Nav/Nav.jsx'
import Body from './Body/Body.jsx'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx';
import Project from './Projectt/Project.jsx'
import Contact from './Contact/Contact.jsx'

function Home() {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
  return (
   <>
      <div ref={aboutRef}></div>
      <Nav 
            scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
            scrollToExperience={() => experienceRef.current.scrollIntoView({ behavior: "smooth" })}
            scrollToProject={() => projectRef.current.scrollIntoView({ behavior: "smooth" })}
            scrollToContact={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
            aboutRef={aboutRef} 
            experienceRef={experienceRef}
            projectRef={projectRef}
            contactRef={contactRef}
            />
      <Body />
      <About ref={aboutRef}/>
      <Experience ref={experienceRef}/>
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
   </>
  )
}

export default Home