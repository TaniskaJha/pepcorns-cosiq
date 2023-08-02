import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      

      <motion.div
        variants={slideIn('left', 'tween', 0.9, 1)}
        className="relative w-full md:-mt-[1px] -mt-[2px] flex w-1/2 justify-end"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

     
        <div className="flex items-center">
          <img
            src="/cosiq.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

       <div className="flex justify-end items-left flex-col relative z-100, w-1/10" style={{ textAlign: 'right' }}>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          <span className="cos">COS</span><span className="iq">IQ</span>
        </motion.h1>

        <motion.h1 variants={textVariant(1.1)} className={styles.sloganHeading}>
          <span className="cos">We make </span>
        </motion.h1>

        <motion.h1 variants={textVariant(1.1)} className={styles.sloganHeading}>
          <span className="cos">Skincare </span>
        </motion.h1>

        <motion.h1 variants={textVariant(1.1)} className={styles.sloganHeading}>
          <span className="cos">Intelligent </span>
        </motion.h1>

      </div>
      </div>
        
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
           
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
