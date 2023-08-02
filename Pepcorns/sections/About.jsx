import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="WEBSITE -  https://mycosiq.com ||  AAGCI5003E" textStyles="text-left" />

      {/* Container for the video, image, and button */}
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="w-full mt-[8px] flex flex-col md:flex-row items-center gap-4">
        {/* YouTube Video Embed */}
        <motion.iframe
          src="https://www.youtube.com/embed/kFII05-bhGU"
          className="w-full md:w-[90%] h-[500px]"
          title="COSIQ "
          allowFullScreen
        />

        <div className="md:w-[50%] flex flex-col gap-4">
          {/* Image */}
          <motion.img
            src="invest.png"  // Replace with the actual path to your image
            alt="Your Image"
            className="w-[80%] h-[250px]"
          />

          {/* Button */}
          <motion.button
  className="w-[80%] h-[50px] text-white font-bold rounded-lg bg-gradient-to-l from-blue-500  to-purple-500"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Login To Invest
</motion.button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
