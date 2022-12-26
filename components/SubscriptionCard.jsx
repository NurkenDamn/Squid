'use client';

import styles from "../styles";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const SubscriptionCard = ({ index, price, text }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative flex flex-col items-center justify-center sm:w-[500px] sm:h-[702px] w-[400px] h-[462px]`}
    >
        <img 
        src='/cardBg2.png' 
        alt='subscription card'
        className="absolute w-full h-full object-contain rounded-[5px]"
        />
        <div className="z-10 flex flex-col justify-center items-center sm:w-[262px] w-[202px] sm:gap-4 gap-12 mt-[-75px]">
            <h2 className="sm:text-[48px] text-[18px] text-white sm:leading-[72px] leading-[36px] font-bold">{price}</h2>
            <p className="sm:text-[24px] text-[12px] text-white sm:leading-[36px] leading-[18px] font-medium">{text}</p>
            <button className="sm:text-[36px] text-[18px] text-white sm:leading-[42px] leading-[24px] font-normal border-[2px] border-white rounded-[5px] px-[58px] py-[6px] sm:py-[0px]">TRY IT</button>
        </div>
    </motion.div>
);

export default SubscriptionCard;
