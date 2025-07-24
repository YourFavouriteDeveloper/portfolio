import styles from './Body.module.css'
import React, {useEffect, useRef} from "react"
import { motion, useInView, useAnimation } from "framer-motion"

function Body() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])



    
    return (
        
        <div ref={ref} className={styles.container}>
            <motion.div className={styles.background}>


                {<motion.div 
                    className={styles.circle1}
                    variants={{
                        hidden: {x: -175,y: -65,  rotate: -25 },
                        visible: { x: 0, y: 0,  rotate: 0}
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "300px",
                        once: false,
                    }}
                    animate={mainControls}
                    transition={{ duration: 1  }}
                ></motion.div>}
                

                {<motion.div 
                    className={styles.circle2}
                    variants={{
                        hidden: {x: -175,y: -65, rotate: -25},
                        visible: { x: 0, y: 0, rotate: 0}
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "100px",
                        once: false,
                    }}
                    animate={mainControls}
                    transition={{ duration: 1  }}
                    >
                </motion.div>}


                {<motion.div 
                    className={styles.circle3}
                    variants={{
                        hidden: {x: -175,y: -65, rotate: -25},
                        visible: { x: 0, y: 0, rotate: 0}
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "300px",
                        once: false,
                    }}                    
                    animate={mainControls}
                    transition={{ duration: 1  }}
                    >
                </motion.div>}


            </motion.div >

            <div className={styles.text}>
                <motion.p 
                    className={styles.title}
                    variants={{
                        hidden: { x: -175,rotate: 1 },
                        visible: { x: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "300px"
                    }}
                    animate={mainControls}
                    transition={{ duration: 1}}
                >
                    NIHAD MAMMADOV
                </motion.p>
                
                <motion.p 
                    className={styles.subtitle}
                    variants={{
                        hidden: { x: -175,rotate: 1  },
                        visible: { x: 0, rotate: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "300px"
                    }}
                    animate={mainControls}
                    transition={{ duration: 1}}
                    >
                        A dedicated Software Engineer who showcases his initial Front-end skills by building this portfolio.
                </motion.p>
            </div>
        </div>
    )
}


export default Body