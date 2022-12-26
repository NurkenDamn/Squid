'use client';

import { motion } from 'framer-motion';

import { fadeIn, slideIn, staggerContainer, textVariant  } from '../utils/motion'

import styles from '../styles';

const Header = () => (
  <section className={`${styles.xPaddings} sm:px-[24px] px-[6px]`}>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} flex flex-col mx-auto relative`}
    >
        <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
        >
            <img 
                src="/squid.png" 
                alt="squid"
                className="" />
        </motion.div>
        <motion.h1
            variants={textVariant(1.1)}
            className="mx-auto font-bold lg:text-[61px] md:text-[34px] sm:text-[24px] text-[18px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white"
        >
            Callback to the website
        </motion.h1>
        <motion.p
            variants={textVariant(1.1)}
            className="mx-auto font-normal lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px] sm:leading-[34.4px] leading-[20px] text-white text-center"
         >
            Get 3 times more calls immediately after installing the widget on your website
            The service pays for its annual tariff in the first week
        </motion.p>
        <motion.button
            variants={fadeIn('left', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            type="button"
            className="bg-[#D75C78] sm:w-[220px] w-[82px] sm:h-[52px] h-[42px] flex justify-center items-center text-white font-normal sm:text-[24px] text-[16px] sm:leading-[24px] mx-auto sm:mt-[30px] mt-[20px] sm:mb-[30px] mb-[20px] rounded-[5px] shadow-2xl"
        >
            To Plug
        </motion.button>
        <div className="absolute top-[650px] left-[-140px]">
            <img src="/bubble1.png" alt="bubble" className="w-[105px] h-[105px] object-contain" />
        </div>
        <div className="absolute top-[750px] left-[-80px]">
            <img src="/bubble2.png" alt="bubble" className="w-[65px] h-[65px] object-contain" />
        </div>
        <div className="absolute top-[825px] left-[-110px]">
            <img src="/bubble1.png" alt="bubble" className="w-[25px] h-[25px] object-contain" />
        </div>
    </motion.div>
  </section>
);

export default Header;
