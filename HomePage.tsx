import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  // Animation variant for simple fade-in
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg bg-cover bg-center text-primary">
      <div className="text-center iphone-14-plus:max-w-xs macbook-air:max-w-2xl">
        <motion.h2
          className="font-mono iphone-14-plus:text-m-body macbook-air:text-d-body font-light block macbook-air:hidden mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 1, duration: 1 }} 
        >
          &lt;Digital creative/&gt;
        </motion.h2>
      </div>

      <motion.div
        className="text-center macbook-air:mt-40 mb-16 iphone-14-plus:max-w-xs macbook-air:max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 1, duration: 1 }} 
      >
        <p className="font-mono iphone-14-plus:text-m-body macbook-air:text-d-body font-light">
          <TypeAnimation
            sequence={[
              'I design and develop user-focused digital solutions by combining UX/UI principles with front-end programming',
              3000, 
            ]}
            speed={70} 
            repeat={0} 
          />
        </p>
      </motion.div>

      {/* Web Development and UX/UI Design */}
      <motion.div
        className="iphone-14-plus:flex iphone-14-plus:flex-col iphone-14-plus:space-y-4 macbook-air:flex macbook-air:flex-row macbook-air:items-center macbook-air:justify-center macbook-air:space-x-12 macbook-air:w-full macbook-air:max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 1, duration: 1 }} 
      >
        <motion.div
          className="iphone-14-plus:text-m-about-heading macbook-air:text-d-subheading font-mono font-regular"
        >
          WEB DEVELOPMENT
        </motion.div>
        <motion.div
          className="iphone-14-plus:text-m-about-heading macbook-air:text-d-subheading font-mono font-regular pb-4"
        >
          UX/UI DESIGN
        </motion.div>
      </motion.div>

      <motion.div
        className={`flex ${
          isMobile ? 'flex-col items-center space-y-8' : 'flex-row justify-between space-x-96'
        } mt-24`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 1, duration: 1 }}
      >
       
        <motion.div className="flex items-center space-x-4 group cursor-pointer">
          {!isMobile && (
            <div className="h-10 w-10 rounded-full bg-primary group-hover:h-4 group-hover:w-4 transition-all duration-500 ease-in-out"></div>
          )}

          <Link to="/projects">
            <motion.span
              className="font-celebrate iphone-14-plus:text-m-cta iphone-14-plus:text-center macbook-air:text-d-cta text-cta font-bold group-hover:text-cta transition-all duration-500 ease-in-out"
            >
              Projects
            </motion.span>
          </Link>
        </motion.div>

        <motion.div className="flex items-center space-x-4 group cursor-pointer">
          <a href="mailto:rayadinkovadesignss@gmail.com">
            <motion.span
              className="font-celebrate iphone-14-plus:text-m-cta text-cta iphone-14-plus:text-center macbook-air:text-d-cta font-bold group-hover:text-cta transition-all duration-500 ease-in-out"
            >
              Say hi
            </motion.span>
          </a>

          {!isMobile && (
            <div className="h-10 w-10 rounded-full bg-primary group-hover:h-4 group-hover:w-4 transition-all duration-500 ease-in-out"></div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
