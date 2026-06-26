import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const journey = [
    {
      id: 1,
      type: 'work',
      role: 'Software Engineering Intern',
      company: 'Seaquid Technology (Kolhapur)',
      duration: 'Recent (45 Days)',
      description: 'Developed responsive, user-friendly pages using HTML, CSS, Bootstrap, and JavaScript. Improved website usability, design layouts, and browser compatibility.',
      icon: <Briefcase className="timeline-icon" />
    },
    {
      id: 2,
      type: 'work',
      role: 'Web Development Intern',
      company: 'Techspot Infotech (Sangli)',
      duration: '3 Months Intern',
      description: 'Gained hands-on industry experience building modern frontends with React.js, HTML5, CSS3, Bootstrap, and JavaScript. Focused on responsive components.',
      icon: <Briefcase className="timeline-icon" />
    },
    {
      id: 3,
      type: 'education',
      role: 'BTech in Computer Science & Engineering',
      company: 'Sharad Institute Of Technology College Of Engineering, Yadrav',
      duration: '2024 - 2027',
      description: 'Pursuing core computer science principles. Currently maintaining a cumulative GPA of 7.67 / 10.00.',
      icon: <GraduationCap className="timeline-icon" />
    },
    {
      id: 4,
      type: 'education',
      role: 'Diploma in Computer Engineering',
      company: 'DKTE Yashwantrao Chavan Polytechnic, Ichalkaranji',
      duration: '2021 - 2024',
      description: 'Completed technical diploma program with aggregate score of 87% / 100%.',
      icon: <GraduationCap className="timeline-icon" />
    },
    {
      id: 5,
      type: 'education',
      role: 'HSC Secondary School Certificate',
      company: 'Shri Balaji English Medium School, Ichalkaranji',
      duration: '2020 - 2021',
      description: 'Completed secondary education with score of 87% / 100%.',
      icon: <GraduationCap className="timeline-icon" />
    },
    {
      id: 6,
      type: 'course',
      role: 'Java & Advanced Java Certification',
      company: 'Universal Education',
      duration: 'Course Completed',
      description: 'Completed rigorous curriculum covering OOP, JDBC, Servlets, and JSP fundamentals.',
      icon: <Award className="timeline-icon" />
    },
    {
      id: 7,
      type: 'course',
      role: 'Artificial Intelligence & Machine Learning',
      company: 'Techspot Infotech',
      duration: 'Course Completed',
      description: 'Trained in data pre-processing, regression modeling, neural network concepts, and predictive analytics.',
      icon: <Award className="timeline-icon" />
    }
  ];

  return (
    <section id="experience" className="experience-section reveal">
      <h2 className="section-title">My Journey</h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        {journey.map((item) => (
          <div key={item.id} className="timeline-item">
            {/* Timeline node icon */}
            <div className="timeline-node glass-card">
              {item.icon}
            </div>

            {/* Timeline Card content */}
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <span className="timeline-date">
                  <Calendar size={14} className="date-icon" /> {item.duration}
                </span>
                <span className={`timeline-badge ${item.type}`}>
                  {item.type.toUpperCase()}
                </span>
              </div>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company text-gradient">{item.company}</h4>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
