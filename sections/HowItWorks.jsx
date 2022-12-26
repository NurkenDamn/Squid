'use client';

import { motion } from "framer-motion";

import { textVariant, fadeIn } from "../utils/motion";

import { TitleText } from "../components/CustomTexts";

import styles from "../styles";

const HowItWorks = () => (
  <div className="flex flex-col items-start justify-center">
    <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className={`${styles.paddings} flex-[0.75] flex justify-center flex-col`}
        >
            <TitleText title={<>Watch the video how the widget works</>} />
    </motion.div>
    <div className="w-[100%] sm:h-[655px] h-[355px] bg-[#414141] flex justify-center items-center">
        <img 
            src="/playIcon.png" 
            alt="play icon"
            className="object-contain" />
    </div>
  </div>
);

export default HowItWorks;
 