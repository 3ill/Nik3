import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { products } from '../constants';
import { TitleText } from '../components/CustomTexts';
import { PopularProductCard } from '../components';

const PopularProducts = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <TitleText
          title={
            <div>
              Our <span className="text-coral-red">Popular</span> Products
            </div>
          }
          textStyles={`text-4xl font-palanquin font-bold`}
        />
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore the epitome of quality and style with our coveted collection.
          Immerse yourself in a universe of comfort, design, and value, where
          excellence awaits your discovery
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {products.map((product, index) => (
          <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            key={product.name}
          >
            <PopularProductCard key={product.name} {...product} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PopularProducts;
