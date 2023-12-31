import { useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { GrClose } from 'react-icons/gr';

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const toggleMobile = () => {
    setMobileToggle((prevMobileToggle) => !prevMobileToggle);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex justify-between items-center max-container "
      >
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>

        {mobileToggle && (
          <ul className=" flex-col absolute right-5 gap-6 top-[70px] hidden max-lg:block ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className=" font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {mobileToggle ? (
          <div className="hidden max-lg:block">
            <GrClose
              color="#BCBCBC"
              width={25}
              height={30}
              onClick={toggleMobile}
            />
          </div>
        ) : (
          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={toggleMobile}
            />
          </div>
        )}
      </motion.nav>
    </header>
  );
};

export default Nav;
