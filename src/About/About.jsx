import styles from './About.module.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import myImage from '../assets/Macbook.png';


const About = forwardRef((props, ref) => {
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
                <motion.div 
                    className={styles.circle1}
                    variants={{
                        hidden: { x: 275, y: 175, rotate: -25 },
                        visible: { x: 0, y: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "25px",once: false, }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                />
                
                <motion.div 
                    className={styles.circle2}
                    variants={{
                        hidden: { x: 275, y: 175, rotate: -25 },
                        visible: { x: 0, y: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px",once: false, }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                />
                
                <motion.div 
                    className={styles.circle3}
                    variants={{
                        hidden: { x: 275, y: 175, rotate: -25 },
                        visible: { x: 0, y: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px",once: false, }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                />
            </div>


            <div className={styles.information}>
                <motion.p 
                    className={styles.title}
                    variants={{
                        hidden: {  x: 175, rotate: 1 },
                        visible: { x: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px",once: false, }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                >
                    ABOUT
                </motion.p>
                
                <motion.p 
                    className={styles.subtitle}
                    variants={{
                        hidden: { x: 175, rotate: 1},
                        visible: {  x: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px",once: false, }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                >
                    <b>As a passionate and growth-driven Software Engineer</b>, I specialize in building scalable and maintainable Back-end Systems Using Java and Spring Boot.
                    I'm currently expanding my expertise in <b>Front-end Development</b> with React. If you see improvements as you visit this portfolio, It means that I have learned something.
                </motion.p>


                <motion.img 
                src={myImage} 
                alt="Nihad Mammadov"
                variants={{
                    hidden: {  x: -275, rotate:20},
                    visible: {  x: 0, rotate:30}
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "0px", once: false, }}
                animate={mainControls}
                transition={{ duration: 1.25}}
                />
                <motion.p 
                    className={styles.subsubtitle}
                    style={{marginTop:"155px",once: false,}}
                    variants={{
                        hidden: { x: -175 },
                        visible: { x: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "50px" }}
                    animate={mainControls}
                    transition={{ duration: 1 }}
                >
                    I thrive in collaborative environments, enjoy mentoring others, and believe in continuous learning. Whether it's contributing to complex systems, leading technical projects, or exploring new technologies, I’m always eager to push boundaries and create impactful solutions.
                </motion.p>
            </div>
        </div>
        </>
    );
});

export default About;
