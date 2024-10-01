
const Footer = () => {
  
  return (
    <footer className="w-full text-white py-6 mt-20 z-30">
      <div className="container mx-auto px-6 md:px-12 lg:px-9">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0 macbook-air:text-d-footer iphone-14-plus:text-m-footer ">
          <a href="https://github.com/rayadinkova" target="_blank" rel="noopener noreferrer" >
              Github
            </a>
            <a href="https://www.linkedin.com/in/rayadinkova/" target="_blank" rel="noopener noreferrer" >
              LinkedIn
            </a>
            <a href="https://www.behance.net/d37f052a" target="_blank" rel="noopener noreferrer" >
              Behance
            </a>
            <a href="mailto:rayadinkovadesignss@gmail.com" target="_blank" rel="noopener noreferrer" >
              Email
            </a>
            <a href="https://www.instagram.com/rayadinkova_/" target="_blank" rel="noopener noreferrer" >
              Instagram
            </a>
          </div>

          {/* Copyright Info */}
          <div className=" text-gray-400 iphone-14-plus:text-m-footer macbook-air:text-d-footer">
            &copy; 2024 Raya Dinkova
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
