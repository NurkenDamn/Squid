'use client';

import { motion } from 'framer-motion';

import { navVariants  } from '../utils/motion'

import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 flex justify-between items-center relative`}
  >
        <img
            src="/logo.png" 
            alt="logo"
            className="sm:w-[114px] w-[74px] sm:h-[113px] h-[73px] object-contain" />
        <div className="flex-[0.25] flex items-center">
            <p className="sm:text-[18px] text-[12px] text-white font-normal mr-[10px]">Sign in</p>
            <p className="sm:text-[18px] text-[12px] text-white font-normal border-[1px] border-white rounded-[5px] px-[25px] py-[6px] sm:px-[58px] sm:py-[10px]">Sign up</p>
        </div>
  </motion.nav>
);

export default Navbar;
