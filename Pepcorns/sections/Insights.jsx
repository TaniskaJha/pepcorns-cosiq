'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Customers" textStyles="text-center" />
      <TitleText title={<>Building The CosIQ Cult</>} textStyles="text-center" />
      <div className="flex justify-center gap-4 mt-4">
        <img src="insta.png" alt="Image 1" className="w-30 h-10" />
        <img src="amazon.png" alt="Image 2" className="w-30 h-10" />
      </div>
      <div className="mt-[100px] flex flex-col gap-[10px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
