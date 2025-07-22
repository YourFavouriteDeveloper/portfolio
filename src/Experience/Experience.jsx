import styles from './Experience.module.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Experience = forwardRef((props, ref) => {
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
                            BACKEND DEVELOPMENT
                        </p>
                        <ul>
                            <li>
                                <p className={styles.subtitle}>
                                    <b>Kapital Bank ASC</b> 
                                </p>
                                <p className={styles.subsubtitle}>
                                    During my internship at Kapital Bank, I worked on a Transactional Bank System that simulated real-world banking operations such as account management, card services, and money transfers. I applied concepts like CQRS, Kafka, Redis, and Spring Boot to build scalable microservices.
                                </p>
                            </li>
                            <li className={styles.afterInitial}>
                                <p className={styles.subtitle}>
                                    <b>Coordination of the Fourth Industrial Revolution (C4IR)</b> 
                                </p>
                                <p className={styles.subsubtitle}>
                                    Alongside development, I supported daily IT operations including system monitoring, technical troubleshooting, and infrastructure assistance. This dual role allowed me to work at the intersection of intelligent automation and enterprise IT systems, providing a well-rounded experience in modern digital innovation.
                                </p>
                            </li>     
                            <li className={styles.afterInitial}>
                                <p className={styles.subtitle}>
                                    <b>Smart Solutions Group</b> 
                                </p>
                                <p className={styles.subsubtitle}>
                                    Worked on developing and integrating a voice-based chatbot system to enhance customer support services. Focused on natural language processing (NLP) and voice recognition tools to enable smooth human-computer interaction. Collaborated with cross-functional teams to test and refine conversational flows, contributing to a smarter and more accessible experience.
                                </p>
                            </li>      
                                                  
                        </ul>
                        <p className={styles.title}>
                            FRONTEND DEVELOPMENT
                        </p>
                        <ul>
                            <li>
                                <p className={styles.subtitle}>
                                    <b>Kapital Bank ASC</b> 
                                </p>
                                <p className={styles.subsubtitle}>
                                    I also collaborated with the front-end using React, helping shape a responsive banking dashboard. This hands-on experience deepened my understanding of modern banking infrastructure and enterprise-level software development.
                                </p>
                            </li>    
                                                  
                        </ul>   
                        <p className={styles.title}>
                            OTHER
                        </p>
                        <ul>
                            <li>
                                <p className={styles.subtitle}>
                                    <b>Java Programming Mentor</b> 
                                </p>
                                <p className={styles.subsubtitle}>
                                    As a Java Programming Mentor, I specialize in guiding aspiring developers through the complexities of object-oriented programming, clean code principles, and backend development using Java. With a strong foundation in core Java, data structures, and modern frameworks, I aim to bridge the gap between academic knowledge and real-world software engineering.
                                </p>
                            </li>    
                                                  
                        </ul>                        



                    </motion.div>
            </div>
            </>
        );
});




export default Experience