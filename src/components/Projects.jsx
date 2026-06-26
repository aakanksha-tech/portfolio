import { useState } from 'react';
import { Github, ExternalLink, X, Calendar, Globe, Cpu } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'CRM & Full Stack' },
    { id: 'ai', label: 'AI Cyber Security' },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'AI Vulnerabilities Detector',
      category: 'ai',
      description: 'An AI-powered cybersecurity web application that detects SQLi and XSS vulnerabilities using LLM intelligence.',
      image: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      tech: ['React.js', 'Express.js', 'Google Gemini API', 'Web Security'],
      github: 'https://github.com/aakanksha-tech',
      demo: 'https://github.com/aakanksha-tech',
      date: '2026',
      details: 'Developed an AI-powered cybersecurity web application for vulnerability assessment and threat detection. Implemented automated SQL Injection (SQLi) and Cross-Site Scripting (XSS) detection using React.js, Express.js, and Google Gemini API. Created features for security reporting and code analysis to improve application security. Presented this project at a technology expo, attracting investor interest.',
    },
    {
      id: 2,
      title: 'Customer Relationship Management (CRM)',
      category: 'fullstack',
      description: 'A responsive business process platform featuring ticket management, task allocation, and workflow tracking.',
      image: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      tech: ['React.js', 'Bootstrap', 'JavaScript', 'Node.js', 'Workflow Automation'],
      github: 'https://github.com/aakanksha-tech',
      demo: 'https://github.com/aakanksha-tech',
      date: '2025',
      details: 'Developed a comprehensive Customer Relationship Management (CRM) system using modern web technologies. Configured custom modules for ticket management, employee task allocation, workflow automation, and status tracking. Improved customer support operations and business process efficiency through user-friendly responsive user interfaces.',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="projects-section reveal">
      <h2 className="section-title">My Projects</h2>

      {/* Filter Tabs */}
      <div className="filter-container">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="project-card glass-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-banner" style={{ background: project.image }}>
              <div className="banner-overlay">
                <span className="banner-tag">{project.category === 'ai' ? 'AI' : 'Full Stack'}</span>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
                {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3} more</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X />
            </button>
            <div className="modal-body">
              <div className="modal-banner" style={{ background: selectedProject.image }}>
                <h2>{selectedProject.title}</h2>
              </div>
              <div className="modal-details">
                <div className="metadata-row">
                  <span className="meta-item"><Calendar size={16} /> {selectedProject.date}</span>
                  <span className="meta-item"><Cpu size={16} /> {selectedProject.category.toUpperCase()}</span>
                </div>
                <p className="modal-description">{selectedProject.details}</p>
                <div className="tech-list">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn">
                    <Github size={18} /> View Code
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                    <Globe size={18} /> Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
