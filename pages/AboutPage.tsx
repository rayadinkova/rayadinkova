import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../layouts/Footer';

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg bg-cover bg-center text-primary">

       {/* Mobile Layout */}
      {isMobile ? (
        <div className="font-primary font-regular mobile-content px-iphone-left-right mt-24">
          <motion.h1
            className="text-m-heading mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            ABOUT
          </motion.h1>

          <motion.p
            className="iphone-14-plus:text-m-body font-light mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A multi-disciplinary designer who combines her talent and passion of UX/UI design with frontend development to create user-centered innovative solutions
          </motion.p>

           {/* Education Section */}
          <motion.div
            className="flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-regular text-m-heading">Education</h2>
            <div className="iphone-14-plus:text-m-body min-w-full font-light mt-5">
              <p className="text-primary">2022 - 2024</p>
              <p className="text-primary">
                AP in Multimedia design and communication<br /> Business Academy Aarhus
              </p>
            </div>
          </motion.div>

           {/* Experience Section */}
          <motion.h2
            className="font-regular text-m-heading mt-16 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experience
          </motion.h2>

          <motion.div
            className="mt-4 font-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="font-light iphone-14-plus:text-m-body">
              <p>Jan 2024 - Mar 2024</p>
              <p>Aarhus, Denmark</p>
            </div>

            <h3 className="font-regular text-m-heading mb-5 mt-2">Internship at OPARKO</h3>

            <div className="font-light iphone-14-plus:text-m-body mb-16">
              <p className="underline">Responsibilities:</p>
              <ul className="list-disc ml-4">
                <li>Running project sprints in SCRUM</li>
                <li>Frontend programming with React and Typescript</li>
                <li>Developing with React hooks, routing and API handling for responsive and scalable front-end applications</li>
                <li>Troubleshooting usability issues on the website</li>
                <li>Assigning and tracking project tasks in Notion</li>
                <li>Graphic design - designing branded posters for advertisement with Adobe Illustrator</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 font-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="font-light iphone-14-plus:text-m-body">
              <p>Aarhus, Denmark</p>
              <p>Feb 2024 - May 2024</p>
            </div>
            <h3 className="font-regular text-m-heading mb-5 mt-2">UX/UI Designer OPARKO</h3>

            <div className="font-light iphone-14-plus:text-m-body">
              <p className="underline">Responsibilities:</p>
              <ul className="list-disc ml-4">
                <li>Development and maintenance of a cohesive design system using Figma, ensuring consistency and scalability across the platform</li>
                <li>Collaboration in task management and assignment through Notion, providing clear and actionable descriptions to streamline the workflow</li>
                <li>Facilitating effective communication and collaboration between the design and development teams to ensure alignment and seamless integration of design elements</li>
              </ul>
            </div>
          </motion.div>

           {/* Current stack Section */}
          <motion.h2
            className="font-primary text-m-heading mt-16 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Current Stack
          </motion.h2>

          <motion.div
            className="flex flex-col space-y-4 iphone-14-plus:text-m-body font-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div>
              <p className="font-light text-accent mb-2">Web development</p>
              <p>React</p>
              <p>Typescript</p>
              <p>Tailwind CSS</p>
            </div>
            <div>
              <p className="font-mono font-light text-accent mb-2">Design</p>
              <p>Figma</p>
              <p>Canva</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
            </div>
            <div>
              <p className="font-light text-accent mb-2">Project management</p>
              <p>Notion</p>
              <p>Miro</p>
            </div>
          </motion.div>

           {/* Additional certificates Section */}
          <motion.h2
            className="font-primary 
            text-m-heading mt-16 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Additional certificates
          </motion.h2>

          <motion.div
            className="flex flex-col space-y-2 font-primary font-light iphone-14-plus:text-m-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex flex-col mb-5">
              <p>From React to React Native</p>
              <a href="https://www.linkedin.com/learning/certificates/b62934d8bcdc4f85d4791f15a1e23595c11d725a2851f9092b1118026927c3db " className="underline text-cta">see credentials</a>
            </div>
            <div className="flex flex-col space-y-2 font-light">
              <p>React Native course</p>
              <a href="https://www.codecademy.com/profiles/rayadinkova/certificates/458aef4eef5f5130685423fc15e6493d " className="underline text-cta ">see credentials</a>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="desktop-content px-macbook-left-right mt-24">

          {/* Desktop Layout */}
          <motion.p
            className="font-primary macbook-air:text-d-about-heading macbook-air:font-regular mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A multi-disciplinary designer who combines her talent and passion of UX/UI design with frontend development to create user-centered innovative solutions
          </motion.p>

          <motion.h2
            className="font-primary macbook-air:text-d-heading mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience
          </motion.h2>

          <motion.div
            className="w-full border-t border-accent mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/* Education Section */}
          <motion.div
            className="desktop-section mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className=" border-secondary flex flex-row justify-between">
              <h2 className="font-primary macbook-air:text-d-subheading">Education</h2>

              <div className="flex flex-col pb-8 pr-80 text-d-body">
                <p className="text-primary font-primary font-light">2022 - 2024</p>
                <p className="text-primary font-primary font-light">
                  AP in Multimedia design and communication <br /> Business Academy Aarhus
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full border-t border-accent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          {/* Experience Section */}
          <motion.div
            className="desktop-section mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="macbook-air:text-d-subheading mb-4">Experience</h2>
            <div className="mt-10">
              <p className="font-primary font-light macbook-air:text-d-body">Aarhus, Denmark</p>
              <p className="font-primary font-light macbook-air:text-d-body">Jan 2024 - Mar 2024</p>
              <h3 className="font-primary font-regular text-d-subheading mt-3">Internship at OPARKO</h3>

              <p className="font-primary font-light macbook-air:text-d-body mt-5 underline">Responsibilities:</p>
              <ul className="font-primary font-light list-disc ml-8">
                <li>Running project sprints in SCRUM</li>
                <li>Frontend programming with React and Typescript</li>
                <li>Developing with React hooks, routing and API handling for responsive and scalable front-end applications</li>
                <li>Troubleshooting usability issues on the website</li>
                <li>Aaaigning and tracking project tasks in Notion</li>
                <li>Graphic design - designing branded posters for advertisement with Adobe Illustrator</li>
              </ul>
            </div>

            <div className="mt-16">
              <p className="font-primary macbook-air:text-d-body font-light">Aarhus, Denmark</p>
              <p className="font-primary macbook-air:text-d-body font-light">Feb 2024 - May 2024</p>
              <h3 className="font-primary font-regular text-d-subheading mt-3">UX/UI Designer OPARKO</h3>

              <p className="font-primary macbook-air:text-d-body mt-5 underline font-light">Responsibilities:</p>
              <ul className="list-disc ml-8 font-primary font-light">
                <li>Development and maintenance of a cohesive design system using Figma, ensuring consistency  <br />and scalability across the platform</li>
                <li>Collaboration in task management and assignment through Notion, providing clear <br /> and actionable descriptions to streamline the workflow</li>
                <li>Facilitating effective communication and collaboration between the design  <br /> and development teams to ensure seamless integration of design elements</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="w-full border-t border-accent mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.7 }}
          />

          {/* Current Stack Section */}
          <motion.div
            className="desktop-section mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="font-primary macbook-air:text-d-heading mb-4">Current Stack</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-left font-primary font-regular">
                <p className="text-accent mb-2">Web development</p>
                <p>React</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
              </div>
              <div className="font-regular *:text-left font-primary">
                <p className="text-accent mb-2">Design</p>
                <p>Figma</p>
                <p>Canva</p>
                <p>Adobe Illustrator</p>
                <p>Adobe Photoshop</p>
              </div>
              <div className="text-left font-primary font-regular">
                <p className="text-accent mb-2">Project management</p>
                <p>Notion</p>
                <p>Miro</p>
              </div>
            </div>
          </motion.div>

          {/* Additional certificates Section */}
          <motion.div
            className="flex flex-col font-regular mt-24 mb-6 font-primary "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h1 className="text-d-heading">Additional certificates</h1>
            <div className="flex flex-col mt-5">
              <div className="flex flex-row font-regular text-d-body mb-3">
                <p>From React to React Native</p>
                <a
                  href="https://www.linkedin.com/learning/certificates/b62934d8bcdc4f85d4791f15a1e23595c11d725a2851f9092b1118026927c3db "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="ml-11 hover:underline hover:text-accent cursor-pointer">see credentials</p>
                </a>
              </div>

              <div className="flex flex-row text-d-body font-regular">
                <p>React Native course</p>

                <a
                  href="https://www.codecademy.com/profiles/rayadinkova/certificates/458aef4eef5f5130685423fc15e6493d "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="ml-24 hover:underline hover:text-accent cursor-pointer">see credentials</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      
      <Footer/>
    </div>


  );
};

export default AboutPage;
