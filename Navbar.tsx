import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { AnimatePresence } from 'framer-motion'; 

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  // Handle resizing of the window
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
      if (window.innerWidth < 1280) {
        setIsPopupOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleProjectsClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (isDesktop) {
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
          className="flex justify-between items-center p-4 text-primary fixed top-0 left-0 w-full bg-bg z-3 shadow-md" // Makes desktop navbar sticky at the top
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.5, delay: 0.5}}
        >
          <Link to="/" className="text-logo font-celebrate">Raya Dinkova</Link> 
          <div className="flex items-center">
            <div className="font-mono font-light text-accent mr-[124px]">(Digital creative)</div>
            <span
              onClick={handleProjectsClick}
              className={`cursor-pointer mr-[164px] text-d-nav font-mono font-light transition-colors duration-300 ${
                isPopupOpen ? 'text-cta' : 'text-primary'
              }`}
            >
              PROJECTS
            </span>
            <Link to="/about" className="mr-[164px] text-d-nav font-mono font-light">
              ABOUT
            </Link>
            <a href="mailto:rayadinkovadesignss@gmail.com" target="_blank" rel="noopener noreferrer" className="mr-[32px] text-d-nav font-mono font-light">
              Say hi
            </a>
          </div>
        </motion.div>
      ) : (
        <div className="py-4 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-3 bg-bg shadow-md">
          <Link to="/" className="text-logo font-celebrate text-primary">Raya Dinkova</Link> {/* Link logo to home page */}
          <button onClick={toggleMenu} className="text-3xl">
            {!menuOpen ? (
              <div className="space-y-2">
                <span className="block w-9 h-0.5 bg-primary ml-auto"></span>
                <span className="block w-5 h-0.5 bg-primary ml-auto"></span>
                <span className="block w-7 h-0.5 bg-primary ml-auto"></span>
              </div>
            ) : (
              <span className="text-3xl">&times;</span>
            )}
          </button>
        </div>
      )}

      {isDesktop && (
        <motion.div
          className={`fixed inset-0 z-40 bg-primary flex justify-center items-center transition-opacity duration-500 ${
            isPopupOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          initial={{ y: '-100%' }} 
          animate={isPopupOpen ? { y: 0 } : { y: '-100%' }} 
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <button
            className="absolute top-4 right-4 text-4xl font-extralight z-50"
            onClick={handleClosePopup}
          >
            &times;
          </button>

          {/* Popup Content */}
          <motion.div
            className="relative text-secondary p-12 max-w-[90%] z-40 rounded-lg opacity-90"
            initial={{ y: '100%' }}
            animate={isPopupOpen ? { y: 0 } : { y: '100%' }} 
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Academic and Side Projects Sections */}
            <div className="flex justify-center gap-x-48">
              {/* Academic Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isPopupOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-d-nav font-light font-mono mb-6">Academic</h3>
                <ul className="space-y-4 font-celebrate text-d-nav-items">
                  {['Grundfos', 'Webapp', 'Smukfest'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isPopupOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      <Link to={`/projects`} className="hover:underline" onClick={handleClosePopup}>
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Side Projects Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isPopupOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-d-nav font-light font-mono mb-6">Side Projects</h3>
                <ul className="space-y-4 font-celebrate text-d-nav-items">
                  {['Indisk food app', 'Waffle & Co', 'BeatBlitz'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isPopupOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      <Link to="/projects" className="hover:underline" onClick={handleClosePopup}>
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
      {menuOpen && !isDesktop && (
        <motion.div
          className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center"
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
            <motion.ul className="space-y-16 text-right text-4xl font-mono font-regular text-primary">
              {['Projects', 'About', 'Say hi'].map((item, index) => (
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
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      onClick={handleMenuOptionClick}
                    >
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
