'use client';

import styles from "../styles";

import { InstructionCard } from "../components";

import { instructionCards } from "../constants";

const Introduction = () => (
  <div className={`${styles.paddings} flex flex-col relative`}>
    <div className="mt-[0px] sm:mt-[150px]">
        {instructionCards.map((instruction, index) => (
            <InstructionCard
                key={instruction.id} 
                index={index}
                title={instruction.title}
                text={instruction.text} 
            />
        ))}
    </div>
    <img 
        src="/diver2.png" 
        alt="diver"
        className="w-[615px] h-[523px] object-contain absolute left-[955px] top-[100px] sm:block hidden"
    />
    <img 
        src="/diver1.png" 
        alt="diver"
        className="w-[461px] h-[347px] object-contain absolute left-[5%] top-[78%] sm:block hidden"
    />
    <div className="absolute top-[170px] left-[180px]">
            <img src="/bubble1.png" alt="bubble" className="w-[105px] h-[105px] object-contain sm:block hidden" />
    </div>
    <div className="absolute top-[530px] left-[200px]">
        <img src="/bubble2.png" alt="bubble" className="w-[65px] h-[65px] object-contain sm:block hidden" />
    </div>
    <div className="absolute top-[630px] left-[300px]">
        <img src="/bubble1.png" alt="bubble" className="w-[85px] h-[85px] object-contain sm:block hidden" />
    </div>
    <div className="absolute top-[75%] left-[81%]">
            <img src="/bubble1.png" alt="bubble" className="w-[85px] h-[85px] object-contain sm:block hidden" />
    </div>
  </div>
);

export default Introduction;
