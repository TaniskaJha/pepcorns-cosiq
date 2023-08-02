'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Let's Check Company Insights
          </>
         
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px]  w-full h-[600px] "
      >
        <img src="/Collage.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-50 right-100 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="s3.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-50 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/s4.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-50 left-[47%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="s5.png" alt="people" className="w-[100%] h-[100%]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
