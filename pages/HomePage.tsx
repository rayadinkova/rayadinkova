import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../layouts/Footer';

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between text-white">

      <main className="iphone-14-plus:mt-8 macbook-air:mt-32 relative z-10 flex flex-col items-start text-left px-4 md:px-8 font-primary justify-center w-full flex-grow">
        <motion.h1
          className="iphone-14-plus:text-m-title md:text-6xl mb-6 leading-normal md:leading-normal w-full"
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.6, delay: 0.3 }} 
        >
          UX/UI Designer <br /> & Frontend Developer
        </motion.h1>
        
        <p className="iphone-14-plus:text-m-body max-w-lg md:max-w-3xl text-d-body md:text-2xl mb-12 w-full">
          <TypeAnimation
            sequence={[
              'I design and develop user-focused digital solutions by combining UX/UI principles with frontend programming',
              3000,
            ]}
            speed={90}
            repeat={0}
          />
        </p>

        <motion.h1
          className="border border-white rounded-full py-3 px-6 text-d-body md:text-xl font-primary hover:bg-white hover:text-black transition duration-300 iphone-14-plus:text-m-body"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.6, delay: 0.3 }}  
        >
          <Link to="/projects">
            See my work
          </Link>
        </motion.h1>

      </main>

      <Footer/>

    </div>
  );
};

export default HomePage;
