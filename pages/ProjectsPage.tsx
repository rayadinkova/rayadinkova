import { useState, useEffect } from 'react';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

type LinkType = {
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
  links?: LinkType[];
};

type ProjectCategories = {
  Grundfos: Project[];
  Webapp: Project[];
  Smukfest: Project[];
  'Indisk food app': Project[];
  'Waffle & Co': Project[];
  BeatBlitz: Project[];
  Galias: Project[];
};

const ProjectsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleProjects((prev) => prev + 2); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: ProjectCategories = {
    Grundfos: [
      {
        id: 1,
        name: 'Grundfos',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/Grundfos.svg',
        description: "Student Colegium's Infoscreen Redesign",
      },
    ],
    Webapp: [
      {
        id: 2,
        name: 'Webapp',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/Webapp.svg',
        description: 'Movie Catalogue App',
      },
    ],
    Smukfest: [
      {
        id: 3,
        name: 'Smukfest',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/SmukfestSVG.svg',
        description: 'Music Festival App Redesign',
      },
    ],
    'Indisk food app': [
      {
        id: 4,
        name: 'Indisk food app',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/Indisk.svg',
        description: 'Local Indian Restaurant App Design',
      },
    ],
    'Waffle & Co': [
      {
        id: 5,
        name: 'Waffle & Co',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/Waffle.svg',
        description: 'Premium Waffles App Design',
      },
    ],
    BeatBlitz: [
      {
        id: 6,
        name: 'BeatBlitz',
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/BeatBlitz.svg',
        description: 'Play to Earn Music NFT Game App',
      },
    ],
    Galias: [
      {
        id: 7,
        name: "Galias",
        image: 'https://storage.googleapis.com/portfolio-website-svg-bucket/Galias.png',
        description: 'Homemade Jewelry Project',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg bg-cover bg-center text-primary mt-32">
      
      {/* Desktop version */}
      {!isMobile ? (
        <div className="grid grid-cols-3 gap-8 pl-8 pr-8"> 
          {Object.keys(projects).map((category) =>
            projects[category as keyof ProjectCategories].slice(0, visibleProjects).map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg"
                style={{ height: '300px' }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-85 transition duration-500 flex justify-center items-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                    <h3 className="text-d-subheading font-primary font-bold">{project.name}</h3>
                    <p className="text-d-body mb-4 text-accent">{project.description}</p>
                    <Link to={`/projects/${project.name}`}>
                      <button className="mt-1 px-4 py-2 bg-transparent text-white hover:text-black hover:bg-white border font-primary rounded-full">
                        See project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="mobile-content mt-10 w-full px-4">
          <div className="grid grid-cols-1 gap-6 mb-8">
            {Object.keys(projects).map((category) =>
              projects[category as keyof ProjectCategories].map((project) => (
                <div key={project.id} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-85 transition duration-500 flex justify-center items-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                      <h3 className="text-m-projects-name font-primary font-bold">{project.name}</h3>
                      <p className="text-m-projects-description mb-4 text-accent">{project.description}</p>
                      <Link to={`/projects/${project.name}`}>
                        <button className="mt-1 px-4 py-2 bg-transparent text-white hover:text-black hover:bg-white border font-primary rounded-full">
                          See project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectsPage;
