import { Award, Briefcase, GitBranch } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { icon: <Award className="stat-icon" />, label: 'BTech CGPA', value: '7.67' },
    { icon: <Briefcase className="stat-icon" />, label: 'Internships', value: '2 Completed' },
    { icon: <GitBranch className="stat-icon" />, label: 'Certifications', value: '2 Earned' },
  ];

  return (
    <section id="about" className="about-section reveal">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-img-container">
          <div className="img-frame">
            <img src="/developer_avatar.png" alt="Developer Illustration" className="about-img" />
          </div>
        </div>

        <div className="about-content">
          <h3 className="about-subtitle">Designing and building digital solutions</h3>
          <p className="about-text">
            Hello! I'm Aakanksha Kantilal Bugad, a motivated Computer Science Engineering student and Software Engineering Intern. I specialize in web engineering, AI integrations, and responsive client-side development.
          </p>
          <p className="about-text">
            I am a quick learner, adaptable team collaborator, and passionate about leveraging emerging technologies to build user-friendly, optimized web applications.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                {stat.icon}
                <h4 className="stat-val">{stat.value}</h4>
                <p className="stat-lbl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
