import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import './styles/tailwind.css';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0); 
  const [loadingComplete, setLoadingComplete] = useState(false); 
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true); 
          }, 100); 
          setTimeout(() => {
            setLoadingComplete(true); 
          }, 1000);
        }
        return nextProgress;
      });
    }, 12); 

    return () => clearInterval(interval);
  }, []);

  if (!loadingComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[rgb(13,13,13)]">
        <h1
          className={`text-white text-6xl font-primary transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {loadingProgress}%
        </h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen w-full">
        <div className="mx-4 iphone-14-plus:mx-4 macbook-air:mx-6 flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
