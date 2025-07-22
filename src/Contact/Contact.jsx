
import styles from './Contact.module.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import gmail from '../assets/gmail-dark.webp';
import gitlab from '../assets/gitlab-dark.webp';
import linkedin from '../assets/linkedin-dark.webp';
import whatsapp from '../assets/whatsapp-dark.webp';

const Contact = forwardRef((props, ref) => {
    const localRef = useRef(null);
        const isInView = useInView(localRef, { once: true });
        const mainControls = useAnimation();
    
        useEffect(() => {
            if (isInView) {
                mainControls.start("visible");
            }
        }, [isInView]);
    
        return (
            <>
            <div
                ref={node => {
                    localRef.current = node;
                    if (typeof ref === "function") ref(node);
                    else if (ref) ref.current = node;
                }}
                className={styles.container}
            >
                <div className={styles.background}>
                
                
                </div>
    
    
                    <motion.div 
                        className={styles.information}
                        variants={{
                            hidden: { y: "200px" },
                            visible: { y: "0px" }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "10px" }}
                        animate={mainControls}
                        transition={{ duration: 1 }}                    
                    >
                        <p className={styles.title}>
                            CONTACT WITH ME
                        </p>
                        <p className={styles.subtitle}> 
                            Whether you have a project in mind, a potential collaboration, or just want to say hi, I’d love to hear from you! As a passionate Full-Stack Developer, I am always eager to explore new opportunities, tackle challenging problems, and contribute my skills to meaningful projects.   
                        </p>
                        <p className={styles.subtitle}>
                            Feel free to reach out if you need help with software development, want to discuss industry trends, or are interested in internships or job opportunities. I’m open to constructive feedback, networking, and knowledge sharing.
                        </p>
                        <p className={styles.subtitle}>
                            You can contact me directly via email at <b>nihad.mammadov.16@gmail.com</b> or connect with me on LinkedIn and other professional platforms. I check my messages regularly and aim to respond promptly.
                        </p>
                        <p className={styles.subtitle}>
                            Thank you for visiting my portfolio! Let’s build something amazing together.
                        </p>
                        <div className={styles.buttons}>
                            <a className={styles.button} target="_blank" href="mailto:nihad.mammadov.16@gmail.com">
                                <img className={styles.mail} src={gmail} alt="mail" />
                            </a>
                            <a className={styles.button} target="_blank" href="https://gitlab.com/nihadmammadov">
                                <img className={styles.gitlab} src={gitlab} alt="gitlab" />
                            </a>
                            <a className={styles.button} target="_blank" href="https://www.linkedin.com/in/nihad-mammadov-025548325/">
                                <img className={styles.linkedin} src={linkedin} alt="linkedin" />
                            </a>
                            <a className={styles.button} target="_blank" href="https://wa.me/994508514536">
                                <img className={styles.whatsapp} src={whatsapp} alt="whatsapp" />
                            </a>
                        </div>                  



                    </motion.div>
            </div>
            </>
        );
});





export default Contact