import React from "react";
import styles from "../style";

import GetStarter from './GetStarted'

// Assets
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mb-10`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-16">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">  20% </span>
            Discount For <span className="text-white">1 Month </span>
            Account
          </p>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"/>{" "}
            <span className="text-gradient">Generation</span> {" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarter />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

      </div>

      <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
        <img src={robot} alt="Billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};  

export default Hero;
