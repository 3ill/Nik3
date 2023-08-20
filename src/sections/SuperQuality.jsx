import { motion } from 'framer-motion';
import { Button } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components/CustomTexts';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <TitleText
            title={
              <div>
                We provide You <span className="text-coral-red">Super</span>{' '}
                <span className="text-coral-red">Quality</span> Shoes
              </div>
            }
          />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Delivering utmost comfort and style, our carefully crafted footwear is
          intended to enhance your journey, offering unparalleled quality,
          innovation, and a hint of sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Shop now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <motion.img
          variants={fadeIn('left', 'spring', 0.5, 0.75)}
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </motion.section>
  );
};

export default SuperQuality;
