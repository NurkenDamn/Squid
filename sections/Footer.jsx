'use client';

import { motion } from "framer-motion";

import styles from "../styles";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

import { subscriptionCards } from "../constants";

import { SubscriptionCard } from "../components";

const Footer = () => (
    <section>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`flex flex-col mx-auto relative`}
        >
            <div className={`${styles.xPaddings} flex sm:flex-row flex-col justify-center items-center sm:mt-[175px] mt-[75px]`}>
                {subscriptionCards.map((subscriptionCard, index) => (
                    <SubscriptionCard 
                        key={subscriptionCard.id}
                        index={index}
                        price={subscriptionCard.cost}
                        text={subscriptionCard.text}
                    />
                ))}
            </div>
            <img 
            src="/footerBg.png" 
            alt="footer"
            className="object-contain w-[100vw]" />
        </motion.div>
  </section>
);

export default Footer;
