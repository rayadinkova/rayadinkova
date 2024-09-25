import React, { useState, useEffect } from 'react';

type Link = {
  label: string;
  url: string;
};

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  technologies?: string[];
  galleryImages?: string[];
  links?: Link[];
};

type ProjectCategories = {
  Grundfos: Project[];
  Webapp: Project[];
  Smukfest: Project[];
  'Indisk food app': Project[];
  'Waffle & Co': Project[];
  BeatBlitz: Project[];
};

const ProjectsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof ProjectCategories>('Grundfos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSelectedProject(projects['Grundfos'][0]);
  }, []); 

  const projects: ProjectCategories = {
    Grundfos: [
      {
        id: 1,
        name: 'Grundfos',
        image: '/images/Grundfos.svg',
        description:
          'Grundfos Kollegiet is a newly built student dormitory near the city centre of Aarhus, for which me and a group of 4 fellow designers, developed a digital solution for the dormitory infoscreen.',
        technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'AdobeXD'],
        links: [
          { label: 'Report', url: 'https://docs.google.com/document/d/11izIYnbbKnQsOJGcbhBpgi2k2vYxmlvdw7IrhjqpK08/edit?usp=sharing' },
          { label: 'Github', url: 'https://github.com/rayadinkova/Grundfos.git' },
        ],
        galleryImages: ['/images/GrundfosProject.svg'],
      },
    ],
    Webapp: [
      {
        id: 2,
        name: 'Webapp',
        image: '/images/Webapp.svg',
        description:
          'Webapp is a 3rd semester academic project focused on creating a Movie Catalogue App. The product targets movie collectors allowing them to catalogue and manage their movie collections.',
        technologies: ['React', 'Firebase', 'Figma'],
        links: [
          { label: 'Figma', url: 'https://www.figma.com/design/A7A0omOxkfpv7cW1KqynDp/Webapp' },
          { label: 'Canva', url: 'https://www.canva.com/design/DAFw8k6wbR0/yongDgPCq4GtJwyjzEqKrA/view?utm_content=DAFw8k6wbR0&utm_campaign=designshare&utm_medium=link&utm_source=editor#1' },
          { label: 'Github', url: 'https://github.com/rayadinkova/WebApp.git' },
        ],
        galleryImages: ['/images/WebappProject.svg'],
      },
    ],
    Smukfest: [
      {
        id: 2,
        name: 'Smukfest',
        image: '/images/Smukfest.svg',
        description:
          'Smukfest is a 2nd semester academic project focused on redesigning the app of one of Denmark most anticipated music festivals.',
        technologies: ['Figma'],
        links: [
          { label: 'Figma', url: 'https://www.figma.com/proto/qRHqmGD4MRwBdKDqOhjmY0/Smukfest-project?page-id=0%3A1&node-id=476-1291&viewport=-7365%2C472%2C0.27&scaling=scale-down&starting-point-node-id=389%3A1350&show-proto-sidebar=1' },
        ],
        galleryImages: ['/images/SmukfestProject.svg'],
      },
    ],
    'Indisk food app': [
      {
        id: 4,
        name: 'Indisk food app',
        image: '/images/Indisk.svg',
        description: '',
        technologies: ['React Native', 'Expo Go', 'Figma', 'Adobe Illustrator'],
        links: [{ label: 'Github', url: 'https://github.com/rayadinkova/Indisk-food-app.git' }],
        galleryImages: ['/images/IndiskProject.svg'],
      },
    ],
    'Waffle & Co': [
      {
        id: 5,
        name: 'Waffle & Co',
        image: '/images/Waffle.svg',
        description:
          'Combining the charm of a cozy café, Waffle & Co is an app that introduces a user-friendly user interface that allows customers to easily order premium waffles.',
        technologies: ['Figma', 'Adobe Illustrator'],
        galleryImages: ['/images/WaffleCoProject.svg'],
      },
    ],
    BeatBlitz: [
      {
        id: 6,
        name: 'BeatBlitz Project',
        image: '/images/BeatBlitz.svg',
        description: 'BeatBlitz project introduces the Beats Blitz APP - a “Play to Earn” Music NFT mobile game, wrapped within a social music competition.',
        technologies: ['Figma', 'Adobe Illustrator'],
        galleryImages: ['/images/BeatBlitzProject.svg'],
      },
    ],
  };

  const handleProjectSelect = (project: Project, category: keyof ProjectCategories) => {
    setSelectedProject(project);
    setSelectedCategory(category); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg bg-cover bg-center text-primary mt-16">
      {isMobile ? (
      <div className="mobile-content mt-10 w-full"> 
     <h3 className="text-primary font-mono text-m-heading mb-12">PROJECTS</h3>

      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => handleProjectSelect(projects[category as keyof ProjectCategories][0], category as keyof ProjectCategories)}
            className={`border border-accent px-4 py-2 rounded-full text-m-about-body ${
              selectedProject?.name === projects[category as keyof ProjectCategories][0].name ? 'bg-cta text-secondary' : 'text-primary'
            }`}
          >
            {projects[category as keyof ProjectCategories][0].name}
          </button>
        ))}
      </div>

          {selectedProject && (
            <div className="w-full p-0"> {/* Set width to full and removed padding */}
              <h2 className="font-mono font-regular text-m-about-heading mb-5">{selectedProject.name}</h2>
              <p className="text-m-about-body font-mono font-light mt-2 mb-5">{selectedProject.description}</p>

              {/* Technologies */}
              {selectedProject.technologies && (
                <div className="mt-4 font-mono text-m-about-body mb-5">
                  <h4 className="font-light mb-3">Technologies used:</h4>
                  <ul className="list-disc ml-5">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {selectedProject.links && (
                <div className="mt-4 font-mono text-m-about-body mb-5">
                  <h4 className="font-regular mb-3">Project links:</h4>
                  <ul className="list-disc ml-5">
                    {selectedProject.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery Images */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div className="flex flex-col mt-4">
                  {selectedProject.galleryImages.map((img, index) => (
                    <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-auto object-cover" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="desktop-content flex h-screen">
          {/* Left Side: Categories */}
          <div className="w-1/5 px-iphone-left-right macbook-left-right py-8">
            <div>
              <h3 className="text-primary font-mono text-d-body font-light mb-4">Categories</h3>
              <div className="w-full border-t border-accent mb-10"></div>

              <ul className="space-y-4 font-mono">
                <div className="mb-12">
                  <li className="mt-6 mb-2 text-accent tracking-wider text-sm font-light">Academic</li>
                  {['Grundfos', 'Webapp', 'Smukfest'].map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer text-primary text-d-subheading font-light mt-2 ${
                        selectedCategory === category ? 'text-violet-200' : ''
                      }`} // Add violet color when selected
                      onClick={() => setSelectedCategory(category as keyof ProjectCategories)}
                    >
                      {category}
                    </li>
                  ))}
                </div>

                <div>
                  <li className="mt-6 mb-2 text-accent text-sm font-light tracking-wider">Side projects</li>
                  {['Indisk food app', 'Waffle & Co', 'BeatBlitz'].map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer text-primary text-d-subheading font-light mt-2 ${
                        selectedCategory === category ? 'text-violet-200' : ''
                      }`} // Add violet color when selected
                      onClick={() => setSelectedCategory(category as keyof ProjectCategories)}
                    >
                      {category}
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>

          {/* Right Side: Project Overview */}
          <div className="w-4/5 macbook-air:px-macbook-left-right py-8">
            {/* Overview Header */}
            <div className="sticky top-0 bg-bg z-10">
              <h3 className="text-primary font-mono font-light text-d-body mb-4">Overview</h3>
              <div className="w-full border-t border-accent mb-4"></div>
            </div>

            {/* Project Content */}
            <div className="overflow-y-scroll max-h-[calc(100vh-80px)] scrollbar-hide">
              {projects[selectedCategory].map((project: Project) => (
                <div key={project.id} className="flex flex-col space-y-4 mb-8 font-mono">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                  <h2 className="text-primary font-mono text-xl">{project.name}</h2>
                  <p className="text-d-body font-light">{project.description}</p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div>
                      <h4 className="font-regular">Technologies used:</h4>
                      <ul className="list-disc ml-5 font-light">
                        {project.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  {project.links && (
                    <div>
                      <h4 className="font-regular">Project links:</h4>
                      <ul className="list-disc ml-5 font-light">
                        {project.links.map((link, index) => (
                          <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Gallery Images */}
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="flex flex-col">
                      {project.galleryImages.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-auto object-cover" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
