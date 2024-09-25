import { useState, useEffect } from 'react';

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsDesktop(true); 
      } else {
        setIsDesktop(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col mt-10">   
      <footer className="bg-bg bg-cover bg-center w-full mt-auto text-primary text-m-body font-mono">
        <div className="container py-3 mx-0">
          {isDesktop ? (
            <div className="flex justify-between items-center">
              <div className="flex space-x-8 text-d-nav mb-3">
                <a href="https://github.com/rayadinkova" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/rayadinkova/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.behance.net/d37f052a" target="_blank" rel="noopener noreferrer">Behance</a>
                <a href="mailto:rayadinkovadesignss@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a href="https://www.instagram.com/rayadinkova_/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>

              <div className="text-right text-d-nav">
                <p>© 2024</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 text-m-nav-links">
              <div className="flex flex-col space-y-6">
                <a href="https://github.com/rayadinkova" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/rayadinkova/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.behance.net/d37f052a" target="_blank" rel="noopener noreferrer">Behance</a>
              </div>

              <div className="flex flex-col space-y-6">
                <a href="mailto:rayadinkovadesignss@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>   
                <a href="https://www.instagram.com/rayadinkova_/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>

              <div className="text-right col-span-2 text-m-nav-links">
                <p>© 2024</p>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
