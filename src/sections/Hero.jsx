import { Button, ShoeCard } from '../components';
import { arrowRight } from '../assets/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import { bigShoe1 } from '../assets/images';
import { shoes, statistics } from '../constants';
import { TypingText } from '../components/CustomTexts';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <TypingText
          title={`Our Summer Collection`}
          textStyles={`text-xl font-montserrat text-coral-red`}
        />
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <motion.span
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className="text-coral-red inline-block mt-3"
          >
            Nike
          </motion.span>{' '}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start item-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.img
          variants={fadeIn('left', 'spring', 0.6, 0.75)}
          src={bigShoeImg}
          alt="big_shoe_image"
          width={610}
          height={500}
          className="relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <motion.div
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
              key={shoe}
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
