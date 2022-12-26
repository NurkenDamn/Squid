'use client';

import { motion } from "framer-motion";

import styles from "../styles";

import { fadeIn } from "../utils/motion";

const InstructionCard = ({ index, title, text }) => (
  <motion.div
    variants={(index + 1) % 2 ? fadeIn('right', 'tween', index * 0.5, 1) : fadeIn('left', 'tween', index * 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className={`flex flex-col bg-[#523A64] sm:w-[531px] sm:h-[317px] mb-[25px] ${(index + 1) % 2 ? 'sm:ml-[200px] sm:mr-[0px]' : 'sm:ml-[770px] sm:mr-[0px] sm:mt-[-55px]'} rounded-[5px] overflow-hidden shadow-xl`}
  >
    <h2 className="font-extrabold text-[#944B6E] sm:leading-[113px] leading-[56px] sm:text-[96px] text-[76px] ml-[-30px] mt-[25px]">0{index + 1}</h2>
    <h3 className="font-bold sm:text-[24px] text-[18px] sm:leading-[28px] leading-[20px] text-white sm:ml-[100px] ml-[85px] mt-[-35px] sm:mt-[-75px]">{title}</h3>
    <p className="font-normal text-white sm:text-[18px] text-[14px] leading-[27px] sm:mt-[45px] mt-[15px] sm:mx-[100px] ml-[85px] mr-[15px] mb-[25px]">{text}</p>
  </motion.div>
);

export default InstructionCard;
