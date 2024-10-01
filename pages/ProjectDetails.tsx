import { useParams, Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

interface Project {
  id: number;
  name: string;
  type: string;
  duration: string;
  description: string;
  technologies: string[];
  links?: { label: string; url: string }[];
  galleryImage: string;
}

const projects: { [key: string]: Project } = {
  Grundfos: {
    id: 1,
    name: 'Grundfos',
    type: 'Academic',
    duration: 'October 2022 - November 2022',
    description:
      "Grundfos Kollegiet is a newly built student dormitory near the city centre of Aarhus, for which me and a group of 4 fellow designers, developed a digital solution for the dormitory's infoscreen.",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Github Desktop', 'AdobeXD'],
    links: [
      { label: 'Report', url: 'https://docs.google.com/document/d/11izIYnbbKnQsOJGcbhBpgi2k2vYxmlvdw7IrhjqpK08/edit?usp=sharing' },
      { label: 'GitHub', url: 'https://github.com/rayadinkova/Grundfos' },
    ],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/GrundfosProject.svg',
  },
  Webapp: {
    id: 2,
    name: 'Webapp',
    type: 'Academic',
    duration: 'September 2023 - November 2023',
    description:
      'Webapp is a 3rd semester academic project focused on creating a Movie Catalogue App. The product targets movie collectors allowing them to catalogue and manage their movie collections.',
    technologies: ['React', 'Firebase', 'GitHub Desktop', 'Figma'],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/design/A7A0omOxkfpv7cW1KqynDp/Webapp?node-id=0-1&node-type=canvas&t=8CRfBOWYogXZC6tZ-0' },
      { label: 'Canva', url: 'https://www.canva.com/design/DAFw8k6wbR0/yongDgPCq4GtJwyjzEqKrA/view?utm_content=DAFw8k6wbR0&utm_campaign=designshare&utm_medium=link&utm_source=editor#1'},
      { label: 'GitHub', url: 'https://github.com/rayadinkova/WebApp' },
    ],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/WebappProject.svg',
  },
  Smukfest: {
    id: 3,
    name: 'Smukfest',
    type: 'Academic',
    duration: 'March 2023 - April 2023',
    description:
      'Smukfest is a 2nd semester academic project focused on redesigning the app of one of Denmark most anticipated music festivals.',
    technologies: ['Figma'],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/proto/qRHqmGD4MRwBdKDqOhjmY0/Smukfest-project?page-id=0%3A1&node-id=476-1291&viewport=-7365%2C472%2C0.27&scaling=scale-down&starting-point-node-id=389%3A1350&show-proto-sidebar=1' },
    ],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/SmukfestProjectSVG.svg',
  },
  'Indisk food app': {
    id: 4,
    name: 'Indisk',
    type: 'Side project',
    duration: 'June 2023',
    description: 'Local Indian restaurant native application. The history behind the development of the app starts by me taking a one-week React Native online course by the Coursera platform. The application was my playground for practicing what I had learned. I developed it for less than a month - 3 weeks, including designing each page in Figma.',
    technologies: ['React Native', 'Expo Go', 'Figma', 'Adobe Illustration'],
    links: [{ label: 'Github', url: 'https://github.com/rayadinkova/Indisk-food-app' }],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/IndiskProject.svg', 
  },
  'Waffle & Co': {
    id: 5,
    name: 'Waffle & Co',
    type: 'Side project',
    duration: 'January 2024',
    description: 'Combining the charm of a cozy café, Waffle & Co is an app that introduces a user-friendly user interface that allows customers to easily order premium waffles.',
    technologies: ['Figma', 'Adobe Illustration'],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/WaffleCoProject.svg', 
  },
  BeatBlitz: {
    id: 6,
    name: 'BeatBlitz',
    type: 'Side project',
    duration: 'July 2024 - September 2024',
    description: 'BeatBlitz project introduces the Beats Blitz App - a “Play to Earn” Music NFT mobile game, wrapped within a social music competition.',
    technologies: ['Figma', 'Adobe Illustration'],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/BeatBlitzProject.svg', 
  },
  Galias: {
    id: 7,
    name: "Galias",
    type: 'Side project',
    duration: '2022',
    description: "Galias is a jewelry store project involving product design, production, print, product photography, and social media content creation. It all began 3 years ago, when the self-made polymer clay jewels were a hot trend. Of course I had to try it myself, so I got my hands dirty. Not only did my production look good, but I also fell in love with the process! I didn't stop there. As always, my high ambitions led me towards a bigger thinking. Thorough research of target audience, information analysis and iteration, craftig a brand identity, designing and ordering print materials such as business and greeting cards, introducing the product to social media. I also had thoughts about a marketing strategy and a pricing model. However, due to the large spectrum and my insufficient skills to cover its demands (marketing and business development), as I was the only person managing it, I had to put the project on pause and focus on gathering skills for its further development. I would say that Galias is an idea I had developed just for fun, but I definately see its potential for becoming a small venture one day.",
    technologies: ['Figma', 'Adobe Illustration', 'Adobe Photoshop'],
    links: [{ label: 'Instagram', url: 'https://www.instagram.com/galiascraftshouse/' }],
    galleryImage: 'https://storage.googleapis.com/portfolio-website-svg-bucket/GaliasProject.svg', 
  }
};

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>(); 

  if (!projectId || !projects[projectId]) {
    return <div>Project not found</div>;
  }

  const project: Project = projects[projectId];

  return (
    <div className="min-h-screen bg-bg bg-cover bg-center text-primary mt-20 font-primary">

      {/* Breadcrumbs */}
      <nav className="p-4 text-m-body font-primary text-accent mb-2">
        <Link to="/projects" className="text-accent underline">Projects</Link> / <span>{project.name}</span>
      </nav>

      {/* Project Details */}
      <div className="pl-4 pr-8 font-primary">
        <h1 className="text-m-heading font-bold">{project.name}</h1>
        <p className="text-m-body mt-2">Project type: {project.type}</p>
        <p className="text-m-body">Project duration: {project.duration}</p>
        <p className="text-lg mt-4 mb-6">{project.description}</p>

        {/* Technologies Used */}
        <h3 className="text-m-body font-bold mb-2">Technologies used:</h3>
        <ul className="list-disc ml-5 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {/* Project Links */}
        {project.links && project.links.length > 0 && (
          <>
            <h3 className="text-m-body font-bold mb-2">Project links:</h3>
            <ul className="list-disc ml-5 mb-4">
              {project.links.map((link: { label: string; url: string }, index: number) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Full-width Gallery Image */}
      <div className="mt-8">
        <img
          src={project.galleryImage}
          alt={project.name}
          className="w-full object-cover"
          loading="lazy" 
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
