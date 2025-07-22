import styles from './Nav.module.css';
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import App from "../App.jsx";

function Nav({ scrollToAbout,scrollToExperience,scrollToProject,scrollToContact,aboutRef, experienceRef, projectRef, contactRef}) {

    const [isVisible, setIsVisible] = useState(false);
    const [clicker, setClicker] = useState(null);
    const [component, setComponent] = useState(null);
    const isAboutInView = useInView(aboutRef, {amount: 0.53, once: false });
    const isExperienceInView = useInView(experienceRef, {amount: 0.42, once: false });
    const isProjectInView = useInView(projectRef, {amount: 0.53, once: false });
    const isContactInView = useInView(contactRef, {amount: 0.53, once: false });


    function handleAboutClick() {
        scrollToAbout?.(); 
        setIsVisible(false); 
        setClicker(null);    
        setComponent(null);  
    }

    function handleExperienceClick() {
        scrollToExperience?.(); 
        setIsVisible(false); 
        setClicker(null);    
        setComponent(null);  
    }

    function handleProjectClick() {
        scrollToProject?.(); 
        setIsVisible(false); 
        setClicker(null);    
        setComponent(null);  
    }

    function handleHomeClick() {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    setIsVisible(false);
    setClicker(null);
    setComponent(null);
    }

    function handleContactClick() {
        scrollToContact?.(); 
        setIsVisible(false); 
        setClicker(null);    
        setComponent(null);  
    }

    let onBoard = null
    const about = <>
                    <p className={styles.about} style={{paddingTop: "400px"}}>
                    I am Nihad Mammadov, a dedicated <b>Full-Stack Developer</b> who currently studies Computer Engineering at Baku Higher Oil School.
                    </p>
                    <p className={styles.about}>Currently developing my Front-end skills, as the portfolio will get updated for each improvement made in those skills.</p>
                    <p className={styles.about}>Click <b><u>More About</u></b> to get more information about me.</p>
                    <a className={styles.moreAbout} onClick={handleAboutClick}>More About</a>
                </>


    
    const experience = <>
                    <p className={styles.about} style={{paddingTop: "400px"}}>
                    I have been actively participated in many Software Engineer Internships, worked as a employee at certain companies.
                    </p>
                    <p className={styles.about}>My experience is not only limited with internships, but also been active in volunteering, playing crucial role as a team member/ team leader.</p>
                    <p className={styles.about} >Click <b><u>More Experience</u></b> to read more about my experience.</p>
                    <a className={styles.moreAbout}  onClick={handleExperienceClick}>More Experience</a>  
                    </>

    const project = <>
                    <p className={styles.about} style={{paddingTop: "400px"}}>
                    It is not only about learning, but implementing those skills in projects that will boost any Developer's career.
                    </p>
                    <p className={styles.about}>To improve my Backend and Frontend skills, I have worked on some of the little, yet worthy to check projects.</p>
                    <p className={styles.about}>Click <b><u>More Projects</u></b> to check my projects.</p>
                    <a className={styles.moreAbout}  onClick={handleProjectClick}>More Project</a>  
                    </>

    const contact = <>
                    <p className={styles.about} style={{paddingTop: "410px"}}>
                    If you have any recommedations about improving my Portfolio or need any help of my level, feel free to contact with me.
                    </p>
                    <p className={styles.contact} >Click <b><u>More Contact</u></b> to contact with me.</p>
                    <a className={styles.moreContact} onClick={handleContactClick}>More Contact</a>  
                    </>

                    

    
    function openBoard(event) {
        const id = event.target.id;

        if (id === "home") {
            setClicker(id);
            return
        }

    
        if (clicker === null || clicker !== id) {
            setClicker(id);
            setIsVisible(true);

            if (id === "about") {
                if(clicker === "contact" || clicker === "experience" || clicker === "project") {
                    setIsVisible(false)
                    setTimeout(() => {
                        setIsVisible(true);
                        setComponent(about);
                    }, 500); 
                    
                }
                else {setComponent(about);}
                
            } 
            
            else if (id === "contact") {
                if(clicker === "about" || clicker === "experience" || clicker === "project") {
                    setIsVisible(false)
                    setTimeout(() => {
                        setIsVisible(true);
                        setComponent(contact);
                    }, 500); 
                    
                }
                else {setComponent(contact);}
                
            }

            else if (id === "experience") {
                if(clicker === "about" || clicker === "contact" || clicker === "project") {
                    setIsVisible(false)
                    setTimeout(() => {
                        setIsVisible(true);
                        setComponent(experience);
                    }, 500); 
                    
                }
                else {setComponent(experience);}
                
            }

            else if (id === "project") {
                if(clicker === "about" || clicker === "contact" || clicker === "experience") {
                    setIsVisible(false)
                    setTimeout(() => {
                        setIsVisible(true);
                        setComponent(project);
                    }, 500); 
                    
                }
                else {setComponent(project);}
                
            }

            else {
                setComponent(null);
            }
            


        } else {
            setIsVisible(false);
            setClicker(null);
            setTimeout(() => {
                setComponent(null);
            }, 500); 

        }
    }

    let nav = <nav>
                <div className={`
                    ${styles.navbarContainer} 
                    ${isAboutInView ? styles.navbarAbout : ''}
                    ${isExperienceInView ? styles.navbarExperience : ''}
                    ${isProjectInView ? styles.navbarProject : ''}
                    ${isContactInView ? styles.navbarContact : ''}
                `}>
                    <p id={styles.name}>My Portfolio</p>
                    <a id="home" className={styles.navbar} onClick={handleHomeClick}>Home</a>
                    <a id = "about" className={styles.navbar} onClick={(event) => openBoard(event)} >About</a>
                    <a id = "experience" className={styles.navbar} onClick={(event) => openBoard(event)} >Experience</a>
                    <a id = "project" className={styles.navbar} onClick={(event) => openBoard(event)} >Project</a>
                    <a id = "contact" className={styles.navbar} onClick={(event) => openBoard(event)} >Contact</a>
                </div>

                <div style={{ 
                    marginTop: isVisible ? "-300px" : "-600px",
                    borderRadius: isVisible ? styles.board.borderRadius : "0px"
                }} 
                className={`${styles.board} ${isAboutInView ? styles.boardAbout : ''}`}>
                    {component}
                </div>
            </nav>
    


    return nav
}



export default Nav;