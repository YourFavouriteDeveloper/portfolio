import styles from './Project.module.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Project = forwardRef((props, ref) => {
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

                <div className={styles.information}>
                    <p className={styles.title}>
                        PROJECT
                    </p>
                    <div className={styles.cover}>
                        <p className={styles.subtitle}>
                            TRANSACTIONAL BANK SYSTEM
                        </p>
                        <p className={styles.subsubtitle}>
                            A simplified backend for a transactional banking system built using MySQL, Redis, and the CQRS (Command Query Responsibility Segregation) pattern. This system supports basic banking operations like creating accounts, transferring funds, and retrieving account balances and transaction history with improved performance and consistency.
                        </p>
                        <a className={styles.link} target="_blank" href="https://gitlab.com/nihadmammadov/transactional-bank-system" >Check more about Transactional Bank System</a>
                    </div>

                    <div className={styles.videoContainer}>
                        <video
                            className={styles.video}
                            src="src/assets/background-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>       
            </div>
            </>
        );
});




export default Project