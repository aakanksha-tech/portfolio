import { useState } from 'react';
import { Code2, Layout, Database, Sparkles } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories = {
    languages: {
      icon: <Code2 />,
      label: 'Programming',
      skills: [
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'Java', level: 80 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'PHP', level: 75 },
      ]
    },
    frontend: {
      icon: <Layout />,
      label: 'Frameworks & UI',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Bootstrap', level: 92 },
        { name: 'Express.js (Backend)', level: 82 },
        { name: 'Responsive UI Design', level: 94 },
      ]
    },
    backend: {
      icon: <Database />,
      label: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 84 },
        { name: 'Firebase', level: 80 },
        { name: 'Git & GitHub', level: 88 },
      ]
    },
    softskills: {
      icon: <Sparkles />,
      label: 'Soft Skills',
      skills: [
        { name: 'Quick Learner & Adaptable', level: 95 },
        { name: 'Curious & Curious Mind', level: 92 },
        { name: 'Disciplined Work Ethic', level: 96 },
        { name: 'Team Player', level: 90 },
      ]
    }
  };

  return (
    <section id="skills" className="skills-section reveal">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {/* Navigation Tabs */}
        <div className="skills-tabs">
          {Object.keys(skillCategories).map((key) => (
            <button
              key={key}
              className={`skill-tab-btn glass-card ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{skillCategories[key].icon}</span>
              <span className="tab-label">{skillCategories[key].label}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="skills-display glass-card">
          <h3 className="category-title">{skillCategories[activeTab].label}</h3>
          <div className="skills-list">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
