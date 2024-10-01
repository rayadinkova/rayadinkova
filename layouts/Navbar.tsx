import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOptionClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      {isDesktop ? (
        <motion.div
          className="fixed flex justify-between items-center text-primary top-0 left-0 w-full z-30 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Desktop Logo */}
          <Link to="/" className="text-d-logo font-logo ml-11">
            Raya Dinkova
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center px-8 py-2 space-x-56">
          <Link to="/projects" className="text-d-nav font-primary font-light text-primary">
              Projects
            </Link>
            
            <Link to="/about" className="text-d-nav font-primary font-light text-primary">
              About
            </Link>
            <a
              href="mailto:rayadinkovadesignss@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-d-nav font-primary font-light text-primary"
            >
              Say hi
            </a>
          </div>
        </motion.div>
      ) : (
        <div className="py-4 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-bg shadow-md">
          {/* Mobile Logo */}
          <Link to="/" className="text-logo font-logo text-primary">
            Raya Dinkova
          </Link>
          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="text-3xl ml-auto">
            {!menuOpen ? (
              <div className="flex flex-col items-end space-y-2">
                <span className="block w-9 h-0.5 bg-primary"></span>
                <span className="block w-5 h-0.5 bg-primary"></span>
                <span className="block w-7 h-0.5 bg-primary"></span>
              </div>
            ) : (
              <span className="text-3xl">&times;</span>
            )}
          </button>
        </div>
      )}

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <motion.div
            className="fixed inset-0 z-40 bg-black opacity-80 flex flex-col items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <button
              className="absolute top-4 right-4 text-5xl text-primary font-extralight z-50"
              onClick={toggleMenu}
            >
              &times;
            </button>

            {/* Menu Items with Animation */}
            <div className="flex flex-col items-end mt-40 h-full w-full mr-24">
              <motion.ul className="space-y-16 text-right text-m-nav font-primary font-regular text-primary z-50">
                {['Projects','About', 'Say hi'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {item === 'Say hi' ? (
                      <a href="mailto:rayadinkovadesignss@gmail.com" onClick={handleMenuOptionClick}>
                        {item}
                      </a>
                    ) : (
                      <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`} onClick={handleMenuOptionClick}>
                        {item}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
